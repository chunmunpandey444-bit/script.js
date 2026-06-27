// ==========================================
// 1. LOGICAL OPERATORS 
// ==========================================
let budget = 90000;
let tvprice = 80000;
let hasSpaceInRoom = true;

if (tvprice <= budget && hasSpaceInRoom === true) {
    console.log("Sab sahi hai! TV kharid lo aur room mein laga lo.");
} else {
    console.log("Ya toh budget kam hai ya room mein jagah nahi hai!");
}

// ==========================================
// 2. FUNCTIONS & RETURN KEYWORD 
// ==========================================
function multiply(a, b) {
    let result = a * b;
    return result; 
}

let output = multiply(5, 2); 
console.log("fata fat kar ke de mere ko: " + output);

// ==========================================
// 3. DOM MANIPULATION & EVENTS 
// ==========================================
// Button click karne par chalne waala function
function badloNaam() {
    let heading = document.getElementById("mera-title");
    heading.innerHTML = "Web Developer Pushpraj Pandey!";
    heading.style.color = "red"; 
}

// Mouse hover karne ke liye Event Listeners
let heading = document.getElementById("mera-title");

heading.addEventListener("mouseenter", function() {
    heading.style.backgroundColor = "yellow";
    heading.style.padding = "10px";
});

heading.addEventListener("mouseleave", function() {
    heading.style.backgroundColor = "transparent";
});
