const orderLink = document.querySelector('.special-offer__button');
const orderModal = document.querySelector('.order-modal');
const orderModalClose = orderModal.querySelector('.order-modal__close');
const overlayModal = document.querySelector('.overlay-modal');

orderLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlayModal.classList.add('modal-overlay-show');
  orderModal.classList.add('modal-show');
});

function modalClose(orderModal) {
  orderModalClose.addEventListener('click', function(evt) {
    removeModal(orderModal,evt);
  });
  window.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      if (orderModal.classList.contains('modal-show')) {
        removeModal(orderModal,evt);
      }
    }
  });
  overlayModal.addEventListener('click', function(evt) {
    removeModal(orderModal,evt);
  });
};

modalClose(orderModal);

function removeModal(orderModal, evt) {
  evt.preventDefault();
  overlayModal.classList.remove('modal-overlay-show');
  orderModal.classList.remove('modal-show');
};