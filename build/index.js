"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
require("./config/mongoose");
var server = new server_1.Server();
server.start();
