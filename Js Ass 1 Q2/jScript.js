
let A=5;
let B=6;
let C=7;

// First We Should Caculate the semi-perimeter
let S = (A + B + C) / 2;

// Calculate the area using Heron's formula
let area= Math.sqrt(S * (S - A) * (S - B) * (S - C));

console.log("The area of the triangle is: " + area);
