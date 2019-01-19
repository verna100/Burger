var orm = require("../config/orm.js");

// select all burgers from table
var burger = {
    all: function(cb){
        orm.all("burgers", function(res) {
    cb(res);

        })
    },

    update: function(id, cb){
        orm.update("burgers", id, cb)
    cb(res);
    },

    create: function(name, cb){
        orm.create("burgers", name, cb)
    cb(res);
    }
};


// // update burger info
// orm.updateOne("burger_name", "devoured", "burgers");
    // }
module.exports = burger;