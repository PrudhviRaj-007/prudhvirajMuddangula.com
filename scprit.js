const btn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

btn?.addEventListener("click", () => {
  const open = drawer.classList.toggle("open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
  drawer.setAttribute("aria-hidden", open ? "false" : "true");
});

// Close drawer when clicking a link
drawer?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    drawer.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
  });
});
