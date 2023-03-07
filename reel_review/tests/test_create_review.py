# from fastapi.testclient import TestClient
# from main import app
# from queries.reviews import ReviewRepository, ReviewIn, ReviewOut
# from authenticator import authenticator
# import json

# client = TestClient(app)

# def fake_get_current_account_data():
#     return {
#         'id': 99,
#         'username': 'fakeuser'
#     }

# class FakeReviewRepository:
#     def create_review(self, review_in):
#         review_dict = review_in.dict()
#         review_dict
#         return ReviewOut(id=1, **review_dict)


# def test_create_review():
#     # Arrange
#     app.dependency_overrides[ReviewRepository] = FakeReviewRepository
#     app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data


#     # Act
#     review = {
#         "movie_id": 550,
#         "display_name": "LordJimmy960",
#         "rating": 8.2,
#         "comments": "bad movie maybe"
#     }
#     res = client.post('/api/reviews/create', json=review)

#     # Assert
#     assert res.status_code == 201
