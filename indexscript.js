window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    setTimeout(function () {
        loader.classList.add('fadeOut');
        document.body.classList.add('loaded');
    }, 1000); // Adjust the delay as needed
});
const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");
bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })
    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});
close.addEventListener("click", () => {
    menu.classList.remove("active")
});