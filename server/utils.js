var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'retrogatchi'
});

exports.checkDatabaseLevels = function (callback) {
   var queryString = 'select * from stats';
   connection.query(queryString, function(err, results) {
    if (err) {
      console.log('error in checkDatabaseLevels function : ', err);
    } else {
      callback(results);
    }
   })
};

var updateDatabaseLevels = function() {

};


