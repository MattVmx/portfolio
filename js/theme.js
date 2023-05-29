
const darkTheme = () =>{
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
  document.querySelector("#dl-icon2").setAttribute("class", "bi bi-sun-fill");
  document.querySelector("#dl-icon3").setAttribute("class", "bi bi-sun-fill");
}

const lightTheme = () =>{
  document.querySelector("body").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  document.querySelector("#dl-icon2").setAttribute("class", "bi bi-moon-fill");
  document.querySelector("#dl-icon3").setAttribute("class", "bi bi-moon-fill");
}

const changeTheme = () =>{
  document.querySelector("body").getAttribute("data-bs-theme") === "light"?
  darkTheme() : lightTheme();
}
