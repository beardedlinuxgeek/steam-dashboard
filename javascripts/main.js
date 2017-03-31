console.log('This is the main JS file.');

$(function(){

  $("#ls_btn").click(function(){
    localStorage.setItem('ls', $("#ls_input").val());
    ls();
  });

  $("#cookie_btn").click(function(){
    $.cookie('cookie', $("#cookie_input").val(), {expires:31536 });
    cook();
  });

  ls();
  cook();

});

function ls(){
  $("#ls_output").text(localStorage.getItem('ls'));
}
function cook(){
  $("#cookie_output").text($.cookie('cookie'));
}
