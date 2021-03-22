$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='flex';
      $(id).style.transition='0,5s ease';
  }
  var hide = function(id) {
      $(id).style.display ='hidden';
  }