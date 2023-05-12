let dropdown = document.querySelector(".dropdown");
let dropdownList = document.querySelector(".dropdown_list");
let hamburger = document.querySelector(".hamburger_icon");
let responsive = document.querySelector(".responsive");
let header=document.querySelector("header");
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