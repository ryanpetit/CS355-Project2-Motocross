var express = require('express');
var router = express.Router();
var location_dal = require('../model/location_dal');


// View All Events
router.get('/all', function(req, res) {
    location_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('location/locationViewAll', { 'result':result });
        }
    });

});

// View the location for the given id
router.get('/', function(req, res){
    if(req.query.Event_ID == null) {
        res.send('Event is null');
    }
    else {location_dal.getById(req.query.Event_ID, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('location/locationViewById', {'result': result});
            }
        });
    }
});

module.exports = router;
