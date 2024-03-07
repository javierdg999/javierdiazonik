function adjustImageSrc() {
    var width = window.innerWidth;
    var backgroundImage = document.querySelector('.background-image');
    var floatingImage = document.querySelector('.floating-image');

    if (width >= 900) {
        backgroundImage.src = "/frontend/img/hero/bgdesktop.png";
        floatingImage.src = "/frontend/img/hero/personajedesktop.png";
    } else if (width >= 768) {
        backgroundImage.src = "/frontend/img/hero/bgtablet.png";
        floatingImage.src = "/frontend/img/hero/personajetablet.png";
    } else {
        backgroundImage.src = "/frontend/img/hero/bgmovil.png";
        floatingImage.src = "/frontend/img/hero/personajemovil.png";
    }
}

// Run the function when the window is resized
window.addEventListener('resize', adjustImageSrc);

// Run the function on page load
adjustImageSrc();