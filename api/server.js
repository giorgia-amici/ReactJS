var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var bodyParser = require('body-parser')

app.set('views', __dirname + '/../public');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response){
  response.render('index')
});


server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;