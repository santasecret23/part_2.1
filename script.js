// 1. Configuración de Fecha (20 de enero de 2023)
const startDate = new Date("2023-01-20T00:00:00");

function updateCounter() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0);
        days += prevMonth.getDate();
    }
    if (months < 0) { years--; months += 12; }

    const diff = now - startDate;
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("counter").innerHTML = `
        <div class="time-unit"><h2>${years}</h2><p>Años</p></div>
        <div class="time-unit"><h2>${months}</h2><p>Meses</p></div>
        <div class="time-unit"><h2>${days}</h2><p>Días</p></div>
        <div class="time-unit"><h2>${String(hours).padStart(2,'0')}</h2><p>Hrs</p></div>
        <div class="time-unit"><h2>${String(minutes).padStart(2,'0')}</h2><p>Min</p></div>
        <div class="time-unit"><h2>${String(seconds).padStart(2,'0')}</h2><p>Seg</p></div>
    `;

    document.getElementById("timeTogether").textContent = `Llevamos juntos ${years} años y ${months} meses.`;
}

// 2. Carrusel de Fotos
const photos = document.querySelectorAll('.carousel-item');
let currentPhoto = 0;
setInterval(() => {
    photos[currentPhoto].classList.remove('active');
    currentPhoto = (currentPhoto + 1) % photos.length;
    photos[currentPhoto].classList.add('active');
}, 4000);

// 3. Control de Videos Manual
document.querySelectorAll('.video-card').forEach(card => {
    const video = card.querySelector('video');
    const btn = card.querySelector('.play-btn');

    card.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            btn.innerHTML = "⏸";
            btn.style.opacity = "0.3";
        } else {
            video.pause();
            btn.innerHTML = "▶";
            btn.style.opacity = "1";
        }
    });
});

setInterval(updateCounter, 1000);
updateCounter();