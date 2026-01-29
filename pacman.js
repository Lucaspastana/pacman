//board

let board;
const rowCount =21;
const columnCount = 19;
const titleSize = 32;
const boardWidth = columnCount*titleSize;
const boardHeight = rowCount*titleSize;

window.onload=function(){
  board = document.getElementbyId("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");//4
}



