// ========================================
// NAVBAR
// ========================================

const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ========================================
// ANIMACJE ELEMENTÓW
// ========================================

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


// ========================================
// ZAMYKANIE MENU NA TELEFONIE
// ========================================

const navLinks =
    document.querySelectorAll(".navbar .nav-link");

const navbarContent =
    document.querySelector("#navbarContent");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const collapse =
            bootstrap.Collapse.getInstance(navbarContent);

        if (collapse) {
            collapse.hide();
        }

    });

});


// ========================================
// AKTYWNY LINK W NAVBARZE
// ========================================

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});
