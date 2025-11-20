var sumtext = document.getElementById("sum");
var numberBox = document.getElementById("numberBox");
var numberBox2 = document.getElementById("numberBox2");
const sumButton = document.getElementById("sumButton");

sumButton.addEventListener("click", function() {
    var num1 = parseInt(numberBox.value, 10);
    var num2 = parseInt(numberBox2.value, 10);
    sumtext.innerText = (num1 + num2);
    console.log(num1 + num2)
});