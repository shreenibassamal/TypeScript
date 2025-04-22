var namee = "Shreenibas";
var age = 32;
console.log("Hello ".concat(namee, ", you are ").concat(age, " years old.")); // Template string

var messagee = `Hello, World!  ${namee}, you are ${age} years old. this is generate from app1.js file`; // Template string
// create a new heading 1 element
var heading = document.createElement('h1');
heading.textContent = messagee;
// add the heading the document
document.body.appendChild(heading);
