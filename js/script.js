/* Author: MRL

*/

$(document).ready(function () {

  // when you click on a thumbnail
  // it sets the src of the big image
  // to be the same as the image
  // you clicked on
/*  $(".smallPic").click(function(){
    $("#mattBigPic1").attr('src',
        $(this).attr('src'));
  });

  // the counter variable that keeps
  // track of which image you are showing
  var counter = 1;

  // when you click the big image
  // switch the pics
  $("#mattBigPic1").click(function () {
    // go forward one in the counter
    counter = counter + 1;
    // if we are above 2 (the last
    // image) loop round to 1 (the
    // first image)
    if (counter > 2) {
      counter = 1;
    }
    // virtually click on the current
    // image to load it into the big image
    $("#mattPic" + counter).click();
  });

  // set interval makes it move
  // forward every 2 seconds
  setInterval(function () {
    // virtual click the forward
    // button
    $("#mattBigPic1").click();
  }, 3000);*/

  document.getElementById('submitbutton').onclick = clickSubmit;

});

function clickSubmit() {
  if (document.getElementById('passconf').textContent != document.getElementById('password').textContent) {
    alert('Passwords must match');
  }
  alert('Not Implemented Yet');
}





