let style1 = document.querySelector(".style1");
let style2 = document.querySelector(".style2");
let style3 = document.querySelector(".style3");

let content = document.querySelector(".content");

style1.addEventListener("click", function () {
  content.style.backgroundColor = "red";
});

style2.addEventListener("click", function () {
  content.style.backgroundColor = "blue";
});

style3.addEventListener("click", function () {
  content.style.backgroundColor = "yellow";
});
