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

const button = document.getElementById("get-button");
const colorScheme = document.getElementById("color-scheme");
const mode = document.getElementById("mode");
let selectedMode = "";

mode.addEventListener("input", () => {
    selectedMode = mode.value;
});

button.addEventListener("click", () => {
    const seedColor = document.getElementById("color-picker").value.substring(1);
    fetch(`https://www.thecolorapi.com/id?hex=${seedColor}&mode=${selectedMode}`)
        .then(response => response.json())
        .then(data => {
            colorArray.unshift(data);
            renderScheme();
        });
});
