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
const themeList = document.getElementById("theme-list");
let currentTheme = 0;
let themeFromLocalStorage = JSON.parse(localStorage.getItem("theme"));

const PRIMARY_COLORS = [
  "cornflowerblue",
  "indianred",
  "darkkhaki",
  "blueviolet",
  "darkslategray",
];

renderThemes();

if (themeFromLocalStorage) {
  currentTheme = themeFromLocalStorage;
  applyTheme(currentTheme);
} else {
  localStorage.setItem("theme", currentTheme);
  applyTheme(currentTheme);
}
document.querySelectorAll(".theme-item").forEach((item) => {
  if (item.dataset.theme == themeFromLocalStorage) {
    item.classList.add("active");
  }
});

function renderThemes() {
  PRIMARY_COLORS.forEach((color, index) => {
    const liEl = document.createElement("li");
    liEl.classList.add("theme-item");
    liEl.style.setProperty("--theme", color);
    liEl.dataset.theme = index;

    liEl.addEventListener("click", function () {
      document.querySelectorAll(".theme-item").forEach((li) => {
        li.classList.remove("active");
      });
      liEl.classList.add("active");

      localStorage.setItem("theme", index);
      applyTheme(index);
    });

    themeList.appendChild(liEl);
  });
}

function applyTheme(themeIndex) {
  root.style.setProperty("--clr-primary", PRIMARY_COLORS[themeIndex]);
}

themeBtn.addEventListener("click", function () {
  themeList.classList.toggle("show");
});
