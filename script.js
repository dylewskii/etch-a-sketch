const mainContainer = document.querySelector(".flex-container");


for (let i=0; i < 256; i++){
    const oneBox = document.createElement("div");
    mainContainer.append(oneBox);
    oneBox.className = "oneBox";
    oneBox.style.height = "30px";
    oneBox.style.width = "30px";
    oneBox.style.backgroundColor = "black";
}




