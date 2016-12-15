var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'select * from Event Order By Event_ID;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(Event_ID, callback) {
    var query = 'SELECT * FROM Event WHERE Event_ID';
    var queryData = [Event_ID];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};
