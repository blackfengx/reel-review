
## **Movies**

### **Get list of Movies**
 * Endpoint path: /movies
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: A list of movies

**Detail of a Movie**
 * Endpoint path: movies/{id}
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Details of a Specific Movie


## Review

**Create a Review**
 * Endpoint path: /reviews
 * Endpoint method: POST
 * Headers:
    * Authorization: Bearer token
 * Response: Creates a review
 * Response Example:

**Update a Review**
 * Endpoint path: /reviews/{id}
 * Endpoint method: PUT
 * Headers:
    * Authorization: Bearer token
 * Response: Updates field/fields of a review
 * Response Example:

**Delete a Review**
 * Endpoint path: /reviews/{id}
 * Endpoint method: DELETE
 * Headers:
    * Authorization: Bearer token
 * Response: Deletes a Review

**Get a list of Reviews**
 * Endpoint path: /review
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Gets a list of reviews

**Get a Review**
 * Endpoint path: /review/{id}
 * Endpoint path: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Gets a single Review


## Account

**Log In**
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
 * Response Example:
   ```
   {

   }

**Log Out**
 * Endpoint path: /token
 * Endpoint method: DELETE
 * Headers:
    * Authorization: Bearer token
 * Response: Logs the user out of their account removing access from features that require token

**Get Profile Details**
 * Endpoint path: /token
 * Endpoint method: GET
 * Headers:
    * Authorization: Bearer token
 * Response: Display the logged in users deatails on the page.

**Sign Up**
 * Endpoint path: /accounts
 * Endpoint method: POST
 * Headers:
    * Authorization: Bearer token
 * Response: Creates a new account
 * Response Example:


## Profile

**Edit Profile**
 * Endpoint path: /profile/{id}
 * Endpoint method: PUT
 * Headers:
    * Authorization: Bearer token
 * Response: Update/edit field/fields on profile
 * Response Example:

**Delete Profile**
 * Endpoint path: /profile/{id}
 * Endpoint method: DELETE
 * Headers:
    * Authorization: Bearer token
 * Response: Delete/Deactivate Account
