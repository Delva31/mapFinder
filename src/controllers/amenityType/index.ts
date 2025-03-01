
const amenityTypeService = require('../../services/amenityType');

const getAmenitiesTypes = async (req: any, res: any) => {
    try {
        const result =  await amenityTypeService.getAmenitiesTypes();
        res.json(result);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching amenities types: '+ error });

    }
}


module.exports = {
    getAmenitiesTypes
  };

