"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_controller_1 = require("../controllers/users.controller");
exports.routes = function (server) {
    server.route({
        method: "POST",
        path: "/users",
        handler: users_controller_1.createUser
    });
    server.route({
        method: "GET",
        path: "/users",
        handler: users_controller_1.getUsers
    });
    server.route({
        method: "GET",
        path: "/users/{id}",
        handler: users_controller_1.getUser
    });
    server.route({
        method: "PUT",
        path: "/users/{id}",
        handler: users_controller_1.updateUser
    });
    server.route({
        method: "DELETE",
        path: "/users/{id}",
        handler: users_controller_1.deleteUser
    });
};
