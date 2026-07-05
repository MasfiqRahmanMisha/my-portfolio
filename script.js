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
?.addEventListener('click', (e) => {

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

galleries.forEach(gallery => {
    gallery.style.display = "none";
});

projectCards.forEach(card => {
    if (card.classList.contains("frontend")) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
});

tabBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelector(".tab-btn.active")
        .classList.remove("active");

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            card.style.display = "none";
        });

        galleries.forEach(gallery => {
            gallery.style.display = "none";
        });

        if (filter === "all" || filter === "frontend") {

            projectCards.forEach(card => {

                if (card.classList.contains("frontend")) {
                    card.style.display = "block";
                }

            });

        }

        if (filter === "app-ui") {

            document.querySelector(".gallery-section.app-ui")
            .style.display = "block";

        }

        if (filter === "design-ui") {

            document.querySelector(".gallery-section.design-ui")
            .style.display = "block";

        }

    });

});

// IMAGE VIEWER

const viewer =
document.getElementById("imageViewer");

const viewerImg =
document.getElementById("viewerImg");

const closeViewer =
document.getElementById("closeViewer");

document
.querySelectorAll(".view-image")
.forEach(img => {

    img.addEventListener("click", () => {

        viewer.classList.add("active");

        viewerImg.src = img.src;

    });

});

// CLOSE

closeViewer.addEventListener("click", () => {

    viewer.classList.remove("active");

});

// CLICK OUTSIDE

viewer.addEventListener("click", (e) => {

    if(e.target === viewer){

        viewer.classList.remove("active");

    }

});

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData
    });

    if(response.ok){

        successMessage.innerHTML =
        "Message sent successfully!";

        successMessage.style.color = "#10b981";
        successMessage.style.fontWeight = "600";
        successMessage.style.marginTop = "15px";
        successMessage.style.marginBottom = "10px";

        contactForm.reset();

    }else{

        successMessage.innerHTML =
        "Failed to send message.";

        successMessage.style.color = "red";

    }

});
