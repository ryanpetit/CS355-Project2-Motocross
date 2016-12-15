var express = require('express');
var router = express.Router();
var event_dal = require('../model/event_dal');


// View All Events
router.get('/all', function(req, res) {
    event_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('event/eventViewAll', { 'result':result });
        }
    });

});

// View the event for the given id
router.get('/', function(req, res){
    if(req.query.Event_ID == null) {
        res.send('Event is null');
    }
    else {event_dal.getById(req.query.Event_ID, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('event/eventViewById', {'result': result});
            }
        });
    }
});

module.exports = router;
