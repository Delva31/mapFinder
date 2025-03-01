const {getAmenities} = require('../../services/amenity');
const config = require('../../config/global');


const getAmenitiesFiltered = async (req: any, res: any) => {
    try {

        const {addressQuery, radiusQuery, amenityQuery} = req.query;
 
        const address = addressQuery ? addressQuery : config.addressDefault ;
        const radius = radiusQuery ? radiusQuery : config.radiusDefault; 
        const amenity = amenityQuery ? amenityQuery : config.amenityDefault;

        const result =  await getAmenities(amenity, address, radius);
        console.log(result)
        res.json(result);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching amenities: '+ error });

    }
}


module.exports = {
    getAmenitiesFiltered
  };
