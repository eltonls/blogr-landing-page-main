const menuBtns = Array.from(document.querySelectorAll(".nav__btn"));
const subMenuList = Array.from(document.querySelectorAll(".nav__menu--sub"));
const hamburguerBtn = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
menuBtns.forEach((element, idx) => {
    element.addEventListener("click", function(){
        if(subMenuList[idx].classList[1] === "active"){
            subMenuList[idx].classList.remove("active");
        }
        else{
            subMenuList.forEach(element => {
                element.classList.remove("active");
            });
            subMenuList[idx].classList.add("active");
        }
    });
});
hamburguerBtn.addEventListener("click", function(){
    nav.classList.toggle("active-nav");
    if(nav.classList[1] === "active-nav"){
        hamburguerBtn.children[0].setAttribute("src", "./images/icon-close.svg");
    }
    else{
        hamburguerBtn.children[0].setAttribute("src", "./images/icon-hamburger.svg");
    }
});

