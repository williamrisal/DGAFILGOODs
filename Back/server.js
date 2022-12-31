// uploadfile https://www.itsolutionstuff.com/post/node-js-express-image-upload-rest-api-exampleexample.html
// Imports
var express     = require('express');
var bodyParser  = require('body-parser');

// Instantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon super server</h1>');
});
// Launch server
server.listen(8080, function() {
    console.log('Server en écoute :)');
});