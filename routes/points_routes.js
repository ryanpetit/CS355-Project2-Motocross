var express = require('express');
var router = express.Router();
var points_dal = require('../model/points_dal');


// View the points for the given id
router.get('/all', function(req, res) {
    points_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('points/pointsViewAll', { 'result':result });
        }
    });

});



module.exports = router;
