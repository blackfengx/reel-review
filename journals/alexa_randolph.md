# **February 9th, 2023**

Today we forked and cloned our gitlab repo and discussed how we would manage our branches. Initially we were each going to work on our own self-titled branches, however we determined this may complicate things once we get further into the implementation phase. Our wireframe is almost complete and we're focusing on hashing out the API endpoints. Because we will be using FastAPI instead of Django we're contemplating our options with data relationships from our user, review, and media objects.

# **February 10th, 2023**

My group asked Jimmy to review our wireframe and API endpoints. He pointed out a few areas for improvement and encouraged us to provide more detail on the flow of our website. This led to further discussion on what we want our application to achieve and how to execute. Towards the end of the day we were able to reach a conclusion on our reviews page as well as how all our response shapes should flow regarding the API endpoints.

# **February 13th, 2023**

Today our team worked through the "project set up" module in Learn. We mainly worked on our docker-compose.yaml file to ensure it was updated with the correct applications/versions needed. We decided to go the PostgreSQL route so we set up and installed all the necessary components to connect our server with pg-admin. Changing the name of our file from `sample_service` to `reel_review` caused some complications with Docker. Ultimately we were able to find a workaround by commenting out the original `fast-api` specifications in the yaml file.

# **February 14th, 2023**

Our group began working on queries today and completed the pg-admin administration. Once we began working on our queries we slowly realized that we weren't as familiar with Fast API as we need to be. We decided to complete the create account function we were working on and spend the rest of the night re-watching the explorations in order to get a better handle on the new material.

# **February 15th, 2023:**

Today our group was able to finish up the authentication feature. Our decision to re-read the material in Learn really helped us to figure out the components that we needed to get the feature working. We are spending the second half of our day on syncing our 3rd party api and creating our initial list views/routes. We are hoping to get our backend completed by end of next week.

# **February 21st, 2023:**

Over the holiday weekend my group met up to work out some of the kinks in our 3rd party api calls. After taking time to review separately we were able to share ideas and reach a solution. We also made a lot of progress today, our backend is mostly complete: CRUD functionality on reviews and accounts and we have our 3rd party endpoints complete. We are missing a protected view as well as token validation, but we hope to tackle that tomorrow.

# **February 22nd, 2023:**

My team and I made good progress today. We made a few tweaks on the backend and began working on some front end components. We chose to focus on getting our data to display correctly first and then work on styling later down the line. I'm in the process of working on our login page, however the authentication piece is a little confusing. I plan on reading up on it further and trying again tomorrow.

# **February 23rd, 2023:**

Authentication continued being a challenge today. The team continued working on getting our data to show on the different url paths. And I got our login feature to work however once logged in, the access token would not sync with our other protected webpages. Our plan is to seek help tomorrow and hopefully resolve the access token issue and proceed with the rest of our front-end goals.

# **February 24th, 2023:**

I'm happy with the progress my team made today. We solved our issue on passing the access token through our other site's routes. Also, we discussed having CRUD functionality for all the features on our site. We are missing a few of these on the back end but agreed to complete those early next week. I'd say we're about 70% done with our barebone front end so we should begin styling next week.

# **February 27th, 2023:**

Today we continued working on front end components. We decided to work in groups of two and work on different pages. We got to use URL parameters today in order to link our movies to a detail page and specific reviews.

# **February 28th, 2023:**

Today the team worked on conditionally rendering our nav bar when a user is logged in vs not logged in as well as redirecting them to the welcome page if they're not signed in. In the afternoon we began focusing our efforts on styling all the pages on the front end. We shared our initial designs with each other and spent time individually studying tailwind's capabilities.

# **March 1st, 2023:**

Our front-end is basically complete... we may add a few minor finishing touches however I'm pleased with the overall usage and look of the website. Tomorrow I believe we'll begin implementing Redux which I'm looking forward to.

# **March 2nd, 2023:**

The group asked an instructor to review our project and make suggestions on how we can improve it. They recommended we get our project deployed, add stories, add issues, and complete our unit test. Our group is now focused on working on these milestones to leave us in a good spot leading up to our last days before turning the project in. Today we continued to work on beautifying the website and began studying the deployment process.

# **March 3rd, 2023:**

Today I added a few conditional statements on the front end to enhance the user experience. This weekend I plan on studying more about unit testing, redux, and deployment.

# **March 6th, 2023:**

Today each member of the team completed their unit tests. Then we focused on resolving any "red" errors in the developer console. Tomorrow we're planning on working on the deployment process.

# **March 7th, 2023:**

Today I worked on clearing any flake8 errors that came up in the `movies_api` file. Then in the afternoon I completed the delete review feature on the front end. Our group also re-watched the deployment lecture in order to prepare more for the deployment process.

# **March 8th, 2023:**

Today I helped the group with working on the deployment process. We had to get our project deployed and then work on front end formatting. I learned a lot about the deployment process today; for example, I learned about how even the smallest error or detail to formatting can affect the site's ability to function properly. I also read up on how minutes work and why it's important for engineering teams to be able to test/run the pipeline process once an application is deployed.

# **March 9th, 2023:**

Today I assisted with finding bugs once the site was deployed as well as fixing some front end formatting. I also continued working on an update review feature on a separate branch.
