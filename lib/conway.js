// Magic string declarations
function conwaysMagicStrings() {
  let game_name = "conways_game"

}










function setupConwayGameBoards() {
  // iterate over the conway's game divs
  for(var element in document.getElementsByClassName(conwaysMagicStrings.game_name)) {
    alert("does this jive?");
  }
}

window.onload = setupConwayGameBoards()
