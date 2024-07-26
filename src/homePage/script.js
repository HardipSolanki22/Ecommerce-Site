// Toggle Navbar
let navbar = document.getElementById("navbar");
let Close = document.getElementById("close");
let Links = document.getElementById("links");
let cart = document.getElementById("cart");
// console.log(Links.innerHTML)

Close.addEventListener("click", () => {
    // navbar.classList.add('toggle')
    console.log("Toggle menu...");

    if (navbar.style.height == "350px") {
        console.log("if meni is run..");
        navbar.style.height = "60px";
        Links.removeAttribute("id", "uniqu");
        Links.setAttribute("id", "stope");
    } else {
        navbar.style.transition = "all 0.4s ease-in";
        Links.setAttribute("id", "uniqu");
        console.log("else  menu is run..");
        navbar.style.height = "350px";
    }
});


