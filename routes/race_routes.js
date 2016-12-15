var express = require('express');
var router = express.Router();
var race_dal = require('../model/race_dal');


// View All Events
router.get('/all', function(req, res) {
    race_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('race/raceViewAll', { 'result':result });
        }
    });

});

// View the event for the given id
router.get('/', function(req, res){
    if(req.query.Event_ID == null) {
        res.send('Event is null');
    }
    else {race_dal.getById(req.query.Event_ID, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('race/raceViewById', {'result': result});
            }
        });
    }
});

module.exports = router;
