var express = require('express'),
    config  = require('./test.js'),
    app     = express();
    bodyParser = require('body-parser');

app = config(app);

app.post('/about', function( req, res ) {
            console.log(req.body.message);
            res.send( 'Hello World' );
    });
app.listen( 3000, function () {
            console.log('Server up: http://localhost:' + 3000);
        });
