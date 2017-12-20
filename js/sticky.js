 var navbar = document.getElementById("becomeSticky");
 var sticky = navbar.offsetTop + 200;
 console.log(sticky);

 function myFunction() {
     console.log(sticky);
     if (window.pageYOffset >= sticky) {
         navbar.classList.add("sticky-top");
     } else {
         navbar.classList.remove("sticky-top");
     }
 }
 window.onscroll = function () {
     myFunction()
 };
