//console.log(window.pageYOffset);

var mentionsList = document.querySelectorAll('.mentions__list');

var avatarsArray = [];
for (var i=0; i < mentionsList.length; i++) {
  avatarsArray[i] = mentionsList[i].querySelectorAll('.mention__author-avatar');
};

//var avatar = document.querySelectorAll('.mention__author-avatar');
var interval = 385; // интервал между колонками с авторами цитат

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  for (var j=0; j < mentionsList.length; j++) { 
    
    if (scrolled > 370 + j*interval) {
      mentionsList[j].classList.add("mentions__list--mini");
      for (var i=0; i < avatarsArray[j].length; i++) {
        var avatar = avatarsArray[j];
        avatar[i].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*150) + "px";
        
        if (j == 0) {
          avatar[0].style.left = scrolled/1150*(scrolled-370 - j*interval) + "px";
          avatar[1].style.right = scrolled/5100*(scrolled-370 - j*interval) + "px";
          avatar[2].style.right = scrolled/760*(scrolled-370 - j*interval) + "px";
          avatar[2].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*168) + "px";
          avatar[3].style.right = scrolled/475*(scrolled-370 - j*interval) + "px";
          avatar[4].style.right = scrolled/345*(scrolled-370 - j*interval) + "px";
          avatar[5].style.right = scrolled/253*(scrolled-370 - j*interval) + "px";
        };
        
        if (j == 1) {
          avatar[0].style.left = (scrolled-j*interval)/1200*(scrolled-370 - j*interval) + "px";
          avatar[0].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*168) + "px";
          avatar[1].style.left = (scrolled-j*interval)/3600*(scrolled-370 - j*interval) + "px";
          avatar[1].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*190) + "px";
          avatar[2].style.right = (scrolled-j*interval)/4050*(scrolled-370 - j*interval) + "px";
          avatar[3].style.right = (scrolled-j*interval)/1245*(scrolled-370 - j*interval) + "px";
          avatar[3].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*168) + "px";
          avatar[4].style.right = (scrolled-j*interval)/840*(scrolled-370 - j*interval) + "px";
          avatar[5].style.right = (scrolled-j*interval)/573*(scrolled-370 - j*interval) + "px";
          avatar[5].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*168) + "px";
        }
        
        if (j == 2) {
          avatar[0].style.left = (scrolled-j*interval)/1965*(scrolled-370 - j*interval) + "px";
          avatar[1].style.left = (scrolled-j*interval)/3490*(scrolled-370 - j*interval) + "px";
          avatar[2].style.left = (scrolled-j*interval)/19200*(scrolled-370 - j*interval) + "px";
          avatar[2].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*168) + "px";
          avatar[3].style.right = (scrolled-j*interval)/5900*(scrolled-370 - j*interval) + "px";
          avatar[4].style.right = (scrolled-j*interval)/2550*(scrolled-370 - j*interval) + "px";
          avatar[5].style.right = (scrolled-j*interval)/1595*(scrolled-370 - j*interval) + "px";
          avatar[5].style.top = scrolled-370 - j*interval + ((1-scrolled/(370 + j*interval))*168) + "px";
        }
      }
      
    }
    else {
      mentionsList[j].classList.remove("mentions__list--mini");
    }  
    
    var whitePoint = document.querySelectorAll('.data__item');
    
    if (scrolled > 1816) {
      avatar = avatarsArray[2];
      for (var i=0; i < avatar.length; i++) {
        avatar[i].style.visibility='hidden';
      }; 
      
      for (var i=avatar.length*2; i < avatar.length * 3; i++) {
        whitePoint[i].classList.add('data__item--white');  
      };
    }
    else {
      for (var i=0; i < avatar.length; i++) {
        avatar[i].style.visibility='visible';
      };
      
      for (var i=avatar.length*2; i < avatar.length * 3; i++) {
        whitePoint[i].classList.remove('data__item--white');  
      };
    }
    
    if (scrolled > 1146) { //996
      avatar = avatarsArray[1];
      for (var i=0; i < avatar.length; i++) {
        avatar[i].style.visibility='hidden';
      }; 
      
      for (var i=avatar.length; i < avatar.length * 2; i++) {
        whitePoint[i].classList.add('data__item--white');  
      };
    }
    else {
      for (var i=0; i < avatar.length; i++) {
        avatar[i].style.visibility='visible';
      };
      
      for (var i=avatar.length; i < avatar.length * 2; i++) {
        whitePoint[i].classList.remove('data__item--white');  
      };
    }
    
    if (scrolled > 611) {
      avatar = avatarsArray[0];
      for (var i=0; i < avatar.length; i++) {
        avatar[i].style.visibility='hidden';
      }; 
      
      for (var i=0; i < avatar.length; i++) {
        whitePoint[i].classList.add('data__item--white');  
      };
      
    }
    else {
      for (var i=0; i < avatar.length; i++) {
        avatar[i].style.visibility='visible';
      };
      
      for (var i=0; i < avatar.length; i++) {
        whitePoint[i].classList.remove('data__item--white');  
      };
    }
    
  }
}