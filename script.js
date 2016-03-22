// Your JS goes here


new Audio('busy.mp3').play();

var counter = 0;
var i = setInterval(function(){

      if (counter>0) {
        clearBoard();
      }

      drawBoard();       

       counter++;
       if(counter === 100) {
           clearInterval(i);
       }
 }, 750);


function drawBoard() {

var page = document.getElementsByTagName('body')[0];
  for (var i = 0; i <= 62; i++) {
  var div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%';
    div.style.float="left";
    div.setAttribute("id", i);
    div.style.backgroundColor= '#'+((1<<24)*(Math.random()+1)|0).toString(16).substr(1);
    page.appendChild(div);
  }
}

function clearBoard() {
  var page = document.getElementsByTagName('body')[0];
    while (page.firstChild) {
        page.removeChild(page.firstChild);
      }
}