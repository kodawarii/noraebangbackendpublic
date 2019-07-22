/**
 * song.model.js 
 * For Public Node/Express Backend Web Application
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Songs = new Schema({
  artist: {
    type: String
  },
  song_name: {
    type: String
  },
  URL: {
    type: String
  },
  length: {
    type: Number
  },
  key: {
    type: String
  },
  max_key: {
    type: String
  },
  tj_number: {
    type: Number
  },
  ky_number: {
    type: Number
  },
  order: {
    type: Number
  }
},{
    collection: 'song'
});

console.log("WORKING INSIDE SONG MODEL");

module.exports = mongoose.model('Song', Songs);