"use strict";
// Script For Navbar Starts Here
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
// Script For Navbar Ends Here

// Script To Revel Coupon Code On Click Starts Here
// document.querySelectorAll('.button-overlay').forEach(item => {
//   item.addEventListener('click', event => {
//     var allBtn = document.querySelectorAll(".tohide");

//     for (let i = 0; i <= allBtn.length; i++) {
//       document.querySelectorAll(".button-overlay")[i].style.display = "none";
//       document.querySelectorAll(".button-hide")[i].style.display = "none";
//       document.querySelectorAll(".revealed")[i].style.display = "initial";
//     };
//   });
// });
// Script To Revel Coupon Code On Click Ends Here

function myfun1() {
  document.getElementById("button1_hide").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button1_revealed").style.display = "initial";
};

function myfun2() {
  document.getElementById("button2_hide").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button2_revealed").style.display = "initial";
}