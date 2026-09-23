const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

const savedTheme = localStorage.getItem("site-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeLabel.textContent = "DARK";
}

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");

  themeLabel.textContent = isLight ? "DARK" : "LIGHT";
  localStorage.setItem("site-theme", isLight ? "light" : "dark");
});
