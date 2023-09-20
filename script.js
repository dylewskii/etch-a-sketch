// Slider
const screenSizeSlider = document.querySelector(".slider");
const sliderText = document.querySelector("#slider_text");

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

// Handles the SLIDER being changed
screenSizeSlider.addEventListener("input", () => {
    const newSize = parseInt(screenSizeSlider.value);
    if (newSize === 1){
        sliderText.textContent = "16 x 16";
        clearScreen()
    } else if (newSize === 2){
        sliderText.textContent = "32 x 32";
        clearScreen()
    } else if (newSize === 3) {
        sliderText.textContent = "64 x 64";
        clearScreen()
    }
});

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

// // Resets the screen to grey
function clearScreen(){
    for (let i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = "#E3E4DB";
    }
};

// Resets ALL checkboxes
function resetCheckboxes() {
    colorCheckbox.checked = false;
    clearCheckbox.checked = false;
}

// Activates the etch-a-sketch game on page load
function activateEtchASketch() {
    squares.forEach(function (sq) {
        sq.addEventListener('mouseover', function (event) {
            sq.style.backgroundColor = "grey";
        });
    });
}

activateEtchASketch();


// // Changes class of every box on the screen
// // changeScreenSize(1) = 16x16
// // changeScreenSize(2) => 32x32
// // changeScreenSize(3) = 64x64
// // function changeSquareSize(size){
// //     for (let i=0; i < squares.length; i++){
// //         squares[i].className = "";
// //         if (size === 1){
// //             squares[i].className = "large-box";
// //         } else if (size === 2){
// //             squares[i].className = "medium-box";
// //         } else if (size === 3){
// //             squares[i].className = "small-box";
// //         }
// //     }
// // }