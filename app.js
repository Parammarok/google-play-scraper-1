const express = require('express');|
const app = express();
var gplay = require('google-play-scraper');


app.get('/', function(req, res) {
var id = req.query.id;

gplay.app({appId: id})
  .then(console.log, console.log);
//res.send(gplay.app({appId: id})); 
};
