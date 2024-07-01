let display = document.getElementById('display');

function appendCharacter(character) {
    display.textContent += character;
}

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
