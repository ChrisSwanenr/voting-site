$(document).ready(function(){
  function checkAge() {
    var age = parseInt(prompt("How old are you?"));

    if (age < 18) {
      $('#minors').show();
    } else if(isNaN(age)){
       if (confirm("Please enter in a number")) checkAge();
    } else if (age === 18) {
      alert("Congratulations!");
      $('#adults').show();
    } else {
      $('#adults').show();
    }
  };
  checkAge();
  $('#formOne').submit(function(event) {
    $('#form').hide();
    alert("The police are on their way. Stay where you are.");
  event.preventDefault();
  });
});
