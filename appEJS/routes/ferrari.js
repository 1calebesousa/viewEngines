var express = require('express');
var router = express.Router();


router.get('/ferrari', function(req, res, next) {
  res.render('ferrari', { title: 'Express' });
});

module.exports = router;