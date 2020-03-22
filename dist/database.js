"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
mongoose_1.connect("mongodb://localhost/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function (db) { return console.log("Database is connected"); })
    .catch(function (err) { return console.log(err); });
