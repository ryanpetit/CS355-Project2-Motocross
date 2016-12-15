var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MOTOCROSS' });
});

router.get('/about', function(req, res, next){
  res.render('about');
});

router.get('/diagram', function(req, res, next){
  res.render('diagram');
});

router.get('/schema', function(req, res, next){
  res.render('schema');
});



module.exports = router;
