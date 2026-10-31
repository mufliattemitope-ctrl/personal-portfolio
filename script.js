let menuToggle = document.querySelector(".menu-toggle");
let navBar = document.querySelector(".nav-bar");

menuToggle.addEventListener("click", function () {
    navBar.classList.toggle("active");

    let isOpen = navBar.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});

let navLinks = navBar.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navBar.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
    });
});