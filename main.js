// Get the password input and the eye button from the DOM
const passwordEl = document.getElementById("password-el");
const eyeBtn = document.getElementById("eye-btn");

// Event listener to show/hide the text in the password input field
eyeBtn.addEventListener("click", function () {
  if (passwordEl.getAttribute("type") === "password") {
    passwordEl.setAttribute("type", "text");
    eyeBtn.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordEl.setAttribute("type", "password");
    eyeBtn.classList.replace("fa-eye", "fa-eye-slash");
  }
  passwordEl.focus();
});

// Define the primary colors for themes
const PRIMARY_COLORS = [
  "cornflowerblue",
  "indianred",
  "darkkhaki",
  "blueviolet",
  "darkslategray",
];

// Get the root element and theme-related elements from the DOM
const root = document.querySelector(":root");
const themeBtn = document.getElementById("theme-btn");
const themeList = document.getElementById("theme-list");

// Initalize variables for the current theme and the theme stored
// in local storage
let currentTheme = 0;
let themeFromLocalStorage = JSON.parse(localStorage.getItem("theme"));

// Event listener to toggle the display of the theme list when the
// theme button is clicked
themeBtn.addEventListener("click", function () {
  themeList.classList.toggle("show");
});

// Fumction to apply the selected theme
function applyTheme(themeIndex) {
  root.style.setProperty("--clr-primary", PRIMARY_COLORS[themeIndex]);
}

// Event listener for theme selection
function handleThemeSelection(themeIndex) {
  document.querySelectorAll(".theme-item").forEach((item) => {
    item.classList.remove("active");
  });

  const selectedThemeItem = document.querySelector(
    `.theme-item[data-theme="${themeIndex}"]`
  );
  if (selectedThemeItem) {
    selectedThemeItem.classList.add("active");
    localStorage.setItem("theme", themeIndex);
    applyTheme(themeIndex);
  }
}

// Function to render themes list
function renderThemes() {
  PRIMARY_COLORS.forEach((color, index) => {
    const liEl = document.createElement("li");
    liEl.classList.add("theme-item");
    liEl.style.setProperty("--theme", color);
    liEl.dataset.theme = index;

    // Event listener to change the theme when a theme in the list is clicked
    liEl.addEventListener("click", function () {
      handleThemeSelection(index);
    });

    themeList.appendChild(liEl);
  });
}

// Initialization
function initalize() {
  const themeFromLocalStorage = JSON.parse(localStorage.getItem("theme"));
  if (
    themeFromLocalStorage != null &&
    themeFromLocalStorage >= 0 &&
    themeFromLocalStorage < PRIMARY_COLORS.length
  ) {
    currentTheme = themeFromLocalStorage;
  }
  applyTheme(currentTheme);
  renderThemes();
  handleThemeSelection(currentTheme);
}

initalize();
