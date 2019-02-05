//console.log(window.pageYOffset);

var mentionsList = document.querySelectorAll('.mentions__list');

var avatarsArray = [];
for (var i=0; i < mentionsList.length; i++) {
  avatarsArray[i] = mentionsList[i].querySelectorAll('.mention__author-avatar');
};

//var avatar = document.querySelectorAll('.mention__author-avatar');
var interval = 400; // интервал между колонками с авторами цитат

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrolled); //611
  
  for (var j=0; j < mentionsList.length; j++) { 
    
    if (scrolled > 370 + j*interval) {
      mentionsList[j].classList.add("mentions__list--mini");
      for (var i=0; i < avatarsArray[j].length; i++) {
        var avatar = avatarsArray[j];
        avatar[i].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*150) + "px";
        
        if (j == 0) {
          avatar[0].style.left = scrolled/1150*(scrolled-370) + "px";
          avatar[1].style.right = scrolled/5100*(scrolled-370) + "px";
          avatar[2].style.right = scrolled/760*(scrolled-370) + "px";
          avatar[2].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*168) + "px";
          avatar[3].style.right = scrolled/475*(scrolled-370) + "px";
          avatar[4].style.right = scrolled/345*(scrolled-370) + "px";
          avatar[5].style.right = scrolled/253*(scrolled-370) + "px";
        };
      }
      
    }
    else {
      mentionsList[j].classList.remove("mentions__list--mini");
    }  
    
    var whitePoint = document.querySelectorAll('.data__item');
    
    if (scrolled > 611) {
      avatar = avatarsArray[0];
      for (var i=0; i < avatar.length; i++) {
        avatar[i].style.visibility='hidden';
      }; 
      
      for (var i=0; i < avatar.length; i++) {
        whitePoint[i].classList.add('data__item--white');  
      };
      
    } else {
      for (var i=0; i < avatar.length; i++) {
        avatar[i].style.visibility='visible';
      };
      
      for (var i=0; i < avatar.length; i++) {
        whitePoint[i].classList.remove('data__item--white');  
      };
    }
  }
}