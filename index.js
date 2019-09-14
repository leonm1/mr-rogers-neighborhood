const fs = require("fs");
const Fuse = require("fuse.js");
const { removeDiacritics } = require("./diacritics");
const haversine = require("haversine-distance");

const getDataWithNormalCities = () => {
  return JSON.parse(fs.readFileSync("yelp_businesses.json")).map(el => ({
    ...el,
    city: removeDiacritics(el.city),
    distanceFromMtl: haversine(
      { lat: 45.5, lon: -73.57 },
      { lat: el.latitude, lon: el.longitude }
    ),
  }));
};

const getNormCities = () => {
  return JSON.parse(fs.readFileSync("yelp_cities.json", "utf8"));
};

module.exports = { getDataWithNormalCities, getNormCities };
