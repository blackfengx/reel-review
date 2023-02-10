## Movies

**Get list of Movies**
 * Endpoint path: /movies
 * Endpoint method: GET

 * Headers:
    * Authorization: Bearer token

 * Response: A list of movies
 * Response Example:

**Detail of a Movie**
 * Endpoint path: movies/{id}
 * Endpoint method: GET

 * Headers:
    * Authorization: Bearer token

 * Response: Details of a Specific Movie
 * Response Example:

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
 * Response Example:

**Get a list of Reviews**
 * Endpoint path: /review
 * Endpoint method: GET

 * Headers:
    * Authorization: Bearer token

 * Response: Gets a list of reviews
 * Response Example:

**Get a Review**
 * Endpoint path: /review/{id}
 * Endpoint path: GET

 * Headers:
    * Authorization: Bearer token

 * Response: Gets a single Review
 * Response Example:

## Account

**Log In**
 * Endpoint path: /token
 * Endpoint method: POST

 * Headers:
    * Authorization: Bearer token

 * Response: Logs the user in allowing access to features requiring token
 * Response Example:

**Log Out**
  * Endpoint path: /token
 * Endpoint method: DELETE

 * Headers:
    * Authorization: Bearer token

 * Response: Logs the user out of their account removing access from features that require token
 * Response Example:

**Get Profile Details**
  * Endpoint path: /token
 * Endpoint method: GET

 * Headers:
    * Authorization: Bearer token

 * Response: Display the logged in users deatails on the page.
 * Response Example:

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
 * Response Example:
