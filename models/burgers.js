var orm = require("../config/orm.js");

// select all burgers from table
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res) {
    cb(res);

        })
    },

    updateOne: function(id, cb){
        orm.updateOne("burgers", id, cb)
    cb(res);
    },

    create: function(burger_name, cb){
        orm.create(burger_name, cb)
    cb(res);
    }
};


// // update burger info
// orm.updateOne("burger_name", "devoured", "burgers");
    // }
module.exports = burger;