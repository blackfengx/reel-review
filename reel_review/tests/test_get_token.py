from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountsRepository
from authenticator import authenticator

client = TestClient(app)

def fake_get_current_account_data():
    return {
        "id": 99,
        "username": "fakeuser"
    }

class FakeAccountsRepository:
    def token(self):
        return []


def test_get_token():
    #arrange
    app.dependency_overrides[AccountsRepository] = FakeAccountsRepository
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    #act
    res = client.get("/token")

    #assert
    assert res.status_code== 200
