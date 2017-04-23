var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var methodOverride = require('method-override');
var session = require('express-session');
var flash = require('express-flash');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.load();

// Controllers
var routeController = require('./controllers/route');
var scenario1Send = require('./controllers/scenario1');
var scenario2Send = require('./controllers/scenario2');
var scenario3Send = require('./controllers/scenario3');
var sendFeedback = require('./controllers/feedback');

var app = express();


mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
mongoose.connection.once("open", function(callback) {
	console.log("Connected to mainDB");
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:5000000, type: 'application/json'}));

app.get('/home', routeController.home);
app.get('/about', routeController.about);
app.get('/data', routeController.data);
app.get('/new_user', routeController.new_user);
app.get('/scenario_1', routeController.scenario_1);
app.get('/scenario_1_active', routeController.scenario_1_active);
app.get('/scenario_1_feedback', routeController.scenario_1_feedback);
app.post('/feedback_post', sendFeedback.feedbackPost);
app.get('/scenario_2', routeController.scenario_2);
app.get('/scenario_2_active', routeController.scenario_2_active);
app.get('/scenario_2_feedback', routeController.scenario_2_feedback);
app.get('/scenario_3', routeController.scenario_3);
app.get('/scenario_3_active', routeController.scenario_3_active);
app.get('/scenario_3_feedback', routeController.scenario_3_feedback);
app.get('/', routeController.splash);
app.get('/terms', routeController.terms);
app.post('/scenario1send', scenario1Send.upload);
app.post('/scenario2send', scenario2Send.upload);
app.post('/scenario3send', scenario3Send.upload);


// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
