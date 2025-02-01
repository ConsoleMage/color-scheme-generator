let colorArray = [
    {
        hex: {
            value: "#F55A5A"
        }
    },
    {
        hex: {
            value: "#2B283A"
        }
    },
    {
        hex: {
            value: "#FBF3AB"
        }
    },
    {
        hex: {
            value: "#AAD1B6"
        }
    },
    {
        hex: {
            value: "#A626D3"
        }
    }
];

let selectedMode = "monochrome";

const button = document.getElementById("get-button");
const mode = document.getElementById("mode");

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

mode.addEventListener("input", () => {
    selectedMode = mode.value.toLowerCase();
});

button.addEventListener("click", () => {
    const seedColor = document.getElementById("color-picker").value.substring(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${selectedMode}&count=5`)
        .then(response => response.json())
        .then(data => {
            colorArray = data.colors;
            renderScheme();
        });
});

renderScheme();