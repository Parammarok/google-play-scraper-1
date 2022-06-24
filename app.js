const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var gplay = require('google-play-scraper');


app.get('/', function(req, res) {
    var id = req.query.id;
         if (id != '') {
        console.log('Getting Details: ' + id );
                
            console.log(gplay.app({appId: id});
            res.send(gplay.app({appId: id}); 
});


app.listen(port, function() {
    console.log('App listening on port ' + port)
})
