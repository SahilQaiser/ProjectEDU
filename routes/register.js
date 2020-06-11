var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register');
});

http.createServer(function(req, res) {
    if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World!');
        res.end();
        console.log(req);
    }
}).listen(4001);

module.exports = router;