var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

/*
create or replace view class_view as
select rc.Class_Name, r.*
from Rider r
join Race_Class rc on rc.Rider_Number = r.Rider_Number;*/

exports.getAll = function(callback) {
    var query = 'SELECT * FROM class_view;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};






