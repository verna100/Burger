var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}


var orm = {
  // selectAll()
  all: function(tableInput, cb) {
     var queryString = 'SELECT * FROM '+tableInput+';'; connection.query(queryString, function (err, res){
      if (err) {
        throw err;
      }
      cb(res);
     })
  },

// updateOne()
  update: function(tableInput, condition, cb) {
     connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err, result){
      if (err)throw err;
        cb(result);
     })
    
     },
 
// insertOne()
 create: function(tableInput, val, cb) {
  connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');",
  function(err, res) {
   if (err) throw err;
   cb(res);
   })
  }
};

module.exports = orm;
