let buttons=document.querySelectorAll("#card_button") ;
let myCartStorage=localStorage.getItem("cart");

function createStorage() {
    if (!myCartStorage) {
        localStorage.setItem("cart",JSON.stringify([]));
    }
}
createStorage();

function cartCount() {
    document.querySelector(".count_products").innerText=JSON.parse(myCartStorage).length;
}
cartCount();

buttons.forEach(btn => {
    btn.addEventListener("click",function (e) {
        e.preventDefault();
        let id=this.parentElement.parentElement.getAttribute("data-id");
        let price=this.parentElement.parentElement.lastElementChild.lastElementChild.innerText;
        let name=this.parentElement.nextElementSibling.nextElementSibling.firstElementChild.innerText;
        let image=this.parentElement.firstElementChild.src;
        createStorage();
        let cart=getCart(id,price,name,image);
        localStorage.setItem("cart",JSON.stringify(cart));
        cartCount();
    });
});

function getCart(id,price,name,image) {
    let cart=JSON.parse(myCartStorage) ;
    let existingProduct=cart.find(item=>item.id==id);
    if (existingProduct==undefined) {
        cart.push({
            id:id,
            price:price,
            name:name,
            image:image,
            count:1
        })

    }
    else{
        existingProduct.count++;
    }
    return cart;
}





// const user={
//     fullname:"Naz Mzadeh",
//     age:20,
//     work:"Front-end developer"
// }
// localStorage.setItem("name","Naz");
// localStorage.setItem("user",JSON.stringify(user));
// localStorage.setItem("user",JSON.parse(user));