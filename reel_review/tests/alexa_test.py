from fastapi.testclient import TestClient
from queries.reviews import ReviewRepository, ReviewIn, ReviewOut
from authenticator import authenticator
from main import app
import json

# Instantiating client
client = TestClient(app=app)


def get_current_account_mock():
    return {"id": 2}


class ReviewRepositoryMock:
    def create(self, review: ReviewIn) -> ReviewOut:
        review_dict = review.dict()
        return ReviewOut(id=3, **review_dict)


def test_create_review():
    # Arrange
    app.dependency_overrides[ReviewRepository] = ReviewRepositoryMock
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = get_current_account_mock
    review_body = {
         "movie_id": 550,
        "display_name": "StarLord",
        "rating": 7.5,
        "comments": "decent"
    }
    # Act
    response = client.post("/api/reviews/create", json.dumps(review_body))

    # Assert
    assert response.status_code == 201
    assert response.json()["id"] == 3

    # A cleanup
    app.dependency_overrides = {}
