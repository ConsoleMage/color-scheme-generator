let selectedColor = "";
const seedColor = document.getElementById("color-picker");
const button = document.getElementById("get-button");

seedColor.addEventListener("input", function() {
    selectedColor = seedColor.value.substring(1);
});

button.addEventListener("click", () => {

    console.log("button clicked!");
    console.log(selectedColor);
    fetch(`https://www.thecolorapi.com/id?hex=${selectedColor}`)
        .then(response => response.json())
        .then(data => console.log(data));
});
