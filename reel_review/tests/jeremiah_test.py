from fastapi.testclient import TestClient
from main import app
from queries.movies_api import MovieQueries
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {"id": 80, "username": "fakeuser"}


class MockMovieQueries:
    def search(self):
        return []


def test_25():
    # arrange
    app.dependency_overrides[MovieQueries] = MockMovieQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    # act
    res = client.get("/api/movies/{title}")

    # assert
    assert res.status_code == 200
