const headerNav = document.getElementById("header-nav");
const buttonMenu = document.getElementById("buttonMenu");
const linkButtons = document.getElementsByClassName("link-button");
const html = document.getElementsByTagName("html");
const scrollButton = document.getElementById("scrollbutton");
const projectSection = document.getElementById("projects");

const spanDate = document.getElementById("date");

buttonMenu.addEventListener("click", () => {
  buttonMenu.classList.toggle("active");
  headerNav.classList.toggle("active");
  const isMenuActive = headerNav.classList.contains("active");
  html[0].style.overflowY = isMenuActive ? "hidden" : "auto";
});

Array.from(linkButtons).forEach((button) => {
  button.addEventListener("click", (e) => {
    buttonMenu.classList.remove("active");
    headerNav.classList.remove("active");
    html[0].style.overflowY = "auto";
  });
});

spanDate.innerText = new Date().getFullYear();

scrollButton.addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});
