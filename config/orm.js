var connection = require("./connection.js");



// insertOne()
// updateOne()

var orm = {
  // selectAll()
  all: function(tableInput, cb) {
     connection.query ('SELECT * FROM '+tableInput+';', function (err, res){
      if (err) throw err;
      cb(res);
     })
  },

  update: function(tableInput, val, cb) {
    connection.query ('UPDATE '+tableInput+' SET devoured=true WHERE id='+val+';', function (err, res){
     if (err) throw err;
     cb(res);
    })
 },

 create: function(tableInput, val, cb) {
  connection.query ('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err, res) {
   if (err) throw err;
   cb(res);
  })
}

//   create: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;
//     querystring += " (";
//     queryString += cols.toString();
//     queryString += ") " ;
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ")";

//     console.log(queryString);
    
//     connection.query(queryString, vals, function(err, result){
//       if (err){
//         throw err;
//       }
//       cb(result);
//     })
// }

// },
 
// //   },
// //   insertOne: function(colToSearch, valOfCol, tableInput) {
// //     var queryString = "INSERT ?? TO ?? IN ??";

// //     console.log(queryString);

// //     connection.query(queryString, [colToSearch, valOfCol,tableInput], function(err, result) {
// //       if (err) throw err;
// //       console.log(result);
// //     });
// //   },
// // //   not sure if syntax for this is correct
// //   updateOne: function(whatToSelect,tableInput, valOfCol) {
// //     var queryString = "UPDATE ?? SET ?? WHERE ??";
// //     console.log(queryString);

// //     connection.query(queryString, [whatToSelect, tableInput, valOfCol], function(
// //       err,
// //       result
// //     ) {
// //       if (err) throw err;
// //       console.log(result);
//     // });

// function printQuestionMarks(num) {
//   var arr =[];
//   for (let i = 0; i < num.length; i++) {
//     arr.push(" ?");
    
//   }
//   return arr.toString();
};

module.exports = orm;
