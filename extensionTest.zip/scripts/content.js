let annoyingAdPanel = document.getElementById('panels');
let volume = document.getElementById('');

const buttontest = document.createElement('p');
buttontest.innerText = "click me click me click me click me click me ";
document.body.appendChild(buttontest);
buttontest.style.left = 10;
buttontest.style.top = 10;

function removeAdPanelTest(){
    annoyingAdPanel.style.display = "none";
    console.log("panel maybe removed");
}