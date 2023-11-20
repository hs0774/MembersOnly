const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//form test
router.get('/sign-up', function(req, res, next) {
  res.render('sign-up');
});

//form test post
router.post('/sign-up', function(req, res, next) {
  
});

module.exports = router;
