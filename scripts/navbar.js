//Responsive – when at mobile size - click nav button to toggle the menu options
$('#toggleIcon').on('click', function() {
       if (!$(this).data('clicked')) {
           //do your stuff here if the button is not clicked
           document.getElementById('mobile_navWrapper').style.cssText = 'display: block; background-color: #ffffff;';
           $(this).data('clicked', true);
       } else {
           //do your stuff here if the button is clicked

      		document.getElementById('mobile_navWrapper').style.cssText = 'display: none;';
           $(this).data('clicked', false);
       }
   });


//Media Query - to make the desktop navbar show again
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('mobile_navWrapper').style.cssText = 'display: none';
  } else {
  document.getElementById('mobile_navWrapper').style.cssText = 'display: none;';
  }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



//Active Class Anchor Links - This adds a class, apply css styling when class applied
var $navyyLi = $(".navBtn");

$navyyLi.click(function() {
  $navyyLi.removeClass('highlight')
  $(this).addClass('highlight');
});


//Code Examples_____________________
// //Media Query - Example
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//    document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

