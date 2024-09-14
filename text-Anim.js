
const texts = ["Information System Security.", "Network Engineer.", "Frontend Developer.", "Knowledge Management Associate."];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('animated-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause before starting the next string
    } else {
        setTimeout(type, 100);
    }
}());
