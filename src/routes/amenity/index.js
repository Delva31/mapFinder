const express = require('express');
const router = express.Router();
const {getAmenitiesAll, getAmenitiesFiltered} = require('../../controllers/amenity/index.ts');

router.get('/', getAmenitiesAll); // GET /amenities
router.get('/:data', getAmenitiesFiltered); // GET /amenities/:data

module.exports = router;
