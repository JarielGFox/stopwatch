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
    const lapTime = time.textContent; // a lapTime diamo il valore di time.textContent
    const lapElement = document.createElement('div'); // creiamo un elemento div "lapElement"
    lapElement.textContent = lapTime; // nel nostro div stampiamo il valore di lapTime
    lapElement.classList.add('text-warning'); // il testo viene stampato in giallo
    timeRecord.appendChild(lapElement); // aggiungiamo l'elemento figlio lapElement al div timeRecord

    // Se ci sono più di 3 laps, sostituisce con i nuovi

    while (timeRecord.childElementCount >= 4) {
        timeRecord.removeChild(timeRecord.firstElementChild);
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
    // In ordine: Split del valore, array mappato, destructuring array che assegna le variabili "hours, minutes e seconds"
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}