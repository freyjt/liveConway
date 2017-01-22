"use strict";

// Magic string declarations
var conwaysMagicStrings = {
  gameName: "conways_game",
  stateButton: "stateButton",
  liveColor: "blue",
  deadColor: "black",
  background: "orange",
  iterationWait: 50
};


function handleConwayClick(clickEvent) {
  var myButton = clickEvent.target.getElementsByClassName(conwaysMagicStrings.stateButton);
  console.log(myButton); 
}

// This is responsible for managing the state of
//  the iteration cycle
function handleConwayButtonClick(clickEvent) {
  var state = clickEvent.target.innerHTML;
  if(state == "STOP") {
    clickEvent.target.innerHTML = "START";
  } else if(state == "START") {
    clickEvent.target.innerHTML = "STOP"; 
  } else {
    console.log("BUTTON STATE CHANGED UNEXPECTEDLY, STOPPING");
    clickEvent.source.innerHTML = "START";
  }
}

function setupConwayGameBoards() {
  var elements = document.getElementsByClassName("conways_game");
  var len = elements.length;
  for(var index = 0; index < len; index++) {
    var element = elements[index];
    var size = element.getAttribute("size").split(' ');
    element.style.position = "absolute"
    element.style.width = size[0] + "px";
    element.style.height = size[1] + "px";
    element.onClick = handleConwayClick;
    var newButton = document.createElement("button");
    newButton.innerHTML = "START"
    newButton.style.bottom = "0px";
    newButton.style.left = "0px";
    newButton.class = conwaysMagicStrings.stateButton;
    element.appendChild(newButton);
    newButton.addEventListener("click", handleConwayButtonClick);
  }
}

window.onload = setupConwayGameBoards()
