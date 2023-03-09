# **Movies**

### **Get list of Movies**

- Endpoint path: /api/movies/{title}
- Endpoint method: GET
- Headers:
  - Authorization: Bearer token
- Response: A list of movies
- Response Shape (JSON):
  ```
  [
  {
  "movie_id": 0,
  "title": "string",
  "poster_path": "string",
  "vote_average": 0
  }
  {
  "movie_id": 0,
  "title": "string",
  "poster_path": "string",
  "vote_average": 0
  }
  {
  "movie_id": 0,
  "title": "string",
  "poster_path": "string",
  "vote_average": 0
  }
  ]
  ```

### **Detail of a Movie**

- Endpoint path: /api/movies/{id}
- Endpoint method: GET
- Headers:
  - Authorization: Bearer token
- Response: Details of a Specific Movie
- Response Shape (JSON):
  ```
  {
  "movie_id": 0,
  "title": "string",
  "poster_path": "string",
  "runtime": 0,
  "vote_average": 0,
  "overview": "string",
  "trailer": "string"
  }
  ```

### **Get list of Trending Movies**

- Endpoint path: /api/movies/trending
- Endpoint method: GET
- Headers:
  - Authorization: Bearer token
- Response: A list of movies
- Response Shape (JSON):
  ```
  [
  {
  "movie_id": 0,
  "title": "string",
  "poster_path": "string",
  "vote_average": 0
  }
  {
  "movie_id": 0,
  "title": "string",
  "poster_path": "string",
  "vote_average": 0
  }
  {
  "movie_id": 0,
  "title": "string",
  "poster_path": "string",
  "vote_average": 0
  }
  ]
  ```

# Review

### **Create a Review**

- Endpoint path: /api/reviews/create
- Endpoint method: POST
- Headers:
  - Authorization: Bearer token
- Request Shape (JSON):

  ```
  {
  "movie_id": 0,
  "display_name": "string",
  "rating": 0,
  "comments": "string"
  }
  ```

- Endpoint path: /api/reviews/create
- Endpoint method: POST
- Headers:
  - Authorization: Bearer token
- Request Shape (JSON):
  {
  "movie_id": 0,
  "display_name": "string",
  "rating": 0,
  "comments": "string",
  "id": 0
  }

### **Update a Review**

- Endpoint path: /api/reviews/{review_id}
- Endpoint method: PUT
- Headers:
  - Authorization: Bearer token
- Request Shape (JSON):
  ```
  {
  "movie_id": 0,
  "display_name": "string",
  "rating": 0,
  "comments": "string"
  }
  ```
- Headers:
  - Authorization: Bearer token
- Response: Updates field/fields of a review
- Response Shape (JSON):
  ```
  {
  "movie_id": 0,
  "display_name": "string",
  "rating": 0,
  "comments": "string",
  "id": 0
  }
  ```

### **Delete a Review**

- Endpoint path: /api/reviews/{review_id}
- Endpoint method: DELETE
- Headers:
  - Authorization: Bearer token
- Response: Deletes a Review
- Response Shape (JSON):
  ```
  204 	Successful Response
  ```

### **Get a list of Reviews**

- Endpoint path: /api/reviews
- Endpoint method: GET
- Headers:
  - Authorization: Bearer token
- Response: Gets a list of reviews
- Response Shape (JSON):
  ```
  [
  {
    "movie_id": 0,
    "display_name": "string",
    "rating": 0,
    "comments": "string",
    "id": 0
  }
  ]
  ```

### \*Get a Review\*\*

- Endpoint path: /api/reviews/{review_id}
- Endpoint path: GET
- Headers:
  - Authorization: Bearer token
- Response: Gets a single Review
- Response Shape (JSON):
  ```
  {
  "movie_id": 0,
  "display_name": "string",
  "rating": 0,
  "comments": "string",
  "id": 0
  }
  ```

# Account

### **Log In**

- Endpoint path: /token
- Endpoint method: POST
- Request Shape (JSON):

  ```
  {
   username: str,
   password: str,
  }

  ```

- Headers:
  - Authorization: Bearer token
- Response: Logs the user in allowing access to features requiring token
- Response Shape (JSON):
  ```
  {
  "access_token": "string",
  "token_type": "Bearer"
  }
  ```

### **Log Out**

- Endpoint path: /token
- Endpoint method: DELETE
- Headers:
  - Authorization: Bearer token
- Response: Logs the user out of their account removing access from features that require token
- Response Shape (JSON):
  ```
  {
     "true"
  }
  ```

### **Get Profile Details**

- Endpoint path: /token
- Endpoint method: GET
- Headers:
  - Authorization: Bearer token
- Response: Display the logged in users deatails on the page.
- Response Shape (JSON):

### **Sign Up**

- Endpoint path: /accounts
- Endpoint method: POST
- Request Shape (JSON):
  ```
  {
     "name": str,
     "username": str,
     "password": str,
     "email": str
  }
  ```
- Response: Creates a new account
- Response Shape (JSON):
  ```
  {
     "id": int
     "name": str,
     "username": str,
     "password": str,
     "email": str,
  }
  ```

# Profile

### **Edit Profile**

- Endpoint path: /profile/{id}
- Endpoint method: PUT
- Request Shape (JSON):
  ```
  {
     "name": str,
     "username": str,
     "password": str,
     "email": str
  }
  ```
- Headers:
  - Authorization: Bearer token
- Response: Update/edit field/fields on profile
- Response Example:
- Response shape (JSON):
  ```
  {
     "id": int,
     "name": str,
     "username": str,
     "password": str,
     "email": str
  }
  ```

### **Delete Profile**

- Endpoint path: /profile/{id}
- Endpoint method: DELETE
- Headers:
  - Authorization: Bearer token
- Response: Delete/Deactivate Account
- Response shape (JSON):
  ```
  {
     "message": "Token has been successfully deleted and user has been logged out."
  }
  ```
