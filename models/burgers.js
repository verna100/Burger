var orm = require("../config/orm.js");

// select all burgers from table
var burger = {
    all: function(cb){
        orm.all("burgers", function(res) {
    cb(res);

        });
    },

    update: function(objColVals, condition, cb){
        orm.update("burgers",objColVals, condition, function(res){
            cb(res);
        });
    
    },

    create: function(cols, vals,  cb){
        orm.create("burgers", cols, vals,  cb)
    cb(res);
    }
};


// // update burger info
// orm.updateOne("burger_name", "devoured", "burgers");
    // }
module.exports = burger;