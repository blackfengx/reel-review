<font size =10>**Movies**</font>

<font size =5>**Get list of Movies**</font>
 * Endpoint path: /movies
 * Endpoint method: GET

 * Headers:
    * Authorization: Bearer token

 * Response: A list of movies
 * Response Example:

<font size =5>**Movie Details**</font>
 * Endpoint path: movies/{id}
 * Endpoint method: GET

 * Headers:
    * Authorization: Bearer token

 * Response: Details of a Specific Movie
 * Response Example:

<font size =10>**Review** </font>

<font size =5>**Create a Review**</font>
 * Endpoint path: /reviews
 * Endpoint method: POST

 * Headers:
    * Authorization: Bearer token

 * Response: Creates a review
 * Response Example:

<font size =5>**Update a Review**</font>
 * Endpoint path: /reviews/{id}
 * Endpoint method: PUT

 * Headers:
    * Authorization: Bearer token

 * Response: Updates field/fields of a review
 * Response Example:

<font size =5>**Delete a Review**</font>
 * Endpoint path: /reviews/{id}
 * Endpoint method: DELETE

 * Headers:
    * Authorization: Bearer token

 * Response: Deletes a Review
 * Response Example:

<font size =5>**Get a list of Reviews**</font>
 * Endpoint path: /review
 * Endpoint method: GET

 * Headers:
    * Authorization: Bearer token

 * Response: Gets a list of reviews
 * Response Example:

 <font size =5>**Get a Review**</font>
 * Endpoint path: /review/{id}
 * Endpoint path: GET

 * Headers:
    * Authorization: Bearer token

 * Response: Gets a single Review
 * Response Example:

<font size =7>**Account**</font>

<font size =5>**Log In**</font>
 * Endpoint path: /token
 * Endpoint method: POST

 * Headers:
    * Authorization: Bearer token

 * Response: Logs the user in allowing access to features requiring token
 * Response Example:

<font size =5>**Log Out**</font>
  * Endpoint path: /token
 * Endpoint method: DELETE

 * Headers:
    * Authorization: Bearer token

 * Response: Logs the user out of their account removing access from features that require token
 * Response Example:

<font size =7>**Profile**</font>

<font size =5>**Edit Profile**</font>
 * Endpoint path: /profile/{id}
 * Endpoint method: PUT

 * Headers:
    * Authorization: Bearer token

 * Response: Update/edit field/fields on profile
 * Response Example:

<font size =5>**Delete Profile**</font>
 * Endpoint path: /profile/{id}
 * Endpoint method: DELETE

 * Headers:
    * Authorization: Bearer token

 * Response: Delete/Deactivate Account
 * Response Example:
