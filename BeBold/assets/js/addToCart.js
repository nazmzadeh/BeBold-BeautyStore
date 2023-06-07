let buttons=document.querySelectorAll("#card_button") ;

function createStorage() {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart",JSON.stringify([]));
    }
}
createStorage();

function cartCount() {
    document.querySelector(".count_products").innerText=JSON.parse(localStorage.getItem("cart")).length;
}
cartCount();

buttons.forEach(btn => {
    btn.addEventListener("click",function (e) {
        e.preventDefault();
        let Id=this.parentElement.parentElement.getAttribute("data-id");
        let price=this.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.innerText;
        let name=this.parentElement.nextElementSibling.nextElementSibling.firstElementChild.innerText;
        let image=this.parentElement.firstElementChild.src;
        createStorage();
        let cart=getCart(Id,price,name,image);
        localStorage.setItem("cart",JSON.stringify(cart));
        cartCount();
    });
});

function getCart(Id,price,name,image) {
    let cart=JSON.parse(localStorage.getItem("cart")) ;
    let existingProduct=cart.find(item=>item.id==Id);
    if (existingProduct==undefined) {
        cart.push({
            id:Id,
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

    