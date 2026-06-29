// 1. JavaScript Object 
let studentDetail = {
    name: "pushpraj pandey",
    age: 20,
    course: "BCA",
    islearningcode: true
};
console.log("Student Profile:", studentDetail);

// 2. Array of Objects 
let laptopList = [
    { brand: "Dell", ram: "8GB", price: 55000 },
    { brand: "Macbook", ram: "16GB", price: 120000 }
];
console.log("First Laptop Brand:", laptopList[0].brand);

// 3. Object Methods 
let userProfile = {
    name: "Pushpraj Pandey",
    sayhello: function() {
        console.log("Welcome back, Pushpraj! Let's code.");
    }
};
userProfile.sayhello();

// 4. Math Object & Random
let roundedMarks = Math.round(85.7);
let randomInteger = Math.floor(Math.random() * 10) + 1;
console.log("Rounded Marks:", roundedMarks);
console.log("Random Integer (1 to 10):", randomInteger);
