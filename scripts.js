// scripts.js

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
});

// JavaScript for Mobile Menu
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');

    // Toggle the menu
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });
});

// Typewriter effect
const typewriter = document.getElementById('typewriter-text');
const strings = [
    "I LOVE TO CODE",
    "WHAT'S YOUR SUPERPOWER !"
];
let index = 0;

function type() {
    let text = strings[index];
    let i = 0;
    typewriter.innerHTML = "";
    const interval = setInterval(() => {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                index = (index + 1) % strings.length;
                type();
            }, 2000);
        }
    }, 100);
}

type();

// Modal functionality
const emailModal = document.getElementById('email-modal');
const callModal = document.getElementById('call-modal');
const emailIcon = document.getElementById('email-icon');
const callIcon = document.getElementById('call-icon');
const closeEmailModal = document.getElementById('close-email-modal');
const closeCallModal = document.getElementById('close-call-modal');

emailIcon.onclick = () => emailModal.style.display = 'block';
callIcon.onclick = () => callModal.style.display = 'block';

closeEmailModal.onclick = () => emailModal.style.display = 'none';
closeCallModal.onclick = () => callModal.style.display = 'none';

window.onclick = (event) => {
    if (event.target === emailModal) {
        emailModal.style.display = 'none';
    }
    if (event.target === callModal) {
        callModal.style.display = 'none';
    }
};
