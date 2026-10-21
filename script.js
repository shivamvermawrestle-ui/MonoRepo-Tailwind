













document.querySelectorAll('.faq-card').forEach((card) => {
  card.querySelector('.faq-header').addEventListener('click', () => {
    const collapse = card.querySelector('.faq-collapse');
    const icon = card.querySelector('i');

    // Toggle grid height between 0fr and 1fr
    collapse.classList.toggle('grid-rows-[0fr]');
    collapse.classList.toggle('grid-rows-[1fr]');

    // Rotate arrow icon
    icon.classList.toggle('rotate-180');
  });
});


const menuBtn = document.getElementById("menubtn");
const menuIcon = document.getElementById("menuicon");
const mobileMenu = document.getElementById("mobilemenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("invisible");
    mobileMenu.classList.toggle("-translate-y-5");

    // Change icon
    if (menuIcon.classList.contains("fa-bars")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});


