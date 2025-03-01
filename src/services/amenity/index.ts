import { IAmenity } from "../../models/amenity";
const overpassApi = require('../../services/overPassApi');

const getAmenities = async (amenity: string, address: string, radius: string) => {
    try {
        console.log("calling overpass api...");
        let places = await overpassApi.getAmenityByAddress(amenity, address, radius);
        console.log("overpass api called!");

        
        let result : IAmenity [] =  places.map((place: any, index: number) => {
            if (place.tags.name)
            {            
                let value = {
                    id: index,
                    lat: place.lat || "",
                    lng: place.lon || "",
                    name: place.tags.name || "noname",
                    phone: place.tags.phone || "",
                    housenumber: place.tags["addr:housenumber"] || "",
                    email: place.tags.email || "",
                    street: place.tags["addr:street"] || "",
                    city: place.tags["addr:city"] || "",
                    country: place.tags["addr:country"] || "",
                    website: place.tags.website || "",
                    openingHours: place.tags.opening_hours || "",
                    facebook: place.tags["contact:facebook"] || "",
                    instagram: place.tags["contact:instagram"] || "",
                    twitter: place.tags["contact:twitter"] || "",
                    isFav: false
                } as IAmenity;
                return value;
            }

        });
        return result.filter(a=>a);
    } catch (error) {
        console.log(error);
    }
};

module.exports.getAmenities = getAmenities;
