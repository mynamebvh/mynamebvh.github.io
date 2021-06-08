const classSearch = ["show", "shadow", "p-3", "mb-5", "bg-white", "rounded"];
let container = document.getElementById("container");
let input = document.getElementById("input");
let searchTrend = document.getElementById("search__trend");

input.addEventListener("click", () => {
  searchTrend.classList.add(...classSearch);
})

input.addEventListener("blur", () => {
  searchTrend.classList.remove("show");
})

var random = 0;



let link = ["./img/img-lit/1_1.jpg", "./img/img-lit/2_2.jpg", "../img/img-lit/3_3.jpg", "../img/img-lit/5_5.jpg", "../img/img-lit/4_4.jpg"]
let slides = document.querySelectorAll(".bg__img-move");
let bgImg = document.getElementById("bg-img");

let bg_1 = document.querySelector(".bg__img-1");
let bg_2 = document.querySelector(".bg__img-2");
let bg_3 = document.querySelector(".bg__img-3");
let bg_4 = document.querySelector(".bg__img-4");
let bg_5 = document.querySelector(".bg__img-5");


slides.forEach((item, i) => {
  item.addEventListener("mouseenter", (i) => {
    // console.log(i.target);
    switch (i.target) {
      case bg_1:
        bgImg.src = link[0];
        break;
      case bg_2:
        bgImg.src = link[1];
        break;
      case bg_3:
        bgImg.src = link[2];
        break;
      case bg_4:
        bgImg.src = link[3];
        break;
      case bg_5:
        bgImg.src = link[4];
        break;
      default:
        break;
    }
  })
})


setInterval(() => {

  if(random > 4){
    slides[random - 1].style.border = "2px solid transparent";
    random = 0 ;
  }

  bgImg.src = link[random];

  if(slides[random - 1])
    slides[random - 1].style.border = "2px solid transparent";

  slides[random].style.border = "2px solid white";
  random++;
},3000)


const app = document.getElementById("app");

var historys = [];

function save(arr, value) {
  arr.push(value);

  return arr;
}


window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  var value = save(historys,scroll).slice(-2);
  var length = value.length;
  // localStorage.setItem("history", value);

  var header = document.getElementsByTagName("header");
  var headerContainer = document.getElementById("header");
  var search = document.getElementById("search");
  var headerLi = document.querySelectorAll(".header__bottom--menu > li");
  var headerBottom = document.querySelector(".header__bottom");
  var headerTop = document.querySelector(".header__top");
  var navItem = document.querySelector(".nav__item ");
  var headerBottomMenu = document.querySelector(".header__bottom--menu");

  if(value[1]  > value[0]){
    search.classList.add("hidden");
    headerBottom.classList.remove("drop__header");
    // headerContainer.classList.add("shadow");
    headerBottom.classList.remove("col-xl-12");
    headerBottom.classList.add("col-xl-7");

    navItem.classList.remove("col-xl-4");
    navItem.classList.add("col-xl-3");
    headerLi[0].classList.add("hidden");
    headerLi[5].classList.add("hidden");

    headerLi[6].classList.add("hidden");
    headerLi[7].classList.add("hidden");
    headerLi[9].classList.add("hidden");
    headerTop.style.height = "50px";

    header[0].classList.add("header__drop");
    // headerContainer.classList.add("container-fluid")
    headerBottomMenu.classList.add("header__bottom--menu-drop");
  }
  else {
    search.classList.remove("hidden");
    headerBottom.classList.add("drop__header");
    headerBottom.classList.add("col-xl-12");
    headerBottom.classList.remove("col-xl-7");

    navItem.classList.add("col-xl-4");
    navItem.classList.remove("col-xl-3");
    headerLi[0].classList.remove("hidden");
    headerLi[5].classList.remove("hidden");

    headerLi[6].classList.remove("hidden");
    headerLi[7].classList.remove("hidden");
    headerLi[9].classList.remove("hidden");
    headerTop.style.height = "124px";

    header[0].classList.remove("header__drop");
    headerBottomMenu.classList.remove("header__bottom--menu-drop");
    // headerContainer.classList.remove("shadow");
    console.log("len");
  }
  



  // var temp = scroll;
  // if(temp > scroll)
  // console.log("lên");
  // else 
  // console.log("xuống");
});


