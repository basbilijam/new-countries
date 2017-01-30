
// COUNTRIES INFORMATION APP PART 1
// read a txt file

var fs = require("fs");

fs.readFile('countries.json', function(err, data) {
    if (err) return console.error(err);

    var countriesInfo = JSON.parse(data);
    console.log(countriesInfo[0].latlng[1]);

    console.log(data);
    console.log(countryInfo);
    console.log(typeof(data));

    console.log(process.argv[2]);
    for (var i = 0; i < countriesInfo.length; i++) {
     if (countriesInfo[i].name === process.argv[2]) {
         // console.log(dataCountries[i]);
         console.log( "The country is " + countriesInfo[i].name);
         console.log( "The capital is " + countriesInfo[i].capital);
         console.log( "The population is " + countriesInfo[i].population);
         console.log( "The Language is " + countriesInfo[i].demonym);
         console.log( "The timezone is " + countriesInfo[i].timezones);
         console.log( "The native name is " + countriesInfo[i].nativeName);
        }
    }
});

countriesInfo.forEach(function(i) {
  if (countriesInfo[i].name === process.argv[2]) {
    console.log(i);
  }
});


// PART 2

var JSONFileReader = require('./json-file-reader'),
    ourArgument = process.argv[2];


JSONFileReader.readFile('countries.json', function(error, data) {
  var country;

  if (error) {
    throw error;
  }

  data.forEach(function(element) {
    if (element.name === ourArgument) {
      country = element;
    }  
  });
    console.log(country);
    if (!country) {
        console.log("That country is not on the list!") 
    }
});
