const express = require('express');|
const app = express();
var gplay = require('google-play-scraper');


app.get('/', function(req, res) {
var id = req.query.id;
app.listen(443, () => {
gplay.app({appId: id})
  .then(console.log, console.log);
res.send(id); 
});
