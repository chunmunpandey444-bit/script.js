// ==========================================
// 1. COUNTER APPLICATION LOGIC (with Reset)
// ==========================================
let counterValue = document.querySelector("#counter-value");
let incrementButton = document.querySelector("#increment-btn");
let decrementButton = document.querySelector("#decrement-btn");
let resetButton = document.querySelector("#reset-btn");

let count = 0;

if(incrementButton && decrementButton && resetButton) {
    incrementButton.addEventListener("click", function() {
        count = count + 1;
        counterValue.innerText = count;
    });

    decrementButton.addEventListener("click", function() {
        count = count - 1;
        counterValue.innerText = count;
    });

    resetButton.addEventListener("click", function() {
        count = 0;
        counterValue.innerText = count;
    });
}

// ==========================================
// 2. INPUT VALUE & GREETING LOGIC
// ==========================================
let heading = document.querySelector("#greeting-msg");
let nameInput = document.querySelector("#user-name");
let submitBtn = document.querySelector("#submit-btn");

if(submitBtn) {
    submitBtn.addEventListener("click", function() {
        let enteredName = nameInput.value; 
        heading.innerText = "Welcome to advanced DOM, " + enteredName + "!";
    });
}
