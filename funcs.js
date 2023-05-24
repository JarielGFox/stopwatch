// Convertiamo i valori dei contatori in stringhe a due cifre, aggiornando il display
function updateDisplay() {
    const secondsStr = String(seconds).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const hoursStr = String(hours).padStart(2, '0');

    // Aggiorna il display con il minutaggio corrente:

    time.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
}

function recordLapTime() {
    const lapTime = time.textContent;
    const lapElement = document.createElement('div');
    lapElement.textContent = lapTime;
    lapElement.classList.add('text-warning');
    timeRecord.appendChild(lapElement);

    // Se ci sono più di 3 laps, sostituisce con i nuovi
    if (timeRecord.childElementCount >= 3) {
        timeRecord.removeChild(timeRecord.firstChild);
    }
}