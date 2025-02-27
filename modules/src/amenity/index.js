const overpassApi = require('../overPassApi/index.js')


const getItemsAmenity = async (amenity, address, radius) =>{
    try {
        console.log("calling overpass api...");
        let places = await overpassApi.getAmenityByAddress(amenity, address, radius);
        console.log("overpass api called!");

        let result = [];

        places.forEach((place, index) => {
            if (!place.tags.name)
                return;


            let value = {
                id : index,
                lat : place.lat || "",
                lng : place.lon || "",
                name: place.tags.name || "noname",
                phone : place.tags.phone || "",
                housenumber: place.tags["addr:housenumber"] || "",
                email : place.tags.email || "",
                street : place.tags["addr:street"] || "",
                city : place.tags["addr:city"] || "",
                country : place.tags["addr:country"] || "",
                website: place.tags.website || "",
                openingHours : place.tags.opening_hours || "",
                facebook : place.tags["contact:facebook"] || "",
                instagram : place.tags["contact:instagram"] || "",
                twitter : place.tags["contact:twitter"] || "",

            }


            result.push(value);
        });

        return result;
        
    } catch (error) {
        console.log(error);
    }

}

module.exports.getItemsAmenity = getItemsAmenity;
