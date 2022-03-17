const request = require('request');

const breedTerm = process.argv[2];
const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedTerm;

request(URL, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', JSON.parse(body));
});