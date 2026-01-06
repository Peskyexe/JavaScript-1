const body = document.body;
const button = document.getElementById('changeColorButton');

const background_colors = ['#EFEFEF', '#ff6543ff', '#5b79ffff', '#F333FF', '#69fff8ff'];
var color_index = 1;

button.addEventListener('click', () => {
    if (color_index >= background_colors.length) {
        color_index = 0;
    }
    body.style.backgroundColor = background_colors[color_index];
    color_index++;
});
