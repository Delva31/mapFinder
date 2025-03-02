const {getAmenities} = require('../../services/amenity');
const config = require('../../config/global');


const getAmenitiesFiltered = async (req: any, res: any) => {
    try {

        const {address, radius, amenity} = req.query;

        console.log(req.query)
 
        const addressQuery = address ? address : config.addressDefault ;
        const radiusQuery = radius ? radius : config.radiusDefault; 
        const amenityQuery = amenity ? amenity: config.amenityDefault;

        const result =  await getAmenities(amenityQuery, addressQuery, radiusQuery);
        res.json(result);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching amenities: '+ error });

    }
}


module.exports = {
    getAmenitiesFiltered
  };
