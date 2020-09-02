console.log('js');
  $('#loginSection').hide();

$(document).ready(function(){
  $('#login').click(function(){
    $('#loginSection').show();
    $('nav').hide();
  });
  $('#username').click(function(){
    // alert($(this).val());
    document.getElementById('username').value="";
  });
});
