const fs = require('fs');

var countries = JSON.parse(fs.readFileSync('countries.json'));

module.exports = {
  getCountries: function() {
    return countries;
  },

};
