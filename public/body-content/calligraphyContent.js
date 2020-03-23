document.addEventListener("DOMContentLoaded", function(event) { 
    let imageUlId = document.querySelector('#image-ul-id');
    let calligraphyObj = [
        {    
            title: 'Be Someone',
            snippet: 'Pentel sign pen',
            description: 'Modern Calligraphy - Pentel sign pen',
            image: 'be-someone.jpg',
            timeOut: 200,
            classItem: 'be-someone'
        },
        {    
            title: 'Walnut Ink',
            snippet: 'Pointed Pen Copperplate',
            description: 'Walnut Ink - Pointed Pen Copperplate',
            image: 'walnut-ink.jpg',
            timeOut: 400,
            classItem: 'walnut'
        },
        {    
            title: 'Candy',
            snippet: 'Walnut Ink',
            description: 'Walnut Ink - Copperplate.',
            image: 'candy.jpg',
            timeOut: 600,
            classItem: 'candy'
        },
        {    
            title: 'Give Goodness',
            snippet: 'Gothic broad pen calligraphy',
            description: 'Gothic broad pen calligraphy - Pilot Parallel',
            image: 'give-goodness.jpg',
            timeOut: 800,
            classItem: 'goodness'
        },
        {    
            title: 'Homer Simpson',
            snippet: 'Pink Water Color',
            description: 'Pink Water Color - Pointed Pen copperplate',
            image: 'homer-simpson.jpg',
            timeOut: 1000,
            classItem: 'homer'
        },
        {    
            title: 'Love Letter',
            snippet: 'Sumi Ink',
            description: 'Sumi Ink - Pointed Pen Copperplate',
            image: 'love-letter.png',
            timeOut: 1200,
            classItem: 'love'
        },
        {    
            title: 'Pearl',
            snippet: 'Sumi ink',
            description: 'Sumi Ink - Spencerian',
            image: 'pearl.jpg',
            timeOut: 1400,
            classItem: 'pearl'
        },
        {    
            title: 'Rainbow Ink',
            snippet: 'Watercolor',
            description: 'Watercolor - Pointed Pen Copperplate',
            image: 'rainbow-ink.png',
            timeOut: 1600,
            classItem: 'rainbow'
        },
        {    
            title: 'Traditional v Modern',
            snippet: 'Copperplate and Traditional',
            description: 'Traditional Copperplate and Modern Calligraphy',
            image: 'traditional-modern.jpg',
            timeOut: 1800,
            classItem: 'traditional'
        },
    ]

    content = () => {
        imageUlId.insertAdjacentHTML('beforeend',
            `
            <div class="loader-wrapper">
                <span class="loader"><span class="loader-inner"></span></span>
            </div>
            <div class="modal-grey"></div>
            <div class="modal container">
                <div class="modal-content row">
                    <div class='close-button-wrap'>
                        <div class="close-btn">&times</div>
                    </div>

                    <div class="modal-image-wrapper-parent">
                        <div class="modal-image-wrapper">
                        </div>
                    </div>
                    <div class='modal-description-bar'>
                        <div class="caret-wrapper">
                            <div class="modal-caret modal-caret-down">
                                <img class="caret-icon caret-pink" src="modal/images/caret-pink.png" />
                                <img class="caret-icon caret-red hide" src="modal/images/caret-red.png" />
                            </div>
                        </div>
                        <div class="modal-description-title hide">
                        </div>
                        <hr class="modal-description-hr hide" />
                        <div class="modal-description-text hide">
                        </div>
                    </div>

                </div>
               
            </div>
 
            `
        )

        let descriptionTitle = document.querySelector('.modal-description-title');
        let descriptionText = document.querySelector('.modal-description-text');
        let descriptionHR = document.querySelector('.modal-description-hr');

        let modalImageWrapper = document.querySelector('.modal-image-wrapper');

        calligraphyObj.forEach(function(item) {
            imageUlId.insertAdjacentHTML('beforeend', 
            `
            <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
                <div class="${item.classItem} hide card-wrap image-wrap">
                    <div class="card-inner">
                        <div class="card-front image-item" style="background-image: url(calligraphy/small/${item.image});">
                        </div>
                        <div class="card-back" style="background-image: url('images/spiration-light.png')";>
                            <p class="card-title">${item.title.toUpperCase()}</p>
                            <hr class="hr-line"/>
                            <p class="card-snippet">${item.snippet.toLowerCase()}</p>
                            <div class='modal-btn-wrap'>
                                <img class='modal-pink open-modal-btn' src="modal/images/open-modal-icon-pink.png"/>
                                <img class='modal-red open-modal-btn hide-modal-btn' src="modal/images/open-modal-icon-red.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            `

            );
        })


        let modalRed = document.querySelectorAll('.modal-red');

        modalRed.forEach(function(mR, index) {
            mR.addEventListener('click', (e) => {
                modalImageWrapper.innerHTML = `<img class="modal-large-image" src="calligraphy/large/${calligraphyObj[index].image}"/>`
                descriptionTitle.innerHTML =`<p>${calligraphyObj[index].title.toUpperCase()}</p>`
                descriptionHR.innerHTML =`<hr>`
                descriptionText.innerHTML =`<p">${calligraphyObj[index].description}</p>`
            })
        })

        calligraphyObj.forEach(calligraphy => {
            setTimeout(card, calligraphy.timeOut)
            function card() {
                let classSelected = document.querySelector(`.${calligraphy.classItem}`)
                classSelected.classList.remove('hide');
                classSelected.classList.add('card-animation');
            }

        });
    }

    content();

});