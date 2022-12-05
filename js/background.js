
const mainColors = [
    "#02343F",
    "#331B3F",
    "#0A174E",
    "#07553B",
    "#50586C",
    "#815854",
    "#6A7BA2",
    "#3B1877",
    "#5F4B8B",
    "#000000",
    "#00203F",
    "#606060",
    "#2C5F2D",
    "#00539C",
    "#0063B2",
    "#7b9acc",
    "#2BAE66",
    "#2D2926",
    "#990011"
];

const subColors = [
    "#F0EDCC",
    "#ACC7B4",
    "#F5D042",
    "#CED46A",
    "#DCE2F0",
    "#F9EBDE",
    "#FFDFDE",
    "#DA5A2A",
    "#E69A8D",
    "#FFFFFF",
    "#ADEFD1",
    "#D6ED17",
    "#97BC62",
    "#EEA47F",
    "#9CC3D5",
    "#FCF6F5",
    "#FCF6F5",
    "#ed6f63",
    "#FCF6F5"
];


window.getComputedStyle(document.documentElement).getPropertyValue('--main-color');
window.getComputedStyle(document.documentElement).getPropertyValue('--sub-color');
const colorButton = document.getElementById("color");

function chagedColor(e){
    e.preventDefault();
    const mainColor = mainColors[Math.floor(Math.random() * mainColors.length)];
    const subColor = subColors[Math.floor(Math.random() * subColors.length)];
    const mainColorPick = document.documentElement.style.setProperty('--main-color', mainColor);
    const subColorPick = document.documentElement.style.setProperty('--sub-color', subColor);
}

colorButton.addEventListener("click", chagedColor);
