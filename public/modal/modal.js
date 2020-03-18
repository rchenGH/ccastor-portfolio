document.addEventListener("DOMContentLoaded", function(event) { 
    let modal = document.querySelector('.modal');
    let closeBtn = document.querySelector('.close-btn');
    let openBtn = document.querySelectorAll('.open-modal-btn');
    let modalPink = document.querySelectorAll('.modal-pink');
    let modalRed = document.querySelectorAll('.modal-red');

    for(let i = 0; i < modalPink.length; i++) {
        openBtn[i].addEventListener('click', openModal);
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
        })
    }
    
    closeBtn.addEventListener('click', closeModal);

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

});