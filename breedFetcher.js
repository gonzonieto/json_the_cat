const request = require('request');

const breedTerm = process.argv[2];
const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedTerm;

request(URL, (error, response, body) => {
  if (error !== null) {
    if (error.code === "ENOTFOUND") {
      console.log("Website not found, please contact the developers at trash@garbage.bin");
    } else {
      console.log("Unknown error.");
    }
  } else {
    if (!body.length) {
      console.log("Breed not found.");
      console.log("Do you even know cats?");
    } else {
      // TheCatAPI returns an array of objects. For our current use, this array
      // will always contain one item, so we can JSON.parse and then select the first item
      const breed = JSON.parse(body)[0];
      console.clear();
      console.log("BREED REPORT");
      console.log("------------");
      console.log("Name: " + breed.name);
      console.log();
      console.log("Lifespan: " + breed.life_span + " years.");
      console.log();
      console.log("Description: " + breed.description);
      console.log();
    }
  }
  // console.log('statusCode:', response && response.statusCode);
});