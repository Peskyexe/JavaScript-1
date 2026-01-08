// For at alt skal funke riktig er det viktig at jeg loader java script filen min med "defer" attributen i HTML-en,
// ellers så loader javascripten før alle dropdown menyene og ingen ting vil funke.

// Velger alle dropdown menyene
const settings_elements = document.querySelectorAll("select")

// Velger textarea elemente
const textarea = document.getElementById("text-field")

// Setter opp EventListeners på alle dropdown menyene til å endre text-field sin style med sin nye setting
settings_elements.forEach(element => {
    element.addEventListener('change', (event) => {
        console.log(`Change on ${element.id} -> ${event.target.value}`)
        let selected_value = event.target.value;
        let style_to_change = element.id;

        textarea.style[style_to_change] = selected_value;
    });
});