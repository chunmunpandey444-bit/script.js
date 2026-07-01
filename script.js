// 1. Inputs aur Elements select karein
let inputOne = document.querySelector("#num1");
let inputTwo = document.querySelector("#num2");
let addBtn = document.querySelector("#add-btn");
let subBtn = document.querySelector("#sub-btn");
let multiplyBtn = document.querySelector("#multiply-btn");
let divideBtn = document.querySelector("#divide-btn");
let resultHeading = document.querySelector("#calc-result");

// 2. Addition (+) Ka Logic
if(addBtn) {
    addBtn.addEventListener("click", function() {
        let value1 = Number(inputOne.value);
        let value2 = Number(inputTwo.value);
        let sum = value1 + value2;
        resultHeading.innerText = "Result: " + sum;
    });
}

// 3. Subtraction (-) Ka Logic
if(subBtn) {
    subBtn.addEventListener("click", function() {
        let value1 = Number(inputOne.value);
        let value2 = Number(inputTwo.value);
        let difference = value1 - value2;
        resultHeading.innerText = "Result: " + difference;
    });
}

// 4. Multiplication (*) Ka Logic
if(multiplyBtn) {
    multiplyBtn.addEventListener("click", function() {
        let value1 = Number(inputOne.value);
        let value2 = Number(inputTwo.value);
        let product = value1 * value2;
        resultHeading.innerText = "Result: " + product;
    });
}

// 5. Division (/) Ka Logic
if(divideBtn) {
    divideBtn.addEventListener("click", function() {
        let value1 = Number(inputOne.value);
        let value2 = Number(inputTwo.value);
        let quotient = value1 / value2;
        resultHeading.innerText = "Result: " + quotient;
    });
}
