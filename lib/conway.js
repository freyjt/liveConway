"use strict";

// Magic string declarations
var conwaysMagicStrings = {
  gameName: "conways_game"
};

function setupConwayGameBoards() {
  var elements = document.getElementsByClassName("conways_game");
  var len = elements.length;
  for(var index = 0; index < len; index++) {
    var element = elements[index];
    alert("does this jive?" + element);
  }
}

window.onload = setupConwayGameBoards()
