// Convertiamo i valori dei contatori in stringhe a due cifre, aggiornando il display
const updateDisplay = () => {
    const secondsStr = String(seconds).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const hoursStr = String(hours).padStart(2, '0');

    // Aggiorna il display con il minutaggio corrente:

    time.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
}

// Funzione per i lap
const recordLapTime = () => {
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

// Funzioni del conto alla rovescia

// Formato conto alla rovescia
const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    seconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


// Mappatura tempo
const parseTime = timeString => {
    // Split del valore, array mappato, destructuring che assegna le variabili "hours, minutes e seconds"
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}