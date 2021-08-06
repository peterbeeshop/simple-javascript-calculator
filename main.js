//calculator
let num1, num2, sign;
let input = document.querySelector("input");
input.value = 0;
let value = [];
//select all buttons
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", function () {
    value.push(parseFloat(btn.innerHTML));
    let arr = value.join("");
    input.value = arr;
  });
});
//select all span tags
document.querySelectorAll("span").forEach((span) => {
  span.addEventListener("click", function () {
    num1 = parseFloat(input.value);
    sign = span.innerHTML;
    value = [];
    input.value = value;
  });
});

//queryselector the '=' sign
document.querySelector("strong").addEventListener("click", function () {
  num2 = parseFloat(input.value);
  equals(num1, num2, sign);
});

//function to be called when "=" is clicked
function equals(firstNum, secondNum, aSign) {
  switch (aSign) {
    case "-":
      input.value = firstNum - secondNum;
      break;
    case "+":
      input.value = firstNum + secondNum;
      break;
    case "/":
      input.value = firstNum / secondNum;
      break;
    case "*":
      input.value = firstNum * secondNum;
      break;
    default:
      alert("got an error");
  }
}
//queryselector the "C" sign to reset the input value
document.querySelector("em").addEventListener("click", function () {
  value = [];
  input.value = 0;
});
