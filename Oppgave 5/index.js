// Vet ikke helt hvordan standard metoden for dette er, men for denne lille oppgaven så funker det systeme her bra nok

// Lagrer alle elementene som skal bytte farge via å bruke lightmode klassen jeg lagde I CSS, å delte ut i HTML
const base_elements = document.querySelectorAll(".light-mode-base");
const base_light_elements = document.querySelectorAll(".light-mode-base-light");
const text_elements = document.querySelectorAll(".light-mode-text");

const themeButton = document.getElementById("themeChangeButton");
themeButton.addEventListener('click', () => {
    
    if (document.body.classList.contains("light-mode-base")) {
        // Hvis body har light mode, endre klassene til hvert pre-defineret elements dark mode variant
        // (Hvis body har light mode klassen sin, så skal alle de andre elementene ha light mode klassen sin)
        changeElementsToDarkMode(base_elements, "base");
        changeElementsToDarkMode(base_light_elements, "base-light");
        changeElementsToDarkMode(text_elements, "text");
    }
    else {
        // Hvis body ikke har light mode (aka den har dark mode), endre klassene til hvert pre-defineret elements light mode variant
        changeElementsToLightMode(base_elements, "base");
        changeElementsToLightMode(base_light_elements, "base-light");
        changeElementsToLightMode(text_elements, "text");
    }
});

// Funskjon for å bytte en array med elementer til sin light mode variant
function changeElementsToDarkMode(elements, variant){
    elements.forEach(element => {
        element.classList.remove(`light-mode-${variant}`);
        element.classList.add(`dark-mode-${variant}`);
    });
}

// Funskjon for å bytte en array med elementer til sin dark mode variant
function changeElementsToLightMode(elements, variant){
    elements.forEach(element => {
        element.classList.remove(`dark-mode-${variant}`);
        element.classList.add(`light-mode-${variant}`);
    });
}