var express = require('express'),
      pug = require('pug'),
      app = express(),
      countryStore = require('./country-reader');

app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index', { countries: countryStore.getCountries() });
});

app.listen(3001, () => {
  console.log('Web Server is running on port 3001');
});
