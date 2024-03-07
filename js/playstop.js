
        var audio = document.getElementById('myAudio');
        var playButton = document.getElementById('playButton');

        playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Stop';
        } else {
            audio.pause();
            playButton.textContent = 'Play';
        }
        });