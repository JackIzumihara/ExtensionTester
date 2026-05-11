let annoyingAdPanel = document.getElementById('panels');
let progressBar = document.getElementsByClassName('ytp-scrubber-button ytp-swatch-background-color');
let toggleVar = 1;

function createTest(){
    alert("Extension has loaded successfully");
}
let createTestToggle = setTimeout(createTest, 5000);
let removeAdPanelToggle = setInterval(removeAdPanelTest, 10000);
let adActiveTest = setInterval(recieveAdActive, 10000);

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

function removeAdPanelTest(){
    annoyingAdPanel.style.display = "none";
    console.log("panel maybe removed");
    alert("did this work?");
}

function recieveAdActive(){
        if(document.progressBar.style.backgroundColor = "#fc0"){
            alert("AD IS PLAYING");
        }else{
            console.log("no ad playing");
        }
}