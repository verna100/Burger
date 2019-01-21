const express = require ("express");
const router = express.Router()
const burger = require ("../models/burgers.js");


// define the home page route
router.get("/", function (req, res) {
  burger.all(function(burger_data){
    // console.log(burger_data);
    res.render("index",{burger_data});

  });
  
});


router.post("/api/burgers", function (req, res){ 
  burger.create([
    " ", " "
  ], [
    req.body.burger_name, req.body.devoured],
      function(result){
    res.json ({id: result.insertId});
  
    });  
  
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update({
      devoured: req.body.devoured
  }, condition, function(result) {
      if (result.changedRows == 0) {
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});

module.exports = router;