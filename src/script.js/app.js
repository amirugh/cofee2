// swich them
const toggleThemeBtn = document.querySelector(".toggle-theme");
const toggleThemeBtn2 = document.querySelector(".toggle-theme2");
// righ nav bar
const tabBar = document.getElementById("tabBar")
const SHtabBar = document.getElementById("SHtabBar")
const navBarPhon = document.getElementById("nav-bar-phon")
const miniX =document.getElementById("miniX")
const subMenu =document.querySelector(".subMenu")
// overlay
const overlay1 =document.getElementById("overlay")
const shopingarrowphon = document.getElementById("shoping-arrow-phon")
// left Cart Bar
const cartBarPhon = document.getElementById("cart-bar-phon")
const cartBar = document.getElementById("cartBar")
const cloceCart = document.getElementById("cloceCart")


    //  js

// swich them

function switchTem(){
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
}


// phon
    // right nav bar 

function openNavBar (){
    tabBar.classList.remove("-right-64")
    overlay1.className = "overlay bg-black/40 z-10 fixed inset-0 w-full h-full"
}

function cloceNavBar (){
    tabBar.classList.add("-right-64")
    overlay1.className = ""
}

function openSubMenu (){
    subMenu.classList.toggle("subMenuClose")
}

    // left Catr Bar

function openCart (){
    cartBar.classList.remove("-left-64")
    cartBar.classList.add("left-0")

    overlay1.className = "overlay bg-black/40 z-10 fixed inset-0 w-full h-full"
}    

function cloceLetCart (){
    cartBar.classList.remove("left-0")
    cartBar.classList.add("-left-64")
    overlay1.className = ""
}   




toggleThemeBtn.addEventListener("click",switchTem)
toggleThemeBtn2.addEventListener("click",switchTem)
navBarPhon.addEventListener("click",openNavBar)
miniX.addEventListener("click",cloceNavBar)
shopingarrowphon.addEventListener("click",openSubMenu)
cartBarPhon.addEventListener("click",openCart)
cloceCart.addEventListener("click",cloceLetCart)
overlay1.addEventListener("click",cloceNavBar )
overlay1.addEventListener("click", cloceLetCart)