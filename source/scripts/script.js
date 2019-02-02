//console.log(window.pageYOffset);

var mentionsList = document.querySelector('.mentions__list');

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 370) {
    mentionsList.classList.add("mentions__list--mini");
  } else {
    mentionsList.classList.remove("mentions__list--mini");
  }
}