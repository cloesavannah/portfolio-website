//Dark mode function
let darkModeButton = document.getElementById("dark-mode-button");

function darkMode () {
  let body = document.body;
  let links = document.getElementsByTagName("a");
  let darkButton = document.getElementById("dark-mode-button");
  body.classList.toggle("dark-mode");
  links.classList.toggle("dark-mode");
  darkButton.classList.toggle("dark-mode");
}

darkModeButton.addEventListener("click", darkMode);

// list.classList.toggle("dark-mode-theme-links");
// darkModeButton.classList.toggle("dark-mode-activated-button")

// function darkModeList () {
//   let list = document.getElementsByTagName("a");
//   for (let i=0; i<list.length; i++) {
//     list[i].classList.toggle("dark-mode-theme-links")
//   }
// }


// function darkModeOnButton () {
//   darkModeButton.classList.add("dark-mode-activated-button");
// }


// darkModeButton.addEventListener("click", darkModeOnButton);