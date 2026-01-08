// Fikke mye hjelp fra KI her, men jeg går gjenom alt flere ganger for å forstå det.

const box_elements = document.querySelectorAll(".box");
const dropzone = document.getElementById("drop-zone");

let dragged = null;
let dragOffset = { x: 0, y: 0 };

box_elements.forEach(box => {
    // Når du begynner å dra boksen, lagre referansen til den og legg til en .dragging klasse for styling.
    // Kalkuler også offsetet mellom musepekeren og elementets center
    box.addEventListener('dragstart', (event) => {
        dragged = event.target;

        // Lagrer musepekerens offset fra elementets center slik at vi kan bevare det ved dropp
        const rect = dragged.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        dragOffset.x = event.clientX - centerX;
        dragOffset.y = event.clientY - centerY;

        // Setter dataTransfer data for drag-and-drop API
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.classList.add('dragging');
    });

    // Når du slipper boksen, fjern .dragging klassen
    box.addEventListener('dragend', (event) => {
        event.target.classList.remove('dragging');
        dragged = null;
        dragOffset = { x: 0, y: 0 };
    });
});

// Lar bokser bli droppet i dropzonen
dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
});

// Når du slipper boksen i dropzonen, plasser den basert på musepekerens posisjon og det lagrede offsetet
dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    // Henter in dataen satt under dragstart
    const element_id = event.dataTransfer.getData('text/plain');
    const element = document.getElementById(element_id) || dragged;
    if (!element) return;

    const rect = dropzone.getBoundingClientRect();

    // Kalkulerer elementets center posisjon ved å bevare musepeker -> center offsetet vi lagret på dragstart eventet
    let centerX = event.clientX - dragOffset.x;
    let centerY = event.clientY - dragOffset.y;

    // Konverterer center koordinater til left/top relative til dropzonen
    const left = Math.round(centerX - rect.left - element.offsetWidth / 2);
    const top = Math.round(centerY - rect.top - element.offsetHeight / 2);

    // clamper koordinatene slik at elementet ikke går utenfor dropzonen
    // Jeg forstår ikke helt hvordan dette fungerer enda
    const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
    const finalX = clamp(left, 0, rect.width - element.offsetWidth);
    const finalY = clamp(top, 0, rect.height - element.offsetHeight);

    console.log(`Dropping element ${element_id} at (${finalX}, ${finalY})`);

    placeElement(element, finalX, finalY);
    if (!dropzone.contains(element)) dropzone.appendChild(element);
});

// Funksjon for å plassere et element på spesifikke koordinater innenfor dropzonen
function placeElement(element, x_pos, y_pos) {
    element.style.position = "absolute";
    element.style.left = x_pos + 'px';
    element.style.top = y_pos + 'px';
}