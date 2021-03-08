w3CodeColor();

const video = $('.myVideo');
const resumeBtn = $('.resumeBtn');
const pauseBtn = $('.pauseBtn');
const fullscreenBtn = $('.fullscreenBtn');

// .get(0) is only neccessary if you are using jquery, otherwise with normal document.querySelector it wont be neccessary
video.on('click', () => {
    if (video.get(0).paused) {
        video.get(0).play()
    } else {
        video.get(0).pause()
    }
});

// play the video
resumeBtn.on('click', () => video.get(0).play());

// pause the video
pauseBtn.on('click', () => video.get(0).pause());

// enter fullscreen (via Fullscreen API: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
fullscreenBtn.on('click', () => {
    video.get(0).requestFullscreen();
});