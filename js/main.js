const faq = {
  img: [
    "images/FAQ/faq-1.jpg",
    "images/FAQ/faq-2.jpg",
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
    modal.open()
  
  });
});
