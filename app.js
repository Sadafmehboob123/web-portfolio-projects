
// JavaScript to toggle navbar on small screens
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});



let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".slider img, .slider video");
    const totalSlides = slides.length;

    // Update slideIndex
    slideIndex += direction;

    // Loop the slides
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

// Initialize the slider by displaying the first slide
document.addEventListener("DOMContentLoaded", () => {
    moveSlide(0);

    // Auto transition every 2 seconds
    setInterval(() => {
        moveSlide(1); // Move to the next slide
    }, 2000);
});

