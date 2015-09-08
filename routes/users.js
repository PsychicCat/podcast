var express = require('express');
var router = express.Router();
var parseString = require ('xml2js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var xml = data;
    parseString(xml, function (err, result) {
        console.log(result);
});

module.exports = router;
