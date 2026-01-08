const image_cards = document.querySelectorAll(".auto-zoom");
const max_zoom = 1.25;

image_cards.forEach(card => {
    card.addEventListener('mouseover', (event) => {
        card.style.transform = `scale(${max_zoom})`
    });
    card.addEventListener('mouseout', (event) => {
        card.style.transform = `scale(${1})`
    });
}); 