# bee.have Client Front-end

### Back-end Repository:
- https://github.com/hilarybrown/behavior-app-api

### Back-end Deployed Heroku site:
- https://glacial-scrubland-58961.herokuapp.com

### Front-end Respository:
- https://github.com/hilarybrown/behavior-app-client

### Front-end Deployed Client Application:
- https://hilarybrown.github.io/behavior-app-client/

## What is bee.have, and how does it work?
bee.have is a behavior tracking app that parents can use to track their children's behavior from day-to-day. It can be used as a sort of responsibility chart by the parents to see how their children improve each day. Enter in the children's information, submit a photo of them by way of a url, and fill out a form of generic responsibilities and goals such as cleaning up their dishes after meals, making their bed, or working on not fighting with any siblings. Users can update the chart as the day goes on to track their child(ren)'s progress.

## Technologies Used
- Javascript for app logic
- SCSS for page styling
- jQuery for DOM manipulation and event handling
- HTML for page content
- AJAX requests for interacting with an API which allows the game to perform such functions as `CREATE` user accounts and new movies, `PATCH` or update their password and make changes to their movies, and much more.

## Unsolved Problems
The main issue I was unable to resolve and would like to in future iterations is making each content box in my index have a set height with a scrollable div for the comments section. Depending on how many lines the comments have, it affects the height of the box as of right now. Additionally, I'd like to update my index to list the forms in sequential order by date, with the newest at the top instead of the most recent updated pushed to the bottom as it is now.

## Planning Process and Problem Solving Strategy
Before writing any code, I mapped out my ERD, wireframes and use stories to make sure I knew exactly what I wanted the app to do and how I would go about setting it up. From there, I set up my back-end API and once I had tested it through, I pushed up that code and started working on my front-end client. I tried to stick to the suggested schedule as best as I could to ensure that I was hitting every requirement I needed to, and keep track of my progress.

For problem solving, once I had exhausted my own mental library of options, I would consult the project issues queue to see if anyone else had hit a similar issue as me before and what they had done to resolve. Then I would search through Google to find possible solutions to my problem, and if neither of those routes produced any results, I would open an issue in the queue as well as consult my classmates to help resolve the issue together.

## Wireframes
![Sign-Up/Sign-In screen](https://i.imgur.com/pOEVSUrm.jpg)
![Main Display/Index screen](https://i.imgur.com/flLRoZFm.jpg)
![Show one item screen](https://i.imgur.com/xByGjuNm.jpg)

## Screenshot of bee.have
![bee.have](https://i.imgur.com/fYm202em.png)

## User Stories
- As a user, I want to be able to sign in to the application
- As a user, I want a list of my submitted forms that I can retrieve while signed in
- As a user, I want to be able to select a single form to view
- As a user, I want to be able to add and update my forms
- As a user, I want to be able to remove any form submission I may add in error
- As a user, I want to be able to sign out of a session once I'm finished
