var connection = require("./connection.js");


// selectAll()
// insertOne()
// updateOne()

var orm = {
  selectAll: function(whatToSelect, tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(colToSearch, valOfCol, tableInput) {
    var queryString = "INSERT ?? TO ?? IN ??";

    console.log(queryString);

    connection.query(queryString, [colToSearch, valOfCol,tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
//   not sure if syntax for this is correct
  updateOne: function(whatToSelect,tableInput, valOfCol) {
    var queryString = "UPDATE ?? SET ?? WHERE ??";
    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableInput, valOfCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
