/* Author: MRL

*/

$(document).ready(function(){

/*  $('#signup form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      website: {
        url: true
      },
      password: {
        minlength: 6,
        required: true
      },
      passconf: {
        equalTo: "#password"
      }
    },
    success: function(label) {
      label.text('OK!').addClass('valid');
    }
  });*/

  function clickSubmit() {
    if (document.getElementById('passconf').textContent != document.getElementById('password').textContent) {
      alert('Passwords must match');
    }
    alert('Not Implemented Yet');
  }
  document.getElementById('submitbutton').onclick = clickSubmit;

});





