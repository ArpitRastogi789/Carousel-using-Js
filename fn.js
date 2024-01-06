let s = 0;
let slides = document.querySelectorAll(".c-i");

function showSlide(n) {
    s = n;
    if (s < 0) {
        s = slides.length - 1;
    }
    if (s > slides.length - 1) {
        s = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ac");
    }
    slides[s].classList.add("ac");
    let offset = -s * 600;
    document.querySelector(".caro-in").style.transform =
        "translateX(" + offset + "px)";
}
function PS() {
    showSlide(s - 1);
}

function NS() {
    showSlide(s + 1);
}

showSlide(s);
setInterval(() => {
    NS()
}, 5000);