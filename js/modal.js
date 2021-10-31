$.modal = function (options) {
  function _createModal(options) {
    console.log(options);
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.insertAdjacentHTML(
      "afterbegin",
      `<div class="modal__overlay" data-close="true">
    <div class="modal__window">
      <img src=${options.image} alt="" class="modal__img">
        <h2 class="modal__title">${options.title}</h2>
        <p class="modal__description">${options.description}</p>
          <a href="#" class="modal__link">оставить заявку на обучение</a>
    </div>
  </div>`
    );
    document.body.appendChild(modal);
    return modal;
  }
  const ANIMATION_SPEED = 300;
  const $modal = _createModal(options);
  let closing = false;


  const modal = {
    open() {
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
        $modal.parentNode.removeChild($modal);
        closing = false;
      }, ANIMATION_SPEED);
    },
  };
  $modal.addEventListener("click", (event) => {
    if (event.target.dataset.close) {
      modal.close();
    }
  });
  return modal;
};
