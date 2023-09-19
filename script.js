// Returns a random Hex Color
function getRandomHexColor() {
    // Generate a random integer between 0 and 16777215 (hexadecimal FFFFFF)
    const randomColor = Math.floor(Math.random() * 16777216);

    // Convert the random number to a hexadecimal string and pad with zeros if needed
    const hexColor = randomColor.toString(16).padStart(6, '0');

    // Return the hexadecimal color with a "#" prefix
    return `#${hexColor}`;
};

// Generates the required nr of etch-a-sketch squares
const flexContainer = document.querySelector(".flex-container");
for (let i=0; i < 256; i++){
    // generates the individual squares that will
    // fill the etch-a-sketch screen
    const etchSquare = document.createElement("div");
    flexContainer.append(etchSquare);
    etchSquare.className = "one-box";
    etchSquare.style.height = "25px";
    etchSquare.style.width = "25px";
    etchSquare.style.backgroundColor = "#E3E4DB";
}

const squares = document.querySelectorAll(".one-box");

// Handles the COLOR toggle being clicked
const colorCheckbox = document.querySelector("#checkbox_color");
colorCheckbox.addEventListener("change", function(event) {
    // toggle on = color
    if (event.target.checked){
        squares.forEach(function (sq) {
            sq.addEventListener('mouseover', function (event) {
                sq.style.backgroundColor = getRandomHexColor();
            });
        });
    } 
    // toggle off = grey
    else {
        squares.forEach(function (sq) {
            sq.addEventListener('mouseover', function (event) {
                sq.style.backgroundColor = "grey";
            });
        });
    }
});

// Handles the CLEAR toggle being clicked
const clearCheckbox = document.querySelector("#checkbox_clear");
clearCheckbox.addEventListener("change", function (event) {
    // toggle on = clear screen and revert button
    if (event.target.checked){
        for (let i=0; i < squares.length; i++){
            squares[i].style.backgroundColor = "#E3E4DB";
        }
        setTimeout(() => { clearCheckbox.checked = false;; }, 250);
    }
});

// Activates the etch-a-sketch game on page load
function activateEtchASketch() {
    squares.forEach(function (sq) {
        sq.addEventListener('mouseover', function (event) {
            sq.style.backgroundColor = "grey";
        });
    });
}

// Call the function to activate the game when the page loads
activateEtchASketch();