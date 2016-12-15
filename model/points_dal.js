var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);


exports.getAll = function(callback) {
    var query = 'select First_Name as First, Last_Name as Last, Rider_Season_Points_Funtion(Rider_Number) as Season_Points from Rider order by Season_Points DESC;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

