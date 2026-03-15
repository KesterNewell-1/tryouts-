Document.getElementById;
// Get the element with the id "head"
let heading = document.getElementById("head");

// Log the element to the console
console.log(heading);

// Get the element with the id "btn"
let button = document.getElementById("btn");

// Log the element to the console
console.log(button);

let headingQuery = document.querySelector(".head");
console.log(headingQuery);

let paragraph = document.getElementById("text");
paragraph.removeAttribute("id");

console.log(paragraph);

let headingElement = document.createElement("h1");
headingElement.textContent = "Kester is the best";
document.body.appendChild(headingElement);

headingElement.style.color = "blue";

let container = document.getElementById("container");
let newContainer = container.children;

console.log(newContainer);
