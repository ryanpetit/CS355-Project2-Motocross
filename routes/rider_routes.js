var express = require('express');
var router = express.Router();
var rider_dal = require('../model/rider_dal');


// View All Riders
router.get('/all', function(req, res) {
    rider_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('rider/riderViewAll', { 'result':result });
        }
    });

});

// View the rider for the given id
router.get('/', function(req, res){
    if(req.query.Rider_Number == null) {
        res.send('rider is null');
    }
    else {rider_dal.getById(req.query.Rider_Number, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('rider/riderViewById', {'result': result});
            }
        });
    }
});

// Add a new Rider
router.get('/add', function(req, res){
    // passing all the query parameters (req.query) to the insert function instead of each individually
    rider_dal.getAll(function(err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('rider/riderAdd', {'rider': result});
        }
    });
});

// Insert a Rider
router.get('/insert', function(req, res){
    // simple validation
    if(req.query.Rank == null) {
        res.send("Rider's Rank must be provided.");
    }
    else if(req.query.First_Name == null) {
        res.send('A first name must be provided');
    }
    else if(req.query.Last_Name == null) {
        res.send('A last name must be provided');
    }
    else if(req.query.Rider_Number == null) {
            res.send("A Rider's number must be provided");
    }
    else {
        // passing all the query parameters (req.query) to the insert function instead of each individually
        rider_dal.insert(req.query, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.redirect(302, '/rider/all');
            }
        });
    }
});

// Delete a resume for the given resume-id
router.get('/delete', function(req, res){
    if(req.query.Rider_Number == null) {
        res.send('Rider_Number is null');
    }
    else {
        rider_dal.delete(req.query.Rider_Number, function(err, result){
            if(err) {
                res.send(err);
            }
            else {
                //poor practice, but we will handle it differently once we start using Ajax
                res.redirect(302, '/rider/all');
            }
        });
    }
});


router.get('/edit', function(req, res){
    if(req.query.Rider_Number == null) {
        res.send('A Rider Number is required');
    }
    else {
        rider_dal.edit(req.query.Rider_Number, function(err, result){
            console.log(result);
            res.render('rider/riderUpdate', {rider: result[0]});
        });
    }

});


router.get('/update', function(req, res) {
    rider_dal.update(req.query, function(err, result){
        res.redirect(302, '/rider/all');
    });
});

module.exports = router;
