from fastapi import APIRouter, Depends, HTTPException, status, Response, Request
from typing import Optional
from queries.accounts import AccountsIn, AccountsRepository, AccountsOut, AccountsOutWithPassword, DuplicateAccountError
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel

class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountsOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.get("/api/protected", response_model=bool, tags=["accounts"])
async def get_protected(
    account_data: Optional[dict] = Depends(authenticator.try_get_current_account_data),
):
    return True


@router.get("/token", response_model=AccountToken | None, tags=["accounts"])
async def get_token(
    request: Request,
    account: AccountsOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }

@router.delete("/api/accounts/{username}", response_model=bool, tags=["accounts"])
def delete_account(
    username: str,
    repo: AccountsRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    if account_data is None:
        raise HTTPException(status_code=401, detail="Not logged in")
    return repo.delete(username)

@router.post("/api/accounts", response_model=AccountToken | HttpError, tags=["accounts"])
async def create_account(
    info: AccountsIn,
    request: Request,
    response: Response,
    repo: AccountsRepository = Depends(),
) -> AccountsOutWithPassword | None:
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = repo.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())

@router.get("/api/accounts/{username}", response_model=AccountsOutWithPassword | None, tags=["accounts"])
def get_account(
    username: str,
    repo: AccountsRepository = Depends()
) -> AccountsOutWithPassword | None:
    return repo.get(username)
