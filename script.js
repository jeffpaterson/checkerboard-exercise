// Your JS goes here
var page = document.getElementsByTagName('body')[0];

for (var i = 0; i <= 62; i++) {
  var div = document.createElement('div');

  div.style.width = '11.1%';
  div.style.paddingBottom = '11.1%';
  div.style.float = 'left';
  
  if (i % 2 === 0) {
    div.style.backgroundColor= "rgba(0, 0, 255, " + (0.015 * i) + ")";
  } 

  else {
    div.style.backgroundColor = "rgba(255, 255, 0, " + (0.025 * i) + ")";
  }

  page.appendChild(div);
}


// random colors
//  if (i % 2 === 0) {
//     div.style.backgroundColor= '#'+((1<<24)*(Math.random()+1)|0).toString(16).substr(1);
//   } 

//   else {
//     div.style.backgroundColor = '#'+((1<<24)*(Math.random()+1)|0).toString(16).substr(1);
//   }


// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`