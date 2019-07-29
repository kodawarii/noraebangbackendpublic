/**
 * song.route.js 
 * For Public Node/Express Backend Web Application
 * This Route file consists of only the GET method as it is publicly published
 */


const express = require('express');
const songRoutes = express.Router();

// Require song model in our routes module
let Song = require('./song.model');

// GET :: SELECT * from Song
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

// GET :: SELECT * from Song ORDER BY Artist ASC
songRoutes.route('/artist_sort_asc').get(function(req, res){
  Song.find({}).sort({artist: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        // console.log("Sorting by Artist Reverse");
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * from Song ORDER BY Artist DESC
songRoutes.route('/artist_sort_desc').get(function(req, res){
  Song.find({}).sort({artist: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        // console.log("Sorting by Artist Reverse");
        res.json(songs);
      }
    }
  ); 
});

//console.log("Server Routes Working");

module.exports = songRoutes;