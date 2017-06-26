var express = require('express');
var app = express();
var path = require("path");
http = require('http');
app.use(express.static(__dirname)); // set the static files location /public/img will be /img for users

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/article', function(req, res) {
    res.sendFile(__dirname + '/landing.html');
})
app.listen(process.env.PORT || 3000, function() {
    console.log('Mockup running on port 3000');
});

//static files 
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/public'));