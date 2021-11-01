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
  });
});



const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav");
console.log(menuBtn)

menuBtn.addEventListener("click", (e)=>{
  if(menuBtn.classList.contains('active')){
  setTimeout(()=>{
    menuBtn.classList.add("hide")
  },3000)
    nav.classList.remove("active")
menuBtn.classList.remove("active")
  }else{
nav.classList.add("active")
menuBtn.classList.add("active")}
})
