const socket = io.connect("http://localhost:5000/");

let handle = document.getElementById("handle");
let message = document.getElementById("message");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let feedback = document.getElementById("feedback");

btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typing", { handle: handle.value });
});

socket.on("chat", data => {
  output.innerHTML +=
    "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});

socket.on("typing", data => {
  output.innerHTML = "<p><em>" + data.handle + " is typing a message </em></p>";
});
