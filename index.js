const {fetchBreedDescription} = require('./breedFetcher');

const breedInput = process.argv[2];

fetchBreedDescription(breedInput, (error, breedReport) => {
  console.log(error ? ("Error: ", error) : ("Description: ", breedReport.description));
});