let annoyingAdPanel = document.getElementById('panels');
let progressBar = document.getElementsByClassName('html5-main-video')

function createTest(){
    alert("Extension has loaded successfully");
}

setTimeout(createTest, 5000);
setInterval(removeAdPanelTest, 1);
setInterval(recieveAdActive, 1);

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