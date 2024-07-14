document.addEventListener("DOMContentLoaded", function () {
  const iconMenu = document.querySelector(".bx-menu");
  const navMenu = document.querySelector("header nav ul");

  iconMenu.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});
