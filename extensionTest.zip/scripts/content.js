let annoyingAdPanel = document.getElementById('panels');
let progressBar = document.getElementsByClassName('html5-main-video');
let toggleVar = 1;

function createTest(){
    alert("Extension has loaded successfully");
}
let createTestToggle = 0;
let removeAdPanelToggle = 0;
let adActiveTest = 0;

function toggleEverything(){
    if(toggleVar == 1){
        clearInterval(adActiveTest);
        clearInterval(removeAdPanelToggle);
        clearInterval(createTestToggle);
        toggleVar = 1;
    }else{
        toggleVar = 0;
        createTestToggle = setTimeout(createTest, 5000);
        removeAdPanelToggle = setInterval(removeAdPanelTest, 10000);
        adActiveTest = setInterval(recieveAdActive, 1);
    }
}

function removeAdPanelTest(){
    annoyingAdPanel.style.display = "none";
    console.log("panel maybe removed");
    alert("did this work?");
}

function recieveAdActive(){
        if(ytp-play-progress.css("background-color") == "rgb(255, 204, 0)"){
            alert("AD IS PLAYING");
        }else{
            console.log("no ad playing");
        }
}