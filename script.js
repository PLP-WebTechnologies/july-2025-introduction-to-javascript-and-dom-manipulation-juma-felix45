// ========================
// Part 1: Basics
// ========================

// Using variables, conditionals, and user input
function checkAge() {
  let age = document.getElementById("ageInput").value; // user input
  let result = "";

  if (age >= 18) {
    result = "You are eligible to apply.";
  } else if (age > 0) {
    result = "You are not eligible yet.";
  } else {
    result = "Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = result;
}

// ========================
// Part 2: Functions
// ========================

// Function to calculate total of two numbers
function calculateTotal(a, b) {
  return a + b;
}

function showTotal() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  let total = calculateTotal(n1, n2);
  document.getElementById("totalResult").innerText = "Total: " + total;
}

// Function to format a string
function formatName(name) {
  return "Hello, " + name.charAt(0).toUpperCase() + name.slice(1);
}

// ========================
// Part 3: Loops
// ========================

// Countdown using for loop
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old items

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Listing items from an array using forEach
function listColors() {
  let colors = ["Red", "Green", "Blue", "Yellow"];
  let list = document.getElementById("colorList");
  list.innerHTML = "";

  colors.forEach(function(color) {
    let li = document.createElement("li");
    li.textContent = color;
    list.appendChild(li);
  });
}

// ========================
// Part 4: DOM Manipulation
// ========================

// Toggle dark mode using classList
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Change heading text dynamically
function changeHeading() {
  let heading = document.getElementById("dynamicHeading");
  heading.textContent = "The heading has been changed!";
}

// Add a new item to the list
function addNewItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
}
