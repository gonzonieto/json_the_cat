// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, breedReport) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, breedReport.description.trim());

      done();
    });
  });

  it('returns a null description and an error via callback for an invalid breed', (done) => {
    fetchBreedDescription('Siberioaupioawer61783', (err, breedReport) => {
      // description should be null
      assert.equal(breedReport, null);

      // compare returned error
      assert.equal(err, "Breed not found. Do you even know cats?");

      done();
    });
  });
});