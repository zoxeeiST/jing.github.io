document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('video');
    const playButton = document.querySelector('.Mbutton');
    const pauseButton = document.querySelector('.Sbutton');

    playButton.addEventListener('click', function() {
        video.play();
    });

    pauseButton.addEventListener('click', function() {
        video.pause();
    });
});
