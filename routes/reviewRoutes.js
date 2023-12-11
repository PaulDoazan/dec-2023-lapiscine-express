const express = require('express')
const router = express.Router()
const { findAllReviews, findReviewByPk, createReview, updateReview, deleteReview } = require('../controllers/reviewControllers')
const { protect, restrict } = require('../controllers/authControllers')

router
    .route('/')
    .get(findAllReviews)
    .post(protect, createReview)

router
    .route('/:id')
    .get(findReviewByPk)
// .put(updateReview)
// .delete(protect, restrict, deleteReview)

module.exports = router