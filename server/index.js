var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var mysql = require('mysql');
var utils = require('./utils')

// utils.checkDatabaseLevels(function(stats) {
//     console.log('from utils', stats[0].food);
// });
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'retrogatchi'
});


app.use(express.static(__dirname + '/../react-client/dist'));



//On an interval, update the amount of food the pet has.  
app.get('/interval/feed', function (req, res) {
  var queryString = 'select stats.food from stats';
  var updateString = 'update stats set food = ?'
  var presentFoodAmountInDatabase = 0;

  connection.query(queryString, function (err, results) {
    if (err) {
      console.log('Error\'ed! in app.get /feed inside index.js', err);
    } else {

      presentFoodAmountInDatabase = results[0].food;
    if (presentFoodAmountInDatabase > 100) {
      connection.query(updateString,[100]);
    }
    if (presentFoodAmountInDatabase > 0) {
      var newFoodAmountUpdate = presentFoodAmountInDatabase - 5;
      connection.query(updateString,[newFoodAmountUpdate]); 
    }


    }
  res.send(JSON.stringify(presentFoodAmountInDatabase));
  })

});



//feed the pet 20 food
app.get('/feed', function (req, res) {

  var updateString = 'UPDATE stats SET food = food + 20';
  var updateTo100 = 'UPDATE stats SET food = 100';
  utils.checkDatabaseLevels( function(stats) {
    if (stats[0].food  < 100) {
      connection.query(updateString);
      utils.checkDatabaseLevels(function(stats) {
        if (stats[0].food > 100) {
          connection.query(updateTo100);
        }
      })

    } else if ( stats[0].food > 100 ) {
          connection.query(updateTo100);
    }
    res.end();
  })
  //if the food is = 100, do not update.
  //if food is less than 100, update
    //check levels again.  
      //if food is greater than 100
        //update and set equal to 100.

});

//on an interval, update the amount of entertainment the pet has
app.get('/interval/play', function (req, res) {
  var queryString = 'select stats.entertainment from stats';
  var updateString = 'update stats set entertainment = ?'
  var presentEntertainmentInDatabase = 0;

  connection.query(queryString, function (err, results) {
    if (err) {
      console.log('Error\'ed! in app.get entertainment interval /play inside index.js', err);
    } else {

      presentEntertainmentInDatabase = results[0].entertainment;

      newEntertainmentUpdate = presentEntertainmentInDatabase - 5;

      connection.query(updateString,[newEntertainmentUpdate]);
    }
  res.end(JSON.stringify(presentEntertainmentInDatabase));
  })

});


//play with the pet and give it 20 entertainment points
app.get('/play', function (req, res) {

  var updateString = 'UPDATE stats SET entertainment = entertainment + 20';
  connection.query(updateString, function (err, results) {
    if (err) {
      console.log('error on get add entertainment /play : ', err);
    } else {
    res.end();
    }
  })
});




app.post('/feed', function (req, res) {
  console.log('Post request on /feed');
  res.end();

});

app.listen(3000, function() {
  console.log('listening on port 3000...');
});




