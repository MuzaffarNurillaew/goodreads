# goodreads
This is book review web app.

In this book review app:
- you can create book review with details (title, author, genre)
- update the reviews to add insights or refine ratings
- delete reviews you no longer wish to share.

This is very secure app, and everything follows SRP (Single responsibilty principle) as everything is separated into individual folders.

/controllers folder contains logic for CRUD used by routes
/routes folder contains registrations of urls
/services folder contains project-wide services
/views folder contains pages
app.js is main file to register everything

### How to run
1. Locate project folder
2. Run `npm install`
3. Run `npm start`
4. Open http://localhost:3000 in your favourite browser