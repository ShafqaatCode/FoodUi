function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id)
    let range = end - start;
    let increment = range / (duration / 20);
    let current = start;

    let timer = setInterval(() => {
        current += increment;
        obj.textContent = Math.floor(current);
        if (current >= end) {
            obj.textContent = end;
            clearInterval(timer);
        }
    }, 20)
}

window.onload = function () {
    animateCounter("count1", 0, 1287, 2000);
    animateCounter("count2", 0, 1287, 2000);
    animateCounter("count3", 0, 1287, 2000);
    animateCounter("count4", 0, 1287, 2000);
    animateCounter("count5", 0, 1287, 2000);
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,          // Infinite loop
        autoplay: {
            delay: 4000,     // Slower slide change (4s)
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        speed: 1200,         // Slow down transition speed
    });
});
