// Define a function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width;
}

// Get references to the input elements and the result element
const lengthInput = document.getElementById("length");
const widthInput = document.getElementById("width");
const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");

// Add a click event listener to the calculate button
calculateButton.addEventListener("click", function () {
  // Get the values from the input elements
  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);

  // Check if the input values are valid numbers
  if (!isNaN(length) && !isNaN(width)) {
    // Calculate the area
    const area = calculateRectangleArea(length, width);

    // Display the result on the page
    resultElement.textContent = `The area of the rectangle is: ${area}`;
  } else {
    resultElement.textContent =
      "Please enter valid numbers for length and width.";
  }
});
