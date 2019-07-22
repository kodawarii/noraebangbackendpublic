/**
 * song.route.js 
 * For Public Node/Express Backend Web Application
 * This Route file consists of only the GET method as it is publicly published
 */


const express = require('express');
const songRoutes = express.Router();

// Require song model in our routes module
let Song = require('./song.model');

// GET(index/whole list) route
songRoutes.route('/').get(function (req, res) {
    Song.find(function(err, songs){
    if(err){
      console.log(err);
    }
    else {
      res.json(songs);
    }
  });
});

console.log("WORKING INSIDE song ROUTE");

module.exports = songRoutes;