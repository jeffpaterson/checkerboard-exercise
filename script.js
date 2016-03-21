// Your JS goes here
var page = document.getElementsByTagName('body')[0];

for (var i = 0; i <= 62; i++) {
  var div = document.createElement('div');

  div.style.width = '11.1%';
  div.style.paddingBottom = '11.1%';
  div.style.float = 'left';
  
  if (i % 2 === 0) {
    div.style.backgroundColor='#FF0000';
  } 

  else {
    div.style.backgroundColor ='#000000';
  }

  page.appendChild(div);
}

// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`