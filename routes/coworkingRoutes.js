const express = require('express')
const router = express.Router()
const { findAllCoworkings, findCoworkingByPk, createCoworking, updateCoworking, deleteCoworking, findAllCoworkingsRawSQL, createCoworkingWithImg } = require('../controllers/coworkingControllers')
const { protect, restrictToOwnUser } = require('../controllers/authControllers')
const { Coworking } = require('../db/sequelizeSetup')
const multer = require('../middleware/multer-config');

router
    .route('/')
    .get(findAllCoworkings)
    .post(protect, createCoworking)

router
    .route('/withImg')
    .post(protect, multer, createCoworkingWithImg)

router
    .route('/rawsql')
    .get(findAllCoworkingsRawSQL)

router
    .route('/:id')
    .get(findCoworkingByPk)
    .put(protect, restrictToOwnUser(Coworking), updateCoworking)
    .delete(protect, restrictToOwnUser(Coworking), deleteCoworking)

module.exports = router