'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnOpenModal);
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener(
    'click',
    openModal
    //   function () {
    //     console.log('button Cliked');
    //     modal.classList.remove('hidden');
    //     overlay.classList.remove('hidden');
    //   }
  );
}

// close modal with close btn
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// close modal by clicking overlay area
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// DRY principal for close btn code

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// close modal on ecape btn press
document.addEventListener('keydown', function (e) {
  //   console.log('a key is pressed');
  //   console.log(e.key);
  //   if (e.key === 'Escape') {
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
