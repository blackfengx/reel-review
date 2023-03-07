# Smelli Belli

- Dario Armendariz II
- Alexa Randolph
- Bradley Daniels
- Jeremiah Rigby

Reel Review – Giving you access to info on all the movies under the sun with the ability to rate and see others ratings of all the movies you love.

## Design

- [API design](docs/apis.md)
- [Data model](docs/data-model.md)
- [GHI](docs/ghi.md)
- [Integrations](docs/integrations.md)

## Intended market

We are targeting our movie loving audience that wants to be able to rate and view all the movies they love, as well as see what's currently trending to give them ideas on what to watch, all in one convenient place.

## Functionality

- Visitors to our website can start by creating a unique profile that will give them access to their own account
- Logged in users will first be directed to the main page where they can see a list of trending movies that will give them an idea on what to watch
- If they don't want to interact with the trending movies they can easily search for any movie they want right from the home page
- After finding the movie they want to interact with they can click on the movie card in order to access several actions including:
  - Ability to view a synopsis of the movie as well as runtime and overall rating
  - Ability to view a trailer of the movie if one exists on youtube
  - Ability to see up to the 5 most recent reviews for that particular movie
  - Ability to Click a review button in order to review the movie yourself
- The review form will allow you to at a rating from 1-10 as well as comments about the movie
- The review will be assigned automatically to the user who is logged in
- You can also navigate to review page where you can see a list of ALL reviews people have left on ALL movies.
  - Or you can click a dropdown in order to see only your Reviews
    -While in the "My Reviews" section you have the ability to delete any of the reviews that you created

## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Go to THE MOVIE DATABASE API website and get an API key
4. Create a top level .env file in your project and put the key in there under the variable 'MOVIE_KEY'
5. Run `docker volume create postgres-data`
6. Run `docker compose build`
7. Run `docker compose up`
8. Run `python -m migrations up` in reel-review docker container terminal
9. Go to localhost:3000 and enjoy!
