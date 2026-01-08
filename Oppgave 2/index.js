const text = document.getElementById("textToChange")
const button = document.getElementById("changeTextButton")

const classes = ["textType1", "textType2", "textType3"];
var textTypeIndex = 0;

// Passer på at teksten har en klasse
text.classList.add(classes[textTypeIndex]);

button.addEventListener('click', () => {
    // Fjerner forigje klasse
    text.classList.remove(classes[textTypeIndex]);

    // Flytter indexen til neste index
    textTypeIndex = (textTypeIndex + 1) % classes.length;

    // Legger til den nye klassen
    text.classList.add(classes[textTypeIndex])
});