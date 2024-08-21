const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const clancyCountdown = "26 Jan 2025";

function countdown() {
    const clancyCountdownDate = new Date(clancyCountdown);
    const currentDate = new Date();

    const totalSeconds = Math.floor((clancyCountdownDate - currentDate) / 1000);

    console.log(`Total seconds: ${totalSeconds}`);

    if (totalSeconds <= 0) {
        // Se a contagem regressiva terminar, mostra 0 para cada unidade
        daysEl.innerHTML = '00';
        hoursEl.innerHTML = '00';
        minsEl.innerHTML = '00';
        secondsEl.innerHTML = '00';
        return;
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Inicializa a contagem regressiva e atualiza a cada segundo
countdown();
setInterval(countdown, 1000);
