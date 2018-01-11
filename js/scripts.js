$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age < 18) {
    $('#minors').show();
  } else if (age === 18) {
    alert("Congratulations!");
    $('#adults').show();
  } else {
    $('#adults').show();
  }
});
