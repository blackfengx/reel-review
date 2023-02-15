from fastapi import APIRouter
from queries.accounts import AccountsIn

router = APIRouter()

@router.post("/accounts")
def create_account(accounts:AccountsIn):
    pass
