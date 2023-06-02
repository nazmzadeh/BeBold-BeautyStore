let table = document.querySelector("table");
let tbody = document.querySelector("tbody");
let empty=document.querySelector(".empty");
let cartItems = JSON.parse(localStorage.getItem("cart"));


for (let i = 0; i < cartItems.length; i++) {
  let addedProduct = ` <tr id="${cartItems[i].id}">
   <td data-cell="remove">
       <span class="remove">
           <svg class="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1"
               xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24">
               <path
                   d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z">
               </path>
           </svg>
       </span>
   </td>
   <td data-cell="image">
       <a href="#">
           <img src=${cartItems[i].image} alt="cart_product_img">
       </a>
   </td>
   <td data-cell="product">
       <a href="#">${cartItems[i].name}</a>
   </td>
   <td data-cell="Price">
       <span>$${cartItems[i].price}</span>
   </td>
   <td data-cell="quantity">
       <div class="count_changer_btns">
           <button class="decrease">-</button>
           <span>${cartItems[i].count}</span>
           <button class="increase">+</button>
       </div>
   </td>
   <td data-cell="subtotal">
       <span>$${parseInt(cartItems[i].price)*cartItems[i].count}</span>
   </td>
</tr>`;

  tbody.innerHTML += addedProduct;
}


let deleteIcons=document.querySelectorAll(".remove");

deleteIcons.forEach((item)=>{
    item.onclick=function () {
        item.closest("tr").remove();
        let cart= JSON.parse(localStorage.getItem("cart")) ;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id==item.parentElement.parentElement.id) {
                cart.splice(i,1);
                localStorage.setItem("cart",JSON.stringify(cart));
                cartCount();
            }
            
        }
    } 
    if (!item) {
        table.style.display="none";
        empty.style.display="block";
    }
})


let decreaseBtns=document.querySelectorAll(".decrease");

decreaseBtns.forEach((item)=>{
    
    item.onclick=function (e) {
        e.preventDefault();
        let cart=JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id==item.parentElement.parentElement.parentElement.id && cart[i].count>0) {
                cart[i].count--;
                localStorage.setItem("cart",JSON.stringify(cart));
                item.nextElementSibling.innerText=cart[i].count;
                item.parentElement.parentElement.nextElementSibling.firstElementChild.innerText="$"+cart[i].count*cart[i].price;
            }
        }
    }
});


let increaseBtns=document.querySelectorAll(".increase");

increaseBtns.forEach((item)=>{
    
    item.onclick=function (e) {
        e.preventDefault();
        let cart=JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id==item.parentElement.parentElement.parentElement.id) {
                cart[i].count++;
                localStorage.setItem("cart",JSON.stringify(cart));
                item.previousElementSibling.innerText=cart[i].count;
                item.parentElement.parentElement.nextElementSibling.firstElementChild.innerText="$"+cart[i].count*cart[i].price;
            }
        }
    }
});



if (cartItems.length == 0) {
    table.style.display="none";
} else {
    table.style.display="inline-table";
    empty.style.display="none";
}