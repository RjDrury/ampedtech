 var navbar = document.getElementById("becomeSticky");
 var sticky = navbar.offsetTop + 200;
 var jump = document.getElementById("toAddPadding");
 console.log(sticky);

 function myFunction() {
     console.log(sticky);
     if (window.pageYOffset >= sticky) {
         navbar.classList.add("sticky-top");
         jump.classList.add("stoptheJump");
     } else {
         navbar.classList.remove("sticky-top");
         jump.classList.remove("stoptheJump");
     }
 }
 window.onscroll = function () {
     myFunction()
 };
