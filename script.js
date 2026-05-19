// MOBILE MENU

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        navMenu.classList.remove('active');

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// DOWNLOAD CV

document.getElementById('downloadCVBtn')
.addEventListener('click', (e) => {

    e.preventDefault();

    alert("Masfiq's CV is downloading...");

});


// SCROLL ANIMATION

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold:0.1
});

document.querySelectorAll(
'.service-card, .project-card, .skill-category, .gallery-card'
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s";

    observer.observe(el);

});


// PROJECT FILTER

const tabBtns = document.querySelectorAll(".tab-btn");

const projectCards = document.querySelectorAll(".project-card");

const galleries = document.querySelectorAll(".gallery-section");

tabBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelector(".tab-btn.active")
        .classList.remove("active");

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        // hide all cards
        projectCards.forEach(card=>{
            card.style.display = "none";
        });

        // hide all galleries
        galleries.forEach(gallery=>{
            gallery.style.display = "none";
        });

        // show frontend projects
        if(filter === "all" || filter === "frontend"){

            projectCards.forEach(card=>{

                if(card.classList.contains("frontend")){
                    card.style.display = "block";
                }

            });

        }

        // show app ui gallery
        if(filter === "app-ui"){

            document.querySelector(".app-ui")
            .style.display = "block";

        }

        // show design gallery
        if(filter === "design-ui"){

            document.querySelector(".design-ui")
            .style.display = "block";

        }

    });

});