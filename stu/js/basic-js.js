console.log("just a test");

// 数据类型
let x;
x = 0;
x = "juset a test";
x = null;
x = true;
x = undefined;
console.log(x);

// 对象
let book = {
    name: "js",
    price: "10.0"
};
console.log(book.name + " " + book.price);
console.log(book["name"]);

// 数组
let array = [1, 2, 3];
console.log(array[0] + array[1]);

// 数组和对象
let points = [
    {x: 0, y: 1},
    {x: 0, y: 1}
];
console.log(points);

let data = {
    trial1: [[1, 2], [3, 4]],
    trial:[[2, 3], [4 ,5]]
}
console.log(data);

// 表达式
console.log(points[0].x + points[1].y);

let a = 2, b = 3;
console.log(a === b + " " + a !== b);
console.log((a === 3) && (b === 4));

// 函数
function plus(x) {
    return x + 1;
};
console.log(plus(12));

let square = function (x) {
    return x * x;
};
console.log(square(plus(2)));

const plus1 = x => x + 1;
const squre1 = x => x * x;
console.log(plus1(2));
console.log(squre1(2));

let array1 = [];
array1.push(1, 2, 3);
array1.reverse();
console.log(array1);

points.dist = function() {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p2.y;
    return Math.sqrt(a * a, b * b);
};
console.log(points.dist());

// 判断、循环；
function abs(x) {          // A function to compute the absolute value.
    if (x >= 0) {          // The if statement...
        return x;          // executes this code if the comparison is true.
    }                      // This is the end of the if clause.
    else {                 // The optional else clause executes its code if
        return -x;         // the comparison is false.
    }                      // Curly braces optional when 1 statement per clause.
}                          // Note return statements nested inside if/else.
console.log(abs(-10) === abs(10));       // => true

function sum(array) {      // Compute the sum of the elements of an array
    let sum = 0;           // Start with an initial sum of 0.
    for(let x of array) {  // Loop over array, assigning each element to x.
        sum += x;          // Add the element value to the sum.
    }                      // This is the end of the loop.
    return sum;            // Return the sum.
}
console.log(sum(array1));                // => 28: sum of the first 5 primes 2+3+5+7+11

function factorial(n) {    // A function to compute factorials
    let product = 1;       // Start with a product of 1
    while(n > 1) {         // Repeat statements in {} while expr in () is true
        product *= n;      // Shortcut for product = product * n;
        n--;               // Shortcut for n = n - 1
    }                      // End of loop
    return product;        // Return the product
}
console.log(factorial(4));               // => 24: 1*4*3*2

function factorial2(n) {   // Another version using a different loop
    let i, product = 1;    // Start with 1
    for(i=2; i <= n; i++)  // Automatically increment i from 2 up to n
        product *= i;      // Do this each time. {} not needed for 1-line loops
    return product;        // Return the factorial
}
console.log(factorial2(5))              // => 120: 1*2*3*4*5

// OOP
class Point {              // By convention, class names are capitalized.
    constructor(x, y) {    // Constructor function to initialize new instances.
        this.x = x;        // This keyword is the new object being initialized.
        this.y = y;        // Store function arguments as object properties.
    }                      // No return is necessary in constructor functions.

    distance() {           // Method to compute distance from origin to point.
        return Math.sqrt(  // Return the square root of x² + y².
            this.x * this.x +  // this refers to the Point object on which
            this.y * this.y    // the distance method is invoked.
        );
    }
}

// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1);   // The geometric point (1,1).

// Now use a method of the Point object p
console.log(p.distance());               // => Math.SQRT2




