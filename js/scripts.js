$(document).ready(function(){

  var add = function(q1Input, q2Input, q3Input) {
    return q1Input + q2Input + q3Input;
  }

  function checkAge() {
    var age = parseInt(prompt("How old are you?"));

    if (age > 18) {
      $('#adults').show();
      $("body").addClass("merica");
    } else if(isNaN(age)){
       if (confirm("Please enter in a number")) checkAge();
    } else if (age === 18) {
      $('#adults').show();
      $("body").addClass("merica");
      alert("Congratulations!");
    } else {
      $('#minors').show();
    }
  };
  checkAge();

  $('#formOne').submit(function(event) {
    alert("The police are on their way. Stay where you are.");
    $('#form').hide();
    $('#adults img').show();

  event.preventDefault();
  });

  $('#test').submit(function(event) {
    var q1Input = parseInt($("#q1").val());
    var q2Input = parseInt($("#q2").val());
    var q3Input = parseInt($("#q3").val());
    var result = add(q1Input, q2Input, q3Input);
    $('#party').hide();
    if (result <= 4) {
      $('#rhino').show();
    } else if (result <=6) {
      $('#death').show();
    } else if (result <=8) {
      $('#canada').show();
    } else if (result === 9) {
      $('#police').show();
      alert("The police are on their way. Stay where you are.");
    }
  event.preventDefault();


  });
});
