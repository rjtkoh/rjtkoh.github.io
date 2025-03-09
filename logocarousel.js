document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    let cloneSlides = slides.map(slide => slide.cloneNode(true));
    cloneSlides.forEach(clone => track.appendChild(clone));

    track.style.width = `${slideWidth * slides.length * 2}px`;

    let startPosition = 0;

    function moveSlides() {
        startPosition -= slideWidth / 100; // Adjust this value to change the speed
        if (startPosition <= -slideWidth * slides.length) {
            startPosition = 0;
        }
        track.style.transform = `translateX(${startPosition}px)`;
        requestAnimationFrame(moveSlides);
    }

    moveSlides();
});
