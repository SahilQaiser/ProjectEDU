var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/friends', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection to MongoDB failed:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

var schema = new mongoose.Schema({ name: 'string', age: 'number', favColor: 'string' });
var Friends = mongoose.model('Friends', schema);
Friends.create({ name: 'Sahil', age: 99, favColor: 'BLACK' }, function(err) {
    if (err) return handleError(err);
    console.log("Friends Collection Created");
});

var friends = {};
var index = 0;
//Ftech docs
Friends.find({}, (err, friends) => {
    if (err) return handleError(err);
    friends.forEach(friend => {
        friends[index++] = friend;
        console.log(friend);
    });
});

/* GET Profiles page. */
router.get('/', function(req, res, next) {
    res.render('profile', { friends:friends });
});

module.exports = router;