const fs = require('fs');
const path = require('path');
const crudService = require("../services/crudService");
const reviewsDb = crudService('reviews.json');

const bookReviewController = {
    index: async (req, res) =>{
        const reviews = await reviewsDb.getAll();
        console.log(reviews);
        res.render('bookReview/index', {reviews: reviews});
    },
    addForm: async (req, res) =>{
        res.render('bookReview/add');
    },
    add: async (req, res) => {
        const newReview = req.body;
        newReview.id = Date.now(); // Simple ID generation
        await reviewsDb.create(newReview);
        res.redirect('/reviews');
    },
    editForm: async (req, res) =>{
        const reviewId = req.params.id;
        const review = await reviewsDb.getById(reviewId);
        if (!review) {
            return res.status(404).send('Review not found');
        }

        res.render('bookReview/edit', { review: review });
    },
    update: async (req, res) => {
        console.log(req.body);
        await reviewsDb.update(req.body.id, req.body)
        res.redirect('/reviews');
    },
    deleteForm: async (req, res) =>{
        const reviewId = req.params.id;
        console.log(reviewId);
        const review = await reviewsDb.getById(reviewId);
        if (!review) {
            return res.status(404).send('Review not found');
        }
        console.log(review);
        res.render('bookReview/delete', { review: review });
    },
    delete: async (req, res) => {
        const reviewId = req.params.id;
        await reviewsDb.remove(reviewId);
        res.redirect('/reviews');
    }
};
  
module.exports = bookReviewController;