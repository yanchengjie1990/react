var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile("./public/demo/home.html");
});

module.exports = router;
