var express = require('express');
var path = require('path');

var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/i', function(req, res) {
    console.log("POST request received.");
    console.log("Timestamp: " + req.query.dtm);
    res.send({id:req.params.id, name:"response", description: "Server response from /events"});
});

app.post('/com.snowplowanalytics.snowplow/tp2', function(req, res) {
    console.log("POST request received.");
    console.log("Timestamp: " + req.body.data[0].dtm);
    res.send({id:req.params.id, name:"response", description: "Server response from /events"});
});