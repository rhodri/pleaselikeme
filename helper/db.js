var MongoClient = require('mongodb').MongoClient;
var mongoUrl = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/pleaselikeme';

var db;

module.exports = {

  connect: function (cb) {

    MongoClient.connect(mongoUrl, function (err, dbConnection) {
      if (err) {
        console.log("Could not connect to DB: " + mongoUrl);
        process.exit(1);
      } else {
        console.log("Connected to DB: " + mongoUrl)
        db = dbConnection;
        if (cb) cb();
      }
    });
  },
  
  record: function(email, choices) {
    return db.collection('choices').insertOne({
      email: email, choices: choices
    });
  }
};