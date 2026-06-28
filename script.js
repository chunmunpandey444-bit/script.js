// ==========================================
// 1. MODERN ARRAY LOOP: forEach 
// ==========================================
let freshers = ["Pushpraj", "Amit", "Rahul"];

freshers.forEach(function(student) {
    console.log(student + " is learning Web Development.");
});

// ==========================================
// 2. ARRAY MAP METHOD 
// ==========================================
let oldPrices = [100, 200, 300];

let newPrices = oldPrices.map(function(price) {
    return price + 10;
});

console.log("Purani Prices:", oldPrices);
console.log("Nayi Prices (with delivery charge):", newPrices);

// ==========================================
// 3. ARRAY FILTER METHOD 
// ==========================================
let allMarks = [25, 45, 34, 26, 70];

let passingMarks = allMarks.filter(function(marks) {
    return marks >= 33; 
});

console.log("Saare Marks:", allMarks);
console.log("Sirf Pass hone waale Marks:", passingMarks);
