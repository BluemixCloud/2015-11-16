/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */

var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var multer = require('multer');
var request = require('request');
var methodOverride = require('method-override');
var morgan = require('morgan');
var unirest = require('unirest');

var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

var appEnv = cfenv.getAppEnv();
var server = app.listen(appEnv.port, function() {
  console.log('***********************************');
  console.log('listening:', appEnv.url);
  console.log('***********************************');
});

module.exports = server;

/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */

app.get('/', function(req, res){
  res.render('home');
});

app.get('/pens', function(req, res){
  res.render('pens');
});

app.get('/images', function(req, res){
  res.render('images');
});

app.get('/translations', function(req, res){
  res.render('translations');
});

app.get('/tweets', function(req, res){
  res.render('tweets');
});

app.get('/other', function(req, res){
  res.send();
});

app.get('/chyld', function(req, res){
  res.render('chyld');
});

app.get('/math', function(req, res){
  res.render('math');
});

app.get('/json', function(req, res){
  res.send({status: 'CA'});
});

app.get('/hello', function(req, res){
  res.send({status: 'world'});
});

/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */

app.all('/proxy', function(req, res){
    var o = {
      uri: req.query.url,
      method: req.method,
      json: true,
    };

    if(Object.keys(req.body).length){
      o.body = req.body;
    }

    console.log('request to NodeRED:', o);
    request(o, function(e, r, b){
      res.send({error: e, status: r.statusCode, request: o, response: b});
    });
});

/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
