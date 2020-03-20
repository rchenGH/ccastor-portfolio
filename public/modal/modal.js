document.addEventListener("DOMContentLoaded", function(event) { 
    let modal = document.querySelector('.modal');
    let closeBtn = document.querySelector('.close-btn');
    let openBtn = document.querySelectorAll('.open-modal-btn');
    let modalPink = document.querySelectorAll('.modal-pink');
    let modalRed = document.querySelectorAll('.modal-red');
    let modalDescription = document.querySelectorAll('.modal-description-bar');
    let modalCaret = document.querySelectorAll('.modal-caret');
    let caretIcon = document.querySelectorAll('.caret-icon');
    let caretPink = document.querySelectorAll('.caret-pink')
    let caretRed = document.querySelectorAll('.caret-red');
    let descriptionTitle = document.querySelector('.modal-description-title');
    let descriptionText = document.querySelector('.modal-description-text');
    let descriptionHR = document.querySelector('.modal-description-hr');
    let main = document.querySelector('.main');

    // Outer modal
    for(let i = 0; i < modalPink.length; i++) {
        modalPink[i].addEventListener('mouseover', () => {
            if(modalPink){
                modalPink[i].classList.add('hide-modal-btn');
                modalRed[i].classList.remove('hide-modal-btn');
            }
        })
    }
    for(let i = 0; i < modalRed.length; i++){
        modalRed[i].addEventListener('mouseout', () => {
            if(modalRed){
                modalRed[i].classList.add('hide-modal-btn');
                modalPink[i].classList.remove('hide-modal-btn');
            }
        });
    }

    for(let i = 0; i < openBtn.length; i++){
        openBtn[i].addEventListener('click', openModal);
    }

    function openModal() {
        modal.style.display = 'block';
        main.style.overflowY = 'hidden';
    }

    // Inner Modal

    for(let i = 0; i < modalCaret.length; i++){
        modalCaret[i].addEventListener('click', () => {
            caretIcon[i].classList.toggle("flip");
            caretRed[i].classList.toggle("flip");
            modalDescription[i].classList.toggle('modal-expand');
            descriptionTitle.classList.toggle('hide');
            descriptionText.classList.toggle('hide');
            descriptionHR.classList.toggle('hide');
        })
    }

    for(let i = 0; i < caretPink.length; i++){
        modalCaret[i].addEventListener('mouseover', () =>{
            if(caretPink){
                caretPink[i].classList.add('hide');
                caretRed[i].classList.remove('hide');
            }
        })
    }

    for(let i = 0; i < caretRed.length; i++){
        modalCaret[i].addEventListener('mouseleave', () =>{
                caretPink[i].classList.remove('hide');
                caretRed[i].classList.add('hide');
        })
    }

    closeBtn.addEventListener('click', closeModal);

    function closeModal() {
        modal.style.display = 'none';
        main.style.overflowY = 'scroll';

    }

});