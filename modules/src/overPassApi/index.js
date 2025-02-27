const axios = require("axios");



const opUri = `https://overpass-api.de/api/interpreter`;
const opUrlAddress = `https://nominatim.openstreetmap.org/search?format=json&q=`;


async function getOPApiItem(lat, lng, radius, amenity) {
    try {
      const url = `${opUri}?data=[out:json];node(around:${radius},${lat},${lng})[amenity=${amenity}];out;`

      console.log(`urloverpass: `+url);
      const response = await axios.get(url);
      const places = response.data.elements;
      
      console.log("places found?: ", places != undefined);

      return places;
      
    } catch (error) {
      console.error("Error al obtener datos:", error.message);
    }
}


const getAmenityByAddress = async (amenity, address, radius) => {
  if (!address) return;

  const url = `${opUrlAddress}${encodeURIComponent(address)}`;

  try {
    const response = await axios.get(url);
    if (response.data.length > 0) {
      const { lat, lon, display_name } = response.data[0];
      var result = getOPApiItem(lat, lon, radius, amenity);

      return result;
    } else {
      console.error("address not found");
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};

  module.exports.getAmenityByAddress = getAmenityByAddress;
