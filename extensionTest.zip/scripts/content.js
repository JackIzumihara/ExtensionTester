// really good video https://www.youtube.com/watch?v=mgFo3fxuUyA

let annoyingAdPanel = document.getElementById('panels');
let progressBar = document.getElementsByClassName('ytp-scrubber-button ytp-swatch-background-color');
let toggleVar = 1;

function createTest(){
    const site = window.location.hostname;
    alert("maybe worked: " + site);
}

let createTestToggle = setTimeout(createTest, 5000);
let adActiveTest = setInterval(recieveAdActive, 1);
let adSkipper = setInterval(skipAd, 1);

    var videoElement = document.querySelector("video"); //this code was found on https://www.matthewgatland.com/journal/2017-11-24-how-to-make-youtube-louder/, it will also be credited in the presentation
    var audioCtx = new AudioContext();
    var source = audioCtx.createMediaElementSource(videoElement);
    var gainNode = audioCtx.createGain();
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);

function mute(){
    gainNode.gain.value = 0;
}

function unmute(){
    gainNode.gain.value = 1;
}

function recieveAdActive(){
        if (document.querySelector("div.ad-showing")) { //this was also found on stackoverflow, link will also be linked in slideshow (and here too: https://stackoverflow.com/questions/63749340/on-a-youtube-video-page-how-do-i-check-if-the-video-is-currently-playing-an-ad)
            gainNode.gain.value = 0;
        }
        else {
            gainNode.gain.value = 1;
        }
}

function skipAd() { //also found this function on stackoverflow, might work but need to see (link: https://stackoverflow.com/questions/79716754/how-can-i-reliably-click-youtube-s-skip-ad-button-via-content-script-in-a-chro)
        const skipButtons = [
            '.ytp-ad-skip-button-modern',
            '.ytp-skip-ad-button',
            'button[aria-label^="Skip ad"]'
        ];

        for (const selector of skipButtons) {
            const button = document.querySelector(selector);
            if (button && button.offsetParent !== null) {
                button.click();
                return;
            }
        }

        // Seek through unskippable ads
        const video = document.querySelector('video');
        if (video && document.querySelector('.ad-showing, .ad-interrupting')) {
            video.currentTime = video.duration - 0.1;
        }
    }