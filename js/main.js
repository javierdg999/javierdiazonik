function adjustImageSrc() {
    var width = window.innerWidth;
    var backgroundImage = document.querySelector('.background-image');
    var floatingImage = document.querySelector('.floating-image');

    if (width >= 900) {
        backgroundImage.src = "img/hero/bgdesktop.png";
        floatingImage.src = "img/hero/personajedesktop.png";
    } else if (width >= 768) {
        backgroundImage.src = "img/hero/bgtablet.png";
        floatingImage.src = "img/hero/personajetablet.png";
    } else {
        backgroundImage.src = "img/hero/bgmovil.png";
        floatingImage.src = "img/hero/personajemovil.png";
    }
}

// Run the function when the window is resized
window.addEventListener('resize', adjustImageSrc);

// Run the function on page load
adjustImageSrc();