const express = require('express');
const router = express.Router();
const {getAmenitiesFiltered} = require('../../controllers/amenity/index.ts');

router.get('/:data', getAmenitiesFiltered); // GET /amenities/:data

module.exports = router;
