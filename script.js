// ================================
// MOBILE MENU TOGGLE
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

});

// ================================
// CLOSE MOBILE MENU AFTER CLICK
// ================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        const navLinks = document.querySelector(".nav-links");

        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
        }
    });
});

// ================================
// CONTACT FORM VALIDATION
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            const formMessage = document.getElementById("formMessage");

            // Email validation pattern
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Phone validation pattern
            const phonePattern =
                /^[0-9]{10}$/;

            if (name === "") {
                showMessage(
                    "Please enter your name.",
                    "red"
                );
                return;
            }

            if (!emailPattern.test(email)) {
                showMessage(
                    "Please enter a valid email address.",
                    "red"
                );
                return;
            }

            if (!phonePattern.test(phone)) {
                showMessage(
                    "Phone number must contain 10 digits.",
                    "red"
                );
                return;
            }

            if (message.length < 10) {
                showMessage(
                    "Message should contain at least 10 characters.",
                    "red"
                );
                return;
            }

            showMessage(
                "Message sent successfully! We will contact you soon.",
                "green"
            );

            contactForm.reset();

            function showMessage(text, color) {
                formMessage.textContent = text;
                formMessage.style.color = color;
            }

        });

    }

});

// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".service-card, .collection-card, .gallery-card, .testimonial-card"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });

};

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================================
// HEADER SHADOW ON SCROLL
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.08)";
    }

});

// ================================
// BUTTON HOVER EFFECT
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});

// ================================
// CURRENT YEAR IN FOOTER (OPTIONAL)
// ================================

const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}