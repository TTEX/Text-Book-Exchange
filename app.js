var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

//TODO: To be deleted
//var routes = require('./routes/index');
//var users = require('./routes/users');

var bookController = require('./routes/books')

var app = express();
var router = express.Router();

//TODO: Connection to a mongodb database

mongoose.connect('mongodb://localhost/test')
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//TODO: Might not need this at all. To be removed
//app.use('/', router);
//app.use('/users', users);

//Endpoint definition for all the books call
router.route('/books')
  .get(bookController.getAllBooks)
  .post(bookController.postBooks)
  .delete(bookController.deleteBooks)
  .put(bookController.putBooks)

router.route('/books/:id')
  .post(bookController.findBook)
  
app.get('/', function(req, res){
  res.send("The server is up and running")
  console.log("This is working")
})
app.use('/', router)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
