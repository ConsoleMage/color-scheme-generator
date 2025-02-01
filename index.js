let selectedColor = "000000";
let selectedMode = "Monochrome";
let colorArray = [];

function renderScheme() {
    let html = "";
    for (let color of colorArray) {
        html += `
            <div id="rectangle-container">
                <div id="rectangle" style="background-color: ${color.hex.value}"></div>
                <div id="color-hex">${color.hex.value}</div>
            </div>`;
    }
    document.getElementById("color-scheme").innerHTML = html;
}

const seedColor = document.getElementById("color-picker");
const mode = document.getElementById("mode");
const button = document.getElementById("get-button");
const colorScheme = document.getElementById("color-scheme");

button.addEventListener("click", () => {
    selectedColor = seedColor.value.substring(1);
    selectedMode = mode.value;
    fetch(`https://www.thecolorapi.com/id?hex=${selectedColor}&mode=${selectedMode}`)
        .then(response => response.json())
        .then(data => {
            colorArray.unshift(data);
        });
    renderScheme();
});
