const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
  })
);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
    methods: ["GET", "POST"],
  },
});

// users object
let users = {};

// connection initialized
io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  users[socket.id] = {
    id: socket.id,
    username: `User ${Object.keys(users).length + 1}`,
  };

  io.emit("users", Object.values(users));

  socket.on("cursor-move", (data) => {
    const cursorData = { ...data, username: users[socket.id].username };
    io.emit("cursor-update", cursorData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
    delete users[socket.id];
    io.emit("users", Object.values(users));
  });
});

//server init
server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
