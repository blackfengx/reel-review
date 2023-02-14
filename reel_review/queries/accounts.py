from queries.pool import pool
from pydantic import BaseModel
from typing import Optional


class DuplicateAccountError(ValueError):
    pass


class AccountsIn(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    user_name: str
    email: Optional[str]
    password: str


class AccountsOut(BaseModel):
    id: int
    first_name: Optional[str]
    last_name: Optional[str]
    user_name: str
    email: Optional[str]


class AccountsOutWithPassword(AccountsOut):
    hashed_password: str


class AccountsRepository:
    def create(AccountsIn: AccountsOut):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute()
