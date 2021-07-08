const SOCKET = require("./src/config/socket");
const express = SOCKET.express;
const app = SOCKET.app;

const port = 3000;
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const api = require("./src/routes/api");
const fetch = require('node-fetch')
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

SOCKET.server.listen(port, () => {
  console.log("server start in port " + port);
});
SOCKET.io.on("connection", function (socket) {
  console.log("Co nguoi ket noi");
  var realTimeCar;
  socket.on("userconnect", function (data) {


    realTimeCar = setInterval(() => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("http://127.0.0.1:8001/api/dinhvixe", requestOptions)
      .then(response => response.json())
        .then(data => {
          socket.emit("cars", data);
        })
        .catch((error) => console.log("error", error));
    }, 1000)
  });
});

app.use("/", api);
