window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.classList.add("fadeOut");
});
const show = document.querySelector("#show");
const hideNightMode = document.querySelector(".hide-nightMode");
show.addEventListener("click", () => {
  hideNightMode.classList.toggle("active");
});
var typed = new Typed(".typed", {
  strings: [
    "Salom mening ismim Jahongir",
    "Men Front-end Dasturchiman",
    "JavaScript Dasturchiman",
    "Python Dasturchiman",
    "tanishganimdan hursandman",
  ],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true,
});
const darkMode = localStorage.getItem("darkMode");
const rightSideBar = document.querySelector(".right-Side-Bar");
const leftSideBar = document.querySelector(".left-Side-Bar");
const match = document.querySelector(".match");
const changeText = document.querySelector(".info");
const social = document.querySelector(".social");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const lightAndDark = document.querySelector(".lightAndDark");
var i = document.querySelector(".fa-bars");
function enableDarkMode() {
  rightSideBar.classList.add("dark");
  leftSideBar.classList.add("dark");
  match.classList.add("run");
  changeText.classList.add("change");
  social.classList.add("change");
  logo.classList.add("bglogo");
  menu.classList.add("changeListCl");
  show.classList.add("changeCog");
  i.classList.add("color");
  lightAndDark.classList.add("dark");
  localStorage.setItem("darkMode", "enable");
}

function disableDarkMode() {
  rightSideBar.classList.remove("dark");
  leftSideBar.classList.remove("dark");
  match.classList.remove("run");
  changeText.classList.remove("change");
  social.classList.remove("change");
  logo.classList.remove("bglogo");
  menu.classList.remove("changeListCl");
  show.classList.remove("changeCog");
  lightAndDark.classList.remove("dark");
  i.classList.remove("color");
  localStorage.setItem("darkMode", "null");
}
match.addEventListener("click", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enable") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
if (darkMode === "enable") {
  enableDarkMode();
}

const showHideLeftBar = document.querySelector(".show-hide-left-bar");
var i = document.querySelector(".fa-bars");
showHideLeftBar.addEventListener("click", function () {
  const leftSideBar = document.querySelector(".left-Side-Bar");
  leftSideBar.classList.toggle("active");
  i.classList.toggle("fa-bars");
  i.classList.toggle("fa-times");
});
