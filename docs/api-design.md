
# **Movies**

### **Get list of Movies**
 * Endpoint path: /movies
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: A list of movies
 * Response shape (JSON):

### **Detail of a Movie**
 * Endpoint path: movies/{id}
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Details of a Specific Movie
 * Response shape (JSON):

# Review

### **Create a Review**
 * Endpoint path: /reviews
 * Endpoint method: POST
 * Headers:
    * Authorization: Bearer token
 * Response: Creates a review
 * Response shape (JSON):

### **Update a Review**
 * Endpoint path: /reviews/{id}
 * Endpoint method: PUT
 * Headers:
    * Authorization: Bearer token
 * Response: Updates field/fields of a review
 * Response shape (JSON):

### **Delete a Review**
 * Endpoint path: /reviews/{id}
 * Endpoint method: DELETE
 * Headers:
    * Authorization: Bearer token
 * Response: Deletes a Review
 * Response shape (JSON):

### **Get a list of Reviews**
 * Endpoint path: /review
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Gets a list of reviews
 * Response shape (JSON):

### *Get a Review**
 * Endpoint path: /review/{id}
 * Endpoint path: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Gets a single Review
 * Response shape (JSON):


# Account

### **Log In**
 * Endpoint path: /token
 * Endpoint method: POST
 * Request shape (JSON):
   ```
   {
    username: str
    password: str
   }

 * Headers:
    * Authorization: Bearer token
 * Response: Logs the user in allowing access to features requiring token
 * Response shape (JSON):
   ```
   {

   }

### **Log Out**
 * Endpoint path: /token
 * Endpoint method: DELETE
 * Headers:
    * Authorization: Bearer token
 * Response: Logs the user out of their account removing access from features that require token
 * Response shape (JSON):

### **Get Profile Details**
 * Endpoint path: /token
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Display the logged in users deatails on the page.
 * Response shape (JSON):

### **Sign Up**
 * Endpoint path: /accounts
 * Endpoint method: POST
 * Headers:
    * Authorization: Bearer token
 * Response: Creates a new account
 * Response Example:
 * Response shape (JSON):
   ```
   {

   }


## Profile

**Edit Profile**
 * Endpoint path: /profile/{id}
 * Endpoint method: PUT
 * Headers:
    * Authorization: Bearer token
 * Response: Update/edit field/fields on profile
 * Response Example:
 * Response shape (JSON):

**Delete Profile**
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
