// Display e bottoni

const display = document.querySelector('#stopwatch-display');
const time = document.querySelector('#time');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

// Variabili dell'orologio

let hours = 0;
let minutes = 0;
let seconds = 0;

// Variabile intervallo

let intervalId = null;


// Start button event listener
startButton.addEventListener("click", function () {
    if (intervalId !== null) return; // se il cronometro è in funzione, non vogliamo un altro click su start per riavviarlo!

    // Start the interval

    intervalId = setInterval(function () {
        seconds++
        // Usiamo doppio if perchè entrambe le condizioni possono essere veritiere allo stesso intervallo di tempo
        if (seconds >= 60) { // quando i secondi raggiungono il 60 resettali a 0 e riparte la conta
            seconds = 0;
            minutes++;
        }

        if (minutes >= 60) { // quando i minuti raggiungono il 60 resettali a 0 e riparte la conta
            minutes = 0;
            hours++
        }

        if (hours === 24) { // quando le ore arrivano a 24, il contatore torna a 0
            hours = 0;
        }

        updateDisplay() // invochiamo la funzione che aggiorna il display
    }, 1000)
});

// Stop button event listener
stopButton.addEventListener("click", function () {
    if (intervalId === null) return;

    clearInterval(intervalId); // cancella l'azione chiamata con setInterval(), gli si passa il parametro intervalID a cui abbiamo dato valore null

    intervalId = null; // resetta intervalId indicando che il cronometro è fermo
});

// Reset button event listener
resetButton.addEventListener("click", function () {
    if (intervalId === null) {
        clearInterval(intervalId);
        intervalId = null; // ferma l'esecuzione di setInterval()

        // dopo aver fermato l'esecuzione di setInterval() i contatori tornano a zero

        seconds = 0;
        minutes = 0;
        hours = 0;

        time.textContent = '00:00:00'; // il "testo" del cronmometro parte da zero
    }
});

// Convertiamo i valori dei contatori in stringhe a due cifre, aggiornando il display
function updateDisplay() {
    const secondsStr = String(seconds).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const hoursStr = String(hours).padStart(2, '0');

    // Aggiorna il display con il minutaggio corrente:

    time.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
}

