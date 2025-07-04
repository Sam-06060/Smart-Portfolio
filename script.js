function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    setTimeout(() => {
      menu.style.display = "none";
    }, 300);
  } else {
    menu.style.display = "flex";
    setTimeout(() => {
      menu.classList.add("show");
    }, 10);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});
