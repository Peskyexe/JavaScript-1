// Funksjon for å legge til "calendar entries" til en spesifistert dag ved bruk av prompt() og id-en til dagen
function addEvent(container_id) {
    let event_text = prompt("Legg til en hendelse:");
    let event_entry = document.createElement("li");
    let event_container = document.getElementById(container_id);

    event_entry.innerText = event_text;
    event_container.appendChild(event_entry)
}