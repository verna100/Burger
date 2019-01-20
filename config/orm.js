var connection = require("./connection.js");

var orm = {
  // selectAll()
  selectAll: function(tableInput, callback) {
     connection.query ('SELECT * FROM '+tableInput+';', function (err, res){
      if (err) throw err;
      callback(res);
     })
  },

// updateOne()
  updateOne: function(tableInput, val, callback) {
    connection.query ('UPDATE '+tableInput+' SET devoured=true WHERE id='+val+';', function (err, res){
     if (err) throw err;
     callback(res);
    })
 },

// insertOne()
 create: function(tableInput, val, callback) {
  connection.query ('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err, res) {
   if (err) throw err;
   callback(res);
  })
}

};

module.exports = orm;
