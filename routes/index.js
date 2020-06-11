var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { websiteName: 'Educational-Website' });
});

var friendsArray = [
        { name: 'Eram', age: '99', favColor: 'Black' },
        { name: 'Sadaf', age: '99', favColor: 'Black' },
        { name: 'Sahil', age: '199', favColor: 'Black' }
    ]
    /* GET Friends data */
router.get('/friends/:id', function(req, res, next) {
    res.render('friends', { friend: friendsArray[req.params.id] });
});
/* GET Friends data */
router.get('/friends', function(req, res, next) {
    res.render('friends', { friends: friendsArray });
});

module.exports = router;