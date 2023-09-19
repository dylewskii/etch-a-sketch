function getRandomHexColor() {
    // Generate a random integer between 0 and 16777215 (hexadecimal FFFFFF)
    const randomColor = Math.floor(Math.random() * 16777216);

    // Convert the random number to a hexadecimal string and pad with zeros if needed
    const hexColor = randomColor.toString(16).padStart(6, '0');

    // Return the hexadecimal color with a "#" prefix
    return `#${hexColor}`;
};

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
squares.forEach(function (sq) {
    sq.addEventListener('mouseover', function (event) {
        sq.style.backgroundColor = getRandomHexColor();
    });
});

const checkBox = document.querySelector(".checkbox");
checkBox.addEventListener("click", function(event) {

});