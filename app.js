var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var hbs = require('express-handlebars');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var coursesRouter = require('./routes/courses');
var contactRouter = require('./routes/contact');
var courseDetailsRouter = require('./routes/coursedetails');
var registerRouter = require('./routes/register');
var profileRouter = require('./routes/profile');
var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('partials', path.join(__dirname, 'partials'))
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'layout',
    layoutsDir: __dirname + '/views/',
    partialsDir: __dirname + '/views/partials'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/courses', coursesRouter);
app.use('/contact', contactRouter);
app.use('/course-details', courseDetailsRouter);
app.use('/register', registerRouter);
app.use('/profile', profileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
app.listen(4000, () => {
        console.log('Server Started at port 4000');
    })
    // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;