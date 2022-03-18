const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(URL, (error, response, body) => {
    if (error !== null) {
      callback(error, null);
      return;
    }

    const breedReport = {
      name: '',
      lifespan: '',
      description: '',
    };

    // If an empty array was returned, inform user the breed they searched was not found
    if (!body.length) {
      breedReport.description = "Breed not found. Do you even know cats?";
    } else {
      // TheCatAPI returns an array of objects. For our current use, this array
      // will always contain one item, so we can JSON.parse and then select the first item
      const breed = JSON.parse(body)[0];

      // Isolate the data that needs to appear in the report
      breedReport.name = breed.name;
      breedReport.lifespan = breed.life_span;
      breedReport.description = breed.description;

      callback(null, breedReport);
    }
  });
};

module.exports = {fetchBreedDescription};