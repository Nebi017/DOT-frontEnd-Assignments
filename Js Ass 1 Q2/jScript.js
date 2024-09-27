
let A=5;
let B=6;
let C=7;

// First We Should Caculate the semi-perimeter
let Z = (A + B + C) / 2;

// Calculate the area using Heron's formula
let area= Math.sqrt(Z * (Z - A) * (Z - B) * (Z - C));

console.log("The area of the triangle is: " + area);
