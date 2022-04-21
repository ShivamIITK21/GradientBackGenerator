var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");

color1.addEventListener("input", function() {
    body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
    h3.textContent = body.style.background + ";";
});

color2.addEventListener("input", function() {
    body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
    h3.textContent = body.style.background + ";";
});