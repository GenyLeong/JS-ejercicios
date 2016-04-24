var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var path = require ('path');

app.use(express.static(__dirname+'/repetitivas/'));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname+'/repetitivas/index.html'));
});

//app.get('/:filename', function(req, res){
//	res.sendFile(path.join(__dirname+'/repetitivas/ejercicios.js'));
//});

app.listen(1340);
console.log('server is running');

