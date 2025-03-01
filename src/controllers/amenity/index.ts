const amenity = require('../../services/amenity/index.ts');
const config = require('../../config/global');


const getAmenitiesAll  = async (req: any, res: any) => {

    try {
        const address = config.addressDefault;
        const radius = config.radiusDefault;
        const amenity = config.amenityDefault;
        
        const result =  await amenity.getAmenities(amenity, address, radius);
        res.json(result);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching amenities: '+ error });

    }
}


const getAmenitiesFiltered = async (req: any, res: any) => {
    try {
        const {address, radius, amenity} = req.query;
        const result =  await amenity.getAmenities(amenity, address, radius);
        res.json(result);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching amenities: '+ error });

    }
}


module.exports = {
    getAmenitiesAll,
    getAmenitiesFiltered
  };
