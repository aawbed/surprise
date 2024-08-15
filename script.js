document.getElementById('celebrateBtn').addEventListener('click', function() {
    // Start the emoji throwing effect
    throwEmojis();
    
    // Automatically change the slides
    startSlideshow();
});
document.getElementById('doNotClickButton').addEventListener('click', function() {
    window.location.href = 'compliments.html';  // New page with 100 compliments
});

function throwEmojis() {
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ['❤️', '😍', '🥰', '😘', '🌹', '🎉', '💕', '😊', '🎈', '✨'];
    const emojiCount = 50; // Number of emojis to throw

    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDelay = `${Math.random() * 2}s`;
        emojiContainer.appendChild(emoji);

        // Remove the emoji after animation ends
        emoji.addEventListener('animationend', () => {
            emoji.remove();
        });
    }
}

function startSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slides[currentSlide].classList.add('active');

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }, 3000); // Change slide every 3 seconds
}
