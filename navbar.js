// for the dropdown menu nav bar
const bars = document.getElementById("menuBar");
const navLinks = document.querySelector('.nav-links');
const navButtons = document.querySelector('.nav-buttons');

bars.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    navButtons.classList.toggle("show");
})

const dropBtn = document.querySelector('.drop-btn');

dropBtn.addEventListener("click", (e)=> {
    if (window.innerWidth <= 900) {
       e.preventDefault();
       document.querySelector('.dropdown-content').classList.toggle("show");
    }
});