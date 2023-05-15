const container = document.querySelector(".container");
const size = document.querySelector("#size");
container.style = `grid-template-columns: repeat(${size.value}, 1fr); grid-template-rows: repeat(${size.value}, 1fr)`;
const sizeText = document.querySelector("#size-text");
sizeText.textContent = `Grid: ${size.value} X ${size.value}`;
const box = document.createElement("div");

// Adding elements to the grid
for (let i = 0; i < size.value ** 2; i++) {
  let box = document.createElement("div");
  box.classList.add("lilBox");
  box.classList.add(i + 1);
  container.appendChild(box);
}

let currentColor = "lightblue";

const allBoxes = document.querySelectorAll(".lilBox");

allBoxes.forEach(function (item) {
  item.addEventListener("mouseover", function (e) {
    e.currentTarget.style = `background-color: ${currentColor}`;
  });
});

// Colors
const colors = document.querySelectorAll(".colors-boxes");
colors.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("coral")) {
      currentColor = "lightcoral";
    } else if (e.currentTarget.classList.contains("blue")) {
      currentColor = "lightblue";
    } else if (e.currentTarget.classList.contains("green")) {
      currentColor = "lightgreen";
    } else if (e.currentTarget.classList.contains("gray")) {
      currentColor = "lightgray";
    }
  });
});

// Updating the size of the blocks

size.addEventListener("change", function (e) {
  // e.currentTarget.value
  const newDimension = Number(e.currentTarget.value);

  // Text
  sizeText.textContent = `Grid: ${newDimension} X ${newDimension}`;

  // Grid dimension
  container.innerHTML = "";
  container.style = `grid-template-columns: repeat(${newDimension}, 1fr); grid-template-rows: repeat(${newDimension}, 1fr)`;

  for (let i = 0; i < newDimension ** 2; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("lilBox");
    newBox.classList.add(i + 1);
    container.appendChild(newBox);
  }

  const allNewBoxes = document.querySelectorAll(".lilBox");

  allNewBoxes.forEach(function (item) {
    item.addEventListener("mouseover", function (e) {
      e.currentTarget.style = `background-color: ${currentColor}`;
    });
  });

  button.addEventListener("click", function (e) {
    allNewBoxes.forEach((item) => {
      item.style = `background-color: white`;
    });
  });
});

function reset() {
  allBoxes.forEach((item) => {
    item.style = `background-color: white`;
  });
}

const button = document.querySelector(".btn");
button.addEventListener("click", reset);
