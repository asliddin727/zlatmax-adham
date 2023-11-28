let elHamburgerBtn = document.querySelector(".hamburger");
let elCloseBtn = document.querySelector(".close");
let elList = document.querySelector(".header__list");

elHamburgerBtn.addEventListener("click", () =>{
    elList.style.display ="block";
})

elCloseBtn.addEventListener("click", () =>{
    elList.style.display ="none";
})