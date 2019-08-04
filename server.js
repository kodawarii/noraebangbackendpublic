/**
 * server.js 
 * For Public Node/Express Backend Web Application
 * This is [DEV]
 * 
 * For heroku logs:
 * heroku logs -t --app calm-anchorage-40334
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const PORT = 4000; // Dev
const PORT = process.env.PORT || 3000; // Prod
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const songRoute = require('./song.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected at: ' + config.DB) },
  err => { console.log('Can not connect to the database: '+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/song', songRoute);

app.listen(PORT, function(){
  console.log('PUBLIC Server is running on Port:', PORT);
});