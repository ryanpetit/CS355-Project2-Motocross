var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Rider;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(Rider_Number, callback) {
    var query = 'SELECT * FROM Rider WHERE Rider_Number = ?';
    var queryData = [Rider_Number];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO Rider (Rank, First_Name, Last_Name, Rider_Number) VALUES (?, ?, ?, ?)';

    // the question marks in the sql query above will be replaced by the values of the
    // the data in queryData
    var queryData = [params.Rank, params.First_Name, params.Last_Name, params.Rider_Number];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.delete = function(Rider_Number, callback) {
    var query = 'DELETE FROM Rider WHERE Rider_Number = ?';
    var queryData = [Rider_Number];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.update = function(params, callback) {
    var query = 'UPDATE Rider SET Rank = ?, First_Name = ?, Last_Name = ? WHERE Rider_Number = ?';
    var queryData = [params.Rank, params.First_Name, params.Last_Name, params.Rider_Number];

    connection.query(query, queryData, function (err, result) {
            callback(err, result);
        });
};

exports.edit = function(Rider_Number, callback) {
    var query = 'select * from Rider where Rider_Number = ?';
    var queryData = [Rider_Number];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};