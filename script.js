let result;
function calAdd(){
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
result = parseFloat(num1) + parseFloat(num2);
document.getElementById("result").textContent = "Result: " + result;
}

function calMinus(){
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
result = parseFloat(num1) - parseFloat(num2);
document.getElementById("result").textContent = "Result: " + result;
}

function calProd(){
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
result = parseFloat(num1) * parseFloat(num2);
document.getElementById("result").textContent = "Result: " + result;

}

function calDivide(){
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
if(parseFloat(num2) ===0){
    document.getElementById("result").textContent = "Result: Cannot divide by zero";
        return;
}
    result = parseFloat(num1) / parseFloat(num2);
    document.getElementById("result").textContent = "Result: " + result;
}

