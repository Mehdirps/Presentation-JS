// Burger

    const navbar = document.querySelector(".navbar");
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", () => {
        navbar.classList.toggle("show-nav");
    })


// Pop-up

const openModalButtons = document.querySelector('[data-modal-target]');
const closeModalButtons = document.querySelector('[data-close-button]');
const overlay = document.querySelector('#fondsombre');

  openModalButtons.addEventListener('click', () => {
    let target = openModalButtons.dataset.modalTarget;
    const menu = document.querySelector(target);
    menu.classList.toggle("active");
    overlay.classList.toggle("active")
  })
  closeModalButtons.addEventListener('click', () => {
    const menu = closeModalButtons.closest('.menu')
    menu.classList.toggle("active");
    overlay.classList.toggle("active")
  })
