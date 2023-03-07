from fastapi.testclient import TestClient
from main import app
from routers.reviews import ReviewRepository
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {
        "id": 99,
        "username": "fakeuser",
    }


class FakeReviewQueries:
    def get_reviews(self):
        return []


def test_get_review_list():
    app.dependency_overrides[ReviewRepository] = FakeReviewQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    res = client.get("/api/reviews")

    assert res.status_code == 200
