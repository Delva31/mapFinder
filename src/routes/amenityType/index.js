const express = require('express');
const router = express.Router();
const { getAmenitiesTypes} = require('../../controllers/amenityType/index.ts')



router.get('/', getAmenitiesTypes); // GET /amenitiestypes

module.exports = router;