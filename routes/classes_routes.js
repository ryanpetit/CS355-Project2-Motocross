var express = require('express');
var router = express.Router();
var classes_dal = require('../model/classes_dal');


// View All Events
router.get('/all', function(req, res) {
    classes_dal.getAll(function(err, result){
            if (err) {
                res.send(err);
            }
            else {
                res.render('classes/classesViewAll', {'result': result});
            }
    });

});

module.exports = router;
