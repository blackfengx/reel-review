from queries.pool import pool
from pydantic import BaseModel
from typing import Optional


class DuplicateAccountError(ValueError):
    pass


class AccountsOut(BaseModel):
    id: int
    first_name: Optional[str]
    last_name: Optional[str]
    username: str
    email: Optional[str]


class AccountsOutWithPassword(AccountsOut):
    hashed_password: str


class AccountsIn(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    username: str
    email: Optional[str]
    password: str


class AccountsRepository:
    def create(self, account: AccountsIn, hashed_password: str):
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    result = cur.execute(
                        """
                        INSERT INTO accounts (
                            first_name
                            , last_name
                            , username
                            , email
                            , hashed_password
                        )
                        VALUES (%s, %s, %s, %s, %s)
                        RETURNING id
                        """,
                        [
                            account.first_name,
                            account.last_name,
                            account.username,
                            account.email,
                            hashed_password,
                        ],
                    )
                    id = result.fetchone()[0]
                    return AccountsOutWithPassword(
                        id=id,
                        first_name=account.first_name,
                        last_name=account.last_name,
                        username=account.username,
                        email=account.email,
                        hashed_password=hashed_password,
                    )
        except Exception as e:
            print(e)
            return None

    def get(self, username: str) -> Optional[AccountsOutWithPassword]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    result = cur.execute(
                        """
                        SELECT id
                        , first_name
                        , last_name
                        , username
                        , email
                        , hashed_password
                        FROM accounts
                        WHERE username = %s
                        """,
                        [username],
                    )
                    record = result.fetchone()
                    return self.record_to_account_out(record)
        except Exception as e:
            print(e)
            return {"message": "Could not get that account"}

    def delete(self, username: str) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        DELETE FROM accounts
                        WHERE username = %s
                        """,
                        [username],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def record_to_account_out(self, record):
        return AccountsOutWithPassword(
            id=record[0],
            first_name=record[1],
            last_name=record[2],
            username=record[3],
            email=record[4],
            hashed_password=record[5],
        )
