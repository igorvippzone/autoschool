const faq = {
  img: [
    "images/FAQ/faq-1.jpg",
    "images/FAQ/faq-1.jpg",
    "images/FAQ/faq-1.jpg",
    "images/FAQ/faq-1.jpg",
    "images/FAQ/faq-1.jpg",
    "images/FAQ/faq-1.jpg",
  ],
  title: ["Какие документы нужны для обучения?", "11111", "222222", "333333"],
  description: ["000000", "11111", "222222", "333333"],
};
const body = document.querySelector("body");

const faqBtn = document.querySelectorAll(".faq-cart__btn");

faqBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    const e = event.target.getAttribute("data-faq");
    const modal = $.modal({
      image: faq.img[e],
      title: faq.title[e],
      description: faq.description[e],
    });
    setTimeout(() => modal.open(), 0);
    body.classList.add("noscroll");
  });
});

const menuBtn = document.querySelector(".closer");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", (e) => {
  if (menuBtn.classList.contains("active")) {
    nav.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("noscroll");
  } else {
    nav.classList.add("active");
    menuBtn.classList.add("active");
    body.classList.add("noscroll");
  }
});

// scroll
const header = body.querySelector(".header__inner");
let scrollPrev = 0;
let heightHeader = header.scrollHeight;
let isHide = false;
window.addEventListener("scroll", () => {
  const widthWindow = document.body.clientWidth;
  if (widthWindow <= 768) {
    scrollPrev = scrollPrev - scrollY;
    if (scrollY <= 50) {
      header.classList.contains("hide") ? header.classList.remove("hide") : "";
    } else {
      if (scrollPrev >= 30) {
        header.classList.remove("hide");
      } else if (scrollPrev <= -10) {
        header.classList.add("hide");
      }
      scrollPrev = scrollY;
    }
  }
});


// **************************
function hello(){
  console.log("hello", this)
}
const person = {
  name: "Igor",
  age: 27,
  sayHello: hello,
  sayHelloWindow: hello.bind(window)
}