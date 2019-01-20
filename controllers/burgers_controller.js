const express = require ("express");
const router = express.Router()
const burger = require ("../models/burgers.js");


// define the home page route
router.get('/', function (req, res) {
  burger.selectAll(function(burger_data){
    // console.log(burger_data);
    res.render('index',{burger_data});

  });
  
});

router.post('/burgers/update', function (req, res) { 

   burger.create(req.body.name, function(){

    res.redirect('/index');

});
  // burger.updateOne(req.body.burger_id, function(res){

  });

// });  

router.post('/burgers/create/:id', function (req, res) {console.log(res);
  burger.create(req.body.burger_name, function(){
    res.redirect('/index');
  
    });  
  
});

module.exports = router;