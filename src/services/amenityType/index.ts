import { IAmenityType } from "../../models/amenityType"; 


const getAmenitiesTypes = async () => {
    try {
        console.log("calling Amenity api...");
        let result : IAmenityType [] = [
            {id : 1, name: "restaurant", displayName:'Restaurant'},
            {id : 2, name: "cinema", displayName:'Cinema'},
            {id : 3, name: "cafe", displayName:'Cafe'},
            {id : 4, name: "fast_food", displayName:'Fast food'},
            {id : 5, name: "ice_cream", displayName:'Ice cream'},
            {id : 6, name: "bar", displayName:'Bar'},
            {id : 7, name: "nightclub", displayName:'Night club'},
            {id : 8, name: "college", displayName:'College'},
            {id : 9, name: "university", displayName:'University'},
            {id : 10, name: "library", displayName:'Library'},
            {id : 11, name: "veterinary", displayName:'Veterinary'},
            {id : 12, name: "hospital", displayName:'Hospital'},
            {id : 13, name: "clinic", displayName:'Clinic'},
            {id : 14, name: "pharmacy", displayName:'Pharmacy'},	
            {id : 15, name: "police", displayName:'Police'},	
            {id : 16, name: "bank", displayName:'Bank'},	
        ];

        console.log("Amenity api called!");
        return result;


    } catch (error) {
        console.log(error);
    }

}
module.exports.getAmenitiesTypes = getAmenitiesTypes;

