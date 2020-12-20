window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

const toggleButton = document.querySelector(".toggle-menu");
const navBar = document.querySelector(".nav-bar");
const navLink = document.querySelectorAll(".nav-link");
toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("toggle");
});
navLink.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked a menu link !");
    navBar.classList.remove("toggle");
  });
});


const switchTab = (tab) => {
  var i;
  var x = document.getElementsByClassName("box");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tab).style.display = "block";
};
