const express = require ("express");
const router = express.Router()
const burger = require ("../models/burgers.js");


// define the home page route
router.GET('/', function (req, res) {
  burger.all(function(burger_data){
    // console.log(burger_data);
    res.render('index',{burger_data});

  })
  
})

router.PUT('/burgers/update', function (req, res) {
  burger.update(req.body.burger_id, function(res){
    console.log(res);
    res.redirect('/');

  });

});  

router.POST('/burgers/create', function (req, res) {
  burger.create(req.body.burger_name, function(res){
    console.log(res);
    res.redirect('/');
  
    });  
  
});

module.exports = router;