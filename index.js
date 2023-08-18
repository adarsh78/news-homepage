let icon = document.querySelector(".icon-menu");
let overItem = document.querySelector(".mobileMenu");
let closeMenu = document.querySelector(".icon-menu-close");

overItem.classList.remove("mobileMenu");

icon.addEventListener("click", () => {
  overItem.classList.add("mobileMenu");
  document.body.style.backgroundColor = "hsl(233, 30%, 79%)";
});

closeMenu.addEventListener("click", () => {
  overItem.classList.remove("mobileMenu");
  document.body.style.backgroundColor = "";
});
