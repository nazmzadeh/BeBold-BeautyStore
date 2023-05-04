let dropdown=document.querySelector(".dropdown");
let dropdownList=document.querySelector(".dropdown_list");
let dropdownOptions=document.querySelectorAll("dropdown_option");
let hamburger =document.querySelector(".hamburger_icon");
let mainNav=document.querySelectorAll(".main_nav");
let rightOptions=document.querySelector(".right_options");
let responsive=document.querySelector(".responsive");
let body =document.querySelector("body");

hamburger.onclick=()=>responsive.classList.toggle("responsive_on"); 


// window.addEventListener("resize",function () {
    
// })

function Dropdown(){
    if (window.matchMedia("(max-width:920px)").matches) {
        // dropdown.onclick=()=>dropdownOptions.forEach(item => {
        //     item.style.display="block";
        // });
      dropdown.onclick=()=>{
        dropdownList.classList.toggle("clicked");
        dropdownList.style.visibility="visible";
        dropdownList.style.opacity=1;
        dropdownOptions.forEach(el => {
            el.classList+="clicked_options";
            el.style.visibility="visible";
            el.style.opacity=1;
        });
      }
    //   body.style.backgroundColor="red";
        
    }else{
      dropdown.onclick=()=>dropdownList.classList.remove("clicked");
      
    //   body.style.backgroundColor="white";

    }
}
window.onresize=Dropdown;
window.onload=Dropdown;