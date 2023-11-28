let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");
let ulElement = document.getElementById("ulBar");

burgerElement.addEventListener("click", function () {
  burgerElement.classList.toggle("activeBurger");
  ulElement.classList.toggle("activeNew");
});
