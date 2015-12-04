var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {console.log("Hello World");});

module.exports = router;