var gplay = require('google-play-scraper');
var id = req.query.id;

gplay.app({appId: id})
  .then(console.log, console.log);
//res.send(gplay.app({appId: id})); 
