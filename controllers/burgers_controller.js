var express = require ("express");
var router = express.Router()
var burger = require ("../models/burgers.js");

router.get('/', function(req,res){
  burger.all(function(burger_data){
    // console.log(burger_data);
    res.render('index', {burger_data});
   })
})
// router.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });


router.put('/burgers/update', function (req, res){ 
  burger.update(req.body.burger_id, function (result){
    // console.log(result);
    res.redirect('/');
  }); 
  
});

// router.put("/burgers/update/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


router.post('/burgers/create', function (req, res){ 
  console.log(req.body);
  // burger.create(req.body.burger_name, function (result){
  //   console.log(result);
    res.redirect('/');
  // }); 
  
});


// router.post("/burgers/create", function(req, res) {
//   burger.create([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });




module.exports = router;