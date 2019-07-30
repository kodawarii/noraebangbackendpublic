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
/** @todo sort by some particular order when component did mount? */
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

/** @todo Have secondary sorting. for example, Sort by Key then by Artist */

// GET :: SELECT * from Song ORDER BY artist ASC
songRoutes.route('/artist_sort_asc').get(function(req, res){
  Song.find({}).sort({artist: 1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * from Song ORDER BY artist DESC
songRoutes.route('/artist_sort_desc').get(function(req, res){
  Song.find({}).sort({artist: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY title ASC 
songRoutes.route('/song_name_sort_asc').get(function(req, res){
  Song.find({}).sort({song_name: 1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY title DESC
songRoutes.route('/song_name_sort_desc').get(function(req, res){
  Song.find({}).sort({song_name: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY length ASC 
songRoutes.route('/length_sort_asc').get(function(req, res){
  Song.find({}).sort({length: 1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY length DESC
songRoutes.route('/length_sort_desc').get(function(req, res){
  Song.find({}).sort({length: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY key ASC 
songRoutes.route('/key_sort_asc').get(function(req, res){
  Song.find({}).sort({key: 1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY key DESC
songRoutes.route('/key_sort_desc').get(function(req, res){
  Song.find({}).sort({key: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY max_key ASC 
songRoutes.route('/max_key_sort_asc').get(function(req, res){
  Song.find({}).sort({max_key: 1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY max_key DESC
songRoutes.route('/max_key_sort_desc').get(function(req, res){
  Song.find({}).sort({max_key: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY tj_number ASC 
songRoutes.route('/tj_number_sort_asc').get(function(req, res){
  Song.find({}).sort({tj_number: 1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY tj_number DESC 
songRoutes.route('/tj_number_sort_desc').get(function(req, res){
  Song.find({}).sort({tj_number: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY ky_number ASC
songRoutes.route('/ky_number_sort_asc').get(function(req, res){
  Song.find({}).sort({ky_number: 1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY ky_number DESC
songRoutes.route('/ky_number_sort_desc').get(function(req, res){
  Song.find({}).sort({ky_number: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY order ASC
songRoutes.route('/order_sort_asc').get(function(req, res){
  Song.find({}).sort({order: 1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

// GET :: SELECT * FROM Song ORDER BY order DESC
songRoutes.route('/order_sort_desc').get(function(req, res){
  Song.find({}).sort({order: -1}).exec(
    function(err, songs){
      if(err){
        console.log(err);
      }
      else{
        res.json(songs);
      }
    }
  ); 
});

//console.log("Server Routes Working");

module.exports = songRoutes;