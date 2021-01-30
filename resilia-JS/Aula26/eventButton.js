var btn = document.getElementById("btn");
var msg = "Passe o mouse...";

btn.innerText = msg;

btn.addEventListener("mouseover", function() {
  btn.innerText = "Fala, consagrado!";
});

btn.addEventListener("mouseout", function() {
  btn.innerText = msg;
});

btn.addEventListener("mousedown", function() {
  btn.style.backgroundColor = "black";
  btn.style.color = "yellow";
});

btn.addEventListener("mouseup", function() {
  btn.style.backgroundColor = "";
  btn.style.color = "";
});
