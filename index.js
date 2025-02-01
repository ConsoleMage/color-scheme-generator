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

let selectedMode = "";

const button = document.getElementById("get-button");
const mode = document.getElementById("mode");

function renderScheme() {
    let html = "";
    console.log(colorArray);
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
    selectedMode = mode.value;
});

button.addEventListener("click", () => {
    const seedColor = document.getElementById("color-picker").value.substring(1);
    fetch(`https://www.thecolorapi.com/id?hex=${seedColor}&mode=${selectedMode}`)
        .then(response => response.json())
        .then(data => {
            colorArray.unshift(data);
            if (colorArray.length > 5) {
                colorArray.pop();
            }
            renderScheme();
        });
});

renderScheme();