const SOCKET = require('./src/config/socket')
const express = SOCKET.express;
const app = SOCKET.app;

const port = 3000;
const logger = require('morgan');
const path = require('path');
const cors = require("cors");
const api = require('./src/routes/api')

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


SOCKET.server.listen(port, () => {
  console.log("server start in port " + port);
});
SOCKET.io.on("connection", function (socket) {
  console.log("Co nguoi ket noi");
});

app.use('/', api);

// app.post("/send", (req, res) => {
//   io.sockets.emit("send", { name: "nads" });
//   res.send("Da gui toi Client!");
// });
