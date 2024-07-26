// Toggle Navbar
let navbar = document.getElementById("navbar");
let Close = document.getElementById("close");
let Links = document.getElementById("links");
// console.log(Links.innerHTML)
// console.log(navbar,Close)
Close.addEventListener("click", () => {
// navbar.classList.add('toggle')
console.log("Toggle menu...");

if (navbar.style.height == "330px") {
    console.log("if meni is run..");
    navbar.style.height = "60px";
    Links.removeAttribute("id", "uniqu");
    Links.setAttribute("id", "stope");
   
} 
else {
    navbar.style.transition = "all 0.4s ease-in ";
    // Close.innerHTML = "<i class='fa-solid fa-xmark-large' id= 'close'>"
    Links.setAttribute("id", "uniqu");
    console.log("else  menu is run..");
    navbar.style.height = "330px";
}
});

// Shoping cart
let div = document.createElement("div");
let cart = document.querySelector("#cart");
let addTocart = document.querySelectorAll(".shope-cart");
let itemImg = document.querySelectorAll(".items-img");
let imgFrame = document.querySelectorAll(".img-frame");
let items = document.querySelectorAll(".items");
let h2 = document.createElement("h2");
let img = document.createElement('div');

// Close Btn To close cart section and Open it
let Close_cart = document.createElement("div");
Close_cart.setAttribute("id", "close-cart");
Close_cart.innerHTML =
' <i class="fa-solid fa-circle-xmark" id= "cart-close"></i> ';
h2.setAttribute("id", "shoping-cart");
h2.innerText = "Shoping Cart";
div.appendChild(h2);
div.appendChild(Close_cart);
Close_cart.addEventListener("click", () => {
    console.log("close");
    div.style.display = "none";

});
cart.addEventListener("click", () => {
    console.log("Open");
    img.setAttribute('class','remove')
    div.style.display = "block";
   
});

// Cart Click to show cart section
console.log(addTocart);
cart.addEventListener("click", () => {
    console.log("Function is run");
    div.setAttribute("id", "cart-section");
    div.classList.add("cart-saction");
    // div.style.transition = "all 0.2s ease-in";
    document.body.appendChild(div);
    img.classList.add('empty-cart')
    div.appendChild(img)
    console.log("clicked");
   
});

let notify = document.querySelector(".notify");
addTocart.forEach((q) => {
// console.log(q)
// Items buy to show add text in header

q.addEventListener("click", (h) => {
    img.setAttribute('class','remove')
    img.classList.remove('empty-cart')
    let message = document.createElement("p");
    message.classList.add("messg");
    let intraval = setTimeout(() => {
        let text = document.createTextNode("Add...");
        message.appendChild(text);
        document.body.appendChild(message);
        console.log(message);
  });
    setInterval(() => {
        //    clearInterval(intraval)
        message.innerHTML = "";
    }, 400);
    
    // Get images , price and other items in cart Section
    console.log(h.target);
    img.classList.remove('empty-cart')
        console.log("add");
        notify.innerHTML++;
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div1.classList.add("outer");
        div2.classList.add("inner-box");
        div2.style.border = "2px solid balck";
        console.log(h.target.parentElement.parentElement.children[0].children[0].getAttribute("class"));
        let url =
        q.parentElement.parentElement.children[0].children[0].getAttribute("style");
        console.log(url);
        div2.innerHTML = ` <div style= "${url}" class="cart-img"> </div>  `;
        let h4 = document.createElement("h4");
        h4.setAttribute("id", "prize-content");
        let prize;
        //  console.log( q.parentElement.parentNode.children[1].children[1].children[0].innerText)
        if (q.parentElement.parentNode.children[2].children[0].innerText == 790) {
                prize = document.createTextNode(
                q.parentElement.parentNode.children[2].children[0].innerText);
         }       
    else {
                prize = document.createTextNode(
                q.parentElement.parentNode.children[1].children[1].children[0].innerText);
        }

    h4.appendChild(prize);

     let TotalPrise = document.createElement('h2')

     console.log(Array.isArray(prize))

//Increment & Decrement feature and Remove items from cart
    let IncreDecrePrize = document.createElement("div");
    let removeEle = document.createElement("div");
    removeEle.classList.add("font");
    let itemsPlush = document.createElement("p");
    itemsPlush.classList.add("margin-pmp");
    itemsPlush.innerText = 1;
    removeEle.innerHTML = ' <i class="fa-solid fa-trash" ></i>';
    removeEle.classList.add("delet-btn");
    IncreDecrePrize.setAttribute("id", "inc-dec-prize");

 // IncreDecrePrize.classList.add('cart-prize')
    let i = document.createElement("h4");
    i.classList.add("font");
    i.innerHTML = '<i class="fa-sharp fa-solid fa-plus"></i>';
    let i2 = document.createElement("h4");
    i2.classList.add("font");
    i2.innerHTML = '<i class="fa-solid fa-minus"></i>';
    i.classList.add("margin-pmp");
    i2.classList.add("margin-pmp");
    i.addEventListener("click", () => {
    console.log("Plush");
    itemsPlush.innerText++;
});
    i2.addEventListener("click", () => {
    console.log("Minush");
     itemsPlush.innerText--;
    if (itemsPlush.innerHTML <= 0) {
    itemsPlush.innerHTML = 1;
    }
 });
    IncreDecrePrize.append(i2);
    IncreDecrePrize.append(itemsPlush);
    IncreDecrePrize.append(i);
    div2.append(h4);
    div2.append(removeEle);
    div2.append(IncreDecrePrize);
 // Remove items in cart
    removeEle.addEventListener("click", () => {
        console.log("click");
        div1.remove();
        notify.innerHTML--;
        });
       
    div1.appendChild(div2);
    div.appendChild(div1);
    
  });
});
// For html Inner text Mainipulation
addTocart.forEach((q) => {
    // console.log(q)
    q.innerHTML = "Add to cart";
});
 
