// toggle password when the eye button is clicked
const passwordEl = document.getElementById("password-el");
const eyeBtn = document.getElementById("eye-btn");

eyeBtn.addEventListener("click", function () {
  if (passwordEl.type === "password") {
    passwordEl.type = "text";
    eyeBtn.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordEl.type = "password";
    eyeBtn.classList.replace("fa-eye", "fa-eye-slash");
  }
  passwordEl.focus();
});

// change the UI theme
const themeBtn = document.getElementById("theme-btn");
const root = document.querySelector(":root");
let currentTheme = 0;
let themeFromLocalStorage = JSON.parse(localStorage.getItem("theme"));
const PRIMARY_COLORS = ["cornflowerblue", "indianred", "darkkhaki"];

if (themeFromLocalStorage) {
  currentTheme = themeFromLocalStorage;
  applyTheme(currentTheme);
} else {
  localStorage.setItem("theme", currentTheme);
  applyTheme(currentTheme);
}

function applyTheme(themeIndex) {
  root.style.setProperty("--clr-primary", PRIMARY_COLORS[themeIndex]);
}

themeBtn.addEventListener("click", function () {
  currentTheme =
    currentTheme + 1 === PRIMARY_COLORS.length ? 0 : currentTheme + 1;
  localStorage.setItem("theme", currentTheme);
  applyTheme(currentTheme);
});
