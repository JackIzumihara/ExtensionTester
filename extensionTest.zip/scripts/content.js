let annoyingAdPanel = document.getElementById('panels');
let progressBar = document.getElementsByClassName('ytp-scrubber-button ytp-swatch-background-color');
let toggleVar = 1;

function createTest(){
    alert("Extension has loaded successfully");
}
let createTestToggle = setTimeout(createTest, Infinity);
let removeAdPanelToggle = setInterval(removeAdPanelTest, Infinity);
let adActiveTest = setInterval(recieveAdActive, 1);

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

function toggleEverything(){
    if(toggleVar == 1){
        toggleVar = 0;
        createTestToggle = setTimeout(createTest, 5000);
        removeAdPanelToggle = setInterval(removeAdPanelTest, 10000);
        adActiveTest = setInterval(recieveAdActive, 1);
    }else{
        clearInterval(adActiveTest);
        clearInterval(removeAdPanelToggle);
        clearInterval(createTestToggle);
        toggleVar = 1;
    }
}

function recieveAdActive(){
        if (document.querySelector("div.ad-showing")) { //this was also found on stackoverflow, link will also be linked in slideshow (and here too: https://stackoverflow.com/questions/63749340/on-a-youtube-video-page-how-do-i-check-if-the-video-is-currently-playing-an-ad)
           mute();
        }
        else {
            unmute();
        }
}