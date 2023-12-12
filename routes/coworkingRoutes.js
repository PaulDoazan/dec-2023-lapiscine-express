const express = require('express')
const router = express.Router()
const { findAllCoworkings, findCoworkingByPk, createCoworking, updateCoworking, deleteCoworking, createCoworkingWithImage, updateCoworkingWithImage } = require('../controllers/coworkingControllers')
const { protect, restrictToOwnUser } = require('../controllers/authControllers')
const multer = require('../middleware/multer-config');

router
    .route('/')
    .get(findAllCoworkings)
    .post(protect, createCoworking)

router
    .route('/withImg')
    .post(protect, multer, createCoworkingWithImage)

router
    .route('/withImg/:id')
    .put(protect, multer, updateCoworkingWithImage)

router
    .route('/:id')
    .get(findCoworkingByPk)
    .put(protect, restrictToOwnUser, updateCoworking)
    .delete(protect, restrictToOwnUser, deleteCoworking)

module.exports = router