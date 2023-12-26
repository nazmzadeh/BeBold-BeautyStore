let dropdown = document.querySelector(".dropdown");
let dropdownList = document.querySelector(".dropdown_list");
let hamburger = document.querySelector(".hamburger_icon");
let responsive = document.querySelector(".responsive");
let header = document.querySelector("header");
const toggleClass = "is-sticky";


hamburger.onclick = () => {
    responsive.classList.toggle("responsive_on");
    hamburger.classList.toggle('active');
};
dropdown.onclick = () => {
    dropdownList.classList.toggle("show");
};

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 180) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});

$(document).ready(function () {
    $('.slick_carousel').slick({
        arrows:false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    });
});

