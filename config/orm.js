var connection = require("./connection.js");

var orm = {
  // selectAll()
  all: function(tableInput, cb) {
     connection.query ('SELECT * FROM '+tableInput+';', function (err, res){
      if (err) throw err;
      cb(res);
     })
  },

// updateOne()
  update: function(tableInput, val, cb) {
    connection.query ('UPDATE '+tableInput+' SET devoured=true WHERE id='+val+';', function (err, res){
     if (err) throw err;
     cb(res);
    })
 },

// insertOne()
 create: function(tableInput, val, cb) {
  connection.query ('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err, res) {
   if (err) throw err;
   cb(res);
  })
}

};

module.exports = orm;
