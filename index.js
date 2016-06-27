var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static(__dirname + '/public_html'));


app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});


app.get('/ma-practice-test', function(req, res){
  res.sendfile(__dirname + '/ma-practice-test.html');
});



server.listen(process.env.PORT || 5000, function(){
  console.log('listening on port:5000');
});