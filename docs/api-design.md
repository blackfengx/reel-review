
# **Movies**

### **Get list of Movies**
 * Endpoint path: /movies
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: A list of movies
 * Response Shape (JSON):
   ```
   {
      "movies": {
         "id": int,
         "title": string,
         "poster_path": string,
         "runtime": int,
         "vote_average": int,
         "overview": string,
         "genre": string,
      }
      {
         "id": int,
         "title": string,
         "poster_path": string,
         "runtime": int,
         "vote_average": int,
         "overview": string,
         "genre": string,
      }
      {
         "id": int,
         "title": string,
         "poster_path": string,
         "runtime": int,
         "vote_average": int,
         "overview": string,
         "genre": string,
      }
   }

### **Detail of a Movie**
 * Endpoint path: movies/{id}
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Details of a Specific Movie
 * Response Shape (JSON):
   ```
   {
      "id": int,
      "title": string,
      "poster_path": jpeg,
      "runtime": int,
      "vote_average": int,
      "overview": string,
      "genre": string
   }

# Review

### **Create a Review**
 * Endpoint path: /reviews
 * Endpoint method: POST
 * Request Shape (JSON):
   ```
   {
      "movie": string,
      "display_name": string,
      "rating": float,
      "comments" string
   }
 * Headers:
    * Authorization: Bearer token
 * Response: Creates a review
 * Response Shape (JSON):
   ```
   {
      "id": int,
      "movie": string,
      "display_name": string,
      "rating": float,
      "comments" string
   }
### **Update a Review**
 * Endpoint path: /reviews/{id}
 * Endpoint method: PUT
 * Request Shape (JSON):
   ```
   {
      "id": int,
      "movie": string,
      "display_name": string,
      "rating": float,
      "comments" string
   }
 * Headers:
    * Authorization: Bearer token
 * Response: Updates field/fields of a review
 * Response Shape (JSON):
   ```
   {
      "id": int,
      "movie": string,
      "display_name": string,
      "rating": float,
      "comments" string
   }

### **Delete a Review**
 * Endpoint path: /reviews/{id}
 * Endpoint method: DELETE
 * Headers:
    * Authorization: Bearer token
 * Response: Deletes a Review
 * Response Shape (JSON):
   ```
   {
      "message": The review with the id of {id} has been deleted.
   }

### **Get a list of Reviews**
 * Endpoint path: /review
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Gets a list of reviews
 * Response Shape (JSON):
   ```
   {
      "id": int,
      "movie": string,
   }

### *Get a Review**
 * Endpoint path: /review/{id}
 * Endpoint path: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Gets a single Review
 * Response Shape (JSON):
   ```
   {
      "id": int,
      "movie": string,
      "display_name": string,
      "rating": float,
      "comments" string
   }


# Account

### **Log In**
 * Endpoint path: /token
 * Endpoint method: POST
 * Request Shape (JSON):
   ```
   {
    username: str,
    password: str,
   }

 * Headers:
    * Authorization: Bearer token
 * Response: Logs the user in allowing access to features requiring token
 * Response Shape (JSON):
   ```
   {
      "token": str
   }

### **Log Out**
 * Endpoint path: /token
 * Endpoint method: DELETE
 * Headers:
    * Authorization: Bearer token
 * Response: Logs the user out of their account removing access from features that require token
 * Response Shape (JSON):
   ```
   {
      "message": Token has been deleted and user has been signed out.
   }


### **Get Profile Details**
 * Endpoint path: /token
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Display the logged in users deatails on the page.
 * Response Shape (JSON):

### **Sign Up**
 * Endpoint path: /accounts
 * Endpoint method: POST
 * Request Shape (JSON):
   ```
   {
      "name": str,
      "username": str,
      "password": str,
      "email": str
   }
 * Response: Creates a new account
 * Response Shape (JSON):
   ```
   {
      "token_type": "Bearer",
      "access_token": str,
      "account": {
         "id": int
         "name": str,
         "username": str,
         "password": str,
         "email": str,
      }
   }


# Profile

### **Edit Profile**
 * Endpoint path: /profile/{id}
 * Endpoint method: PUT
 * Request Shape (JSON):
   ```
   {
      "name": str,
      "username": str,
      "password": str,
      "email": str
   }
 * Headers:
    * Authorization: Bearer token
 * Response: Update/edit field/fields on profile
 * Response Example:
 * Response shape (JSON):
   ```
   {
      "id": int,
      "name": str,
      "username": str,
      "password": str,
      "email": str
   }

### **Delete Profile**
 * Endpoint path: /profile/{id}
 * Endpoint method: DELETE
 * Headers:
    * Authorization: Bearer token
 * Response: Delete/Deactivate Account
 * Response shape (JSON):
   ```
   {
      "message": "Token has been successfully deleted and user has been logged out."
   }
