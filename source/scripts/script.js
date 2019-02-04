//console.log(window.pageYOffset);

var mentionsList = document.querySelector('.mentions__list');
var avatar = document.querySelectorAll('.mention__author-avatar');

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 370) {
    mentionsList.classList.add("mentions__list--mini");
    for (var i=0; i < avatar.length; i++) {
      avatar[i].style.top = scrolled-370 + "px";
    }
    
  } else {
    mentionsList.classList.remove("mentions__list--mini");
  }
}