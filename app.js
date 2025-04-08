// express web app instance
const express = require('express')

// parse request body to json
const bodyParser = require('body-parser')

// for File IO
const path = require('path')

// for web routing
const homeRoute = require('./routes/homeRoute')
const bookReviewRoute = require('./routes/bookReviewRoute')

global.reviewsDb = path.join(__dirname, './data/reviews_db.json');

const app = express();

// Set the view engine for web routes
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use('/', homeRoute);
app.use('/reviews', bookReviewRoute);
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
