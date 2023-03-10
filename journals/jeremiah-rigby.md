# **February 9th, 2023:**

Received our starter code from gitlab today and I am setting up my own journal to begin my daily writing.
We as a group are also trying to finish up the wireframe and api endpoints.
I plan on studying FASTAPI over the weekend

# **February 13th, 2023:**

We worked mostly on setting up the database and docker files. Bradley drove most of the afternoon. And I drove after afternoon break.
There is definitely a little bit of confusion on if we are doing things correctly. but we are pushing along and will troubleshoot as we run into any erros

# **February 14th, 2023:**

We worked much of the day on setting up our database and fixing bugs. The information given from learn for us to copy is not what is actually needed so under the instruction of one of our instructors we undid a lot of the damage that learn did and got our yaml file to a more functional and understanable code. We also spent a little bit of time working on the account queries in the afternoon. Todays drivers were Myself, Bradley, and Alexa.

# **February 15th, 2023:**

Today we spent most of the day working on authentication. Authentication is now done, and we have started on a few of the routers and queries as well. We can now create an account, login and logout.

# **February 21st, 2023:**

Today we completed most everything on the backend. We created the rest of our 3rd party api calls. as well as all crud calls for a review. The only thing we have left to do before the backend is complete, is to add authentication requirements for all of the endpoints that we want locked unless you're logged in.

# **February 22nd, 2023:**

Today we finished up our backend by fixing some weird authentication bugs, we then moved on to the frontend and got data for movies and reviews working in our frontend to properly display data (nothing is styled). we plan to study up on front end authentication tonight then rally together tomorrow to get frontend auth done.

# **February 23rd, 2023:**

We are still kinda stuck on front end authorization. We are able to log in on the front end and get a token, but are having trouble accessing the token in other components. We were also able to protect the back end routers and return the proper status codes.

# **February 24th, 2023:**

We got our authorization working and set up our login and create requests for accounts. We also set up the inial homepage setup as well as the nav bar for our services.

# **February 27th, 2023:**

Today we made a lot of progress on our frontend. we now have a functioning trending movies, search capability, and movie detail page. all links are working properly and there don't appear to be any major bugs. Hoping to finish up frontend functionality and start working on styling (tailwind) tomorrow

# **February 28th, 2023:**

Today we finished up a few of the functional pieces in our frontend. we fixed the search system from a few bugs. we also made it so the navbar is hidden on the login and signup pages as well as made it so that if we go to any non login page without having a token that it will redirect us to the welcome page so we can login. We then worked on tailwind in the afternoon. website is well on its way.

# **March 1st, 2023:**

Today we pretty much completed our frontend, there are things we will possibly add to the project, but it could be turned in as is as long as we remove all the console errors. We implemented functionality to get a youtube video for the movide detail page.

# **March 2nd, 2023:**

Today was mainly a tailwind day. We cleaned up some code and made the overall asthetic of the webpage look better. We also implemented a reviews page for the movie detail page that shows the (up to) 5 most recent movie reviews that don't exceed a certain length of characters

# **March 3rd, 2023:**

Today we implemented a carousel for trailer and reviews on movie detail. We also spent a large portion of the day fixing our login functionality that was bugging out with certain things put into the signup field. it ended up being a small error in the queries, but we spent most of the day tracking it down to fix it

# **March 6th, 2023:**

Today we had our practice test so we didn't have a ton of time. but we did clean up some of our code and work on a few small things. One of the things we worked on was removing all errors from the console. for example we had an error that was happening that basically part of the jsx was rendering before we had a fucntion render. so we fixed it with a conditional that temporarily sets the broken portion to null and then in the jsx there is and if null statement that temporarily sets it to something while its loading. we also wrote our individual unit tests.

# **March 7th, 2023:**

Today we spent a good amount of time doing final touches on our project, fixing a few minor bugs but mainly just cleaning up the rest of our code so it is ready for deployment. We then started deployment after the afternoon checkin and got a few of the earlier portions of the deployment process done. Hoping to finish tomorrow.

# **March 8th, 2023:**

Today we worked on deployment and made some good progress but still have not fully deployed our project. we had some eslint issues with the frontend that we are working on fixing. We also had some weird issues with our backend not having the correct parameters. We talked with Riley and he reached out to another instructor to see if we can figure out what is going on

# **March 9th, 2023:**

Today we finally got deployed! our website is up and functional and we fixed a few minor bugs, including: fixing the search bar on the main page, fixing reviews so that all of them properly show up.
