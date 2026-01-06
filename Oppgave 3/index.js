const input_form = document.getElementById("form")
const text_input = document.getElementById("text-input")
const error_message = document.getElementById("error-message")
const html_list = document.getElementById("list")

const minimum_input_length = 3
const maximum_input_length = 50

// Form validation
input_form.addEventListener('submit', (e) => {
    // Load error conditions and messages
    let errors = []
    errors = getFormErrors(text_input.value)

    // If there are any errors, show error message(s)
    if (errors.length > 0) {
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
    // If there are no errors, add the item to the list
    else {
        e.preventDefault()
        addItemToList(text_input.value)
        text_input.value = ""
    }
})

function getFormErrors(text) {
    let errors = []

    // Check for empty input
    if (text === "" || text == null) {
        errors.push("Can't add empty to-do item")
        text_input.parentElement.classList.add("error")
    }

    // Check if text is too long
    if (text.length > maximum_input_length) {
        errors.push(`To-do item is too long, max ${maximum_input_length} characters`)
        text_input.parentElement.classList.add("error")
    }

    // Check if text is too short
    if (text.length < minimum_input_length) {
        errors.push(`To-do item is too short, min ${minimum_input_length} characters`)
        text_input.parentElement.classList.add("error")
    }

    return errors
}

// Clear error message when user starts typing
text_input.addEventListener('input', () => {
    if (text_input.parentElement.classList.contains("error")) {
        text_input.parentElement.classList.remove("error")
        error_message.innerText = ""
    }
})

// Skrevet med hjelp fra inline Copilot
function addItemToList(text) {
    // Creating list item based on the template in the HTML
    const list_item = document.createElement("li")

    const span = document.createElement("span")
    span.innerText = text
    
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            list_item.classList.add("checked")
        } else {
            list_item.classList.remove("checked")
        }
    })

    const delete_button = document.createElement("button")
    delete_button.innerText = "X"

    delete_button.addEventListener('click', () => {
        html_list.removeChild(list_item)
    })

    list_item.appendChild(span)
    list_item.appendChild(checkbox)
    list_item.appendChild(delete_button)
    html_list.appendChild(list_item)
}