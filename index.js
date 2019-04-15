const express = require("express");
const http = require("http");
const app = express();
const port = process.env.port || 5000;
const server = http.createServer(app);
const socket = require("socket.io");
server.listen(port);

//fdfdgfdaa
app.use(express.static("public"));

const io = socket(server);

io.on("connection", function(socket) {
  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });
  socket.on("typing", data => {
    socket.broadcast.emit("typing", data);
  });
});
