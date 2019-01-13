var orm = require("./config/orm.js");

// select all burgers from table
orm.selectAll("burger_name", "burgers");

// insert a new burger based on users input
orm.insertOne("burger_name", "devoured", "bugers");

// update burger info
orm.updateOne("burger_name", "devoured", "burgers");

module.exports =orm;