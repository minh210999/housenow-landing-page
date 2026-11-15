const root = document.documentElement;
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (saved === "dark" || (!saved && prefersDark)) root.classList.add("dark");

// call this from a button
window.toggleTheme = () => {
  const isDark = root.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};
