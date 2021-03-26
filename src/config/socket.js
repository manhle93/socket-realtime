const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const SOCKET = {
    express: express,
    app: app,
    server: server,
    io: io
}


module.exports = SOCKET