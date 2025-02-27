

const getAmenityAll = async () =>{
    try {
        console.log("calling Amenity api...");
        let result = [
            {
                id : 1,
                name: "restaurant"
            },
            {
                id : 2,
                name: "veterinary"
            }
        ];

        console.log("Amenity api called!");
        return result;


    } catch (error) {
        console.log(error);
    }

}

module.exports.getAmenityAll = getAmenityAll;
