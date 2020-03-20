document.addEventListener("DOMContentLoaded", function(event) { 
    
    let imageUlId = document.querySelector('#image-ul-id');

    let printObj = [
        {    
            title: '6th-Street',
            snippet: 'Front and back',
            description: 'Front and back shirt design',
            image: '6th-street-shirt.jpg',
            timeOut: 200,
            classItem: 'sixth-street'
        },
        {
            title: 'Gogol',
            snippet: 'Real Estate Brochure',
            description: 'Brochure',
            image: 'coldwell-gogol.jpg',
            timeOut: 400,
            classItem: 'gogol'
        },
        {
            title: 'Fourth Meal',
            snippet: 'Restaurant Ad',
            description: 'Taco Bell Restaurant Ad',
            image: 'fourthmeal.jpg',
            timeOut: 600,
            classItem: 'fourth-meal'
        },
        {
            title: 'Kaprielian',
            snippet: 'Brochure',
            description: 'Real Estate Brochure',
            image: 'coldwell-kaprielian.jpg',
            timeOut: 800,
            classItem: 'kaprielian'
        },
        {
            title: 'Royal Family',
            snippet: 'Poster',
            description: 'Team Poster (2014)',
            image: 'royal-family.png',
            timeOut: 1000,
            classItem: 'royal-family'
        },
        {
            title: 'Floors',
            snippet: 'Overhead',
            description: 'Overhead view',
            image: 'floors.jpg',
            timeOut: 1200,
            classItem: 'floors'
        },
        {
            title: 'Invitation',
            snippet: 'Wedding Invitation',
            description: 'Wedding Invitation',
            image: 'invitation.jpg',
            timeOut: 1400,
            classItem: 'invitation'
        },
        {
            title: 'Overview',
            snippet: 'Layout',
            description: 'Bird\'s Eye View Layout',
            image: 'overview.jpg',
            timeOut: 1600,
            classItem: 'overview'
        },
        {
            title: 'RPC List',
            snippet: 'Top 10',
            description: 'Red Pill Cheer - Top 10 List',
            image: 'red-pill-top-10.png',
            timeOut: 1800,
            classItem: 'rcp-list'
        },
        {
            title: 'RPC Cover',
            snippet: 'Poster',
            description: 'Poster',
            image: 'red-pill.jpg',
            timeOut: 2000,
            classItem: 'rcp-cover'
        },
        {
            title: 'RSVP',
            snippet: 'RSVP Details',
            description: 'RSVP Details',
            image: 'rsvp-details.jpg',
            timeOut: 2200,
            classItem: 'rsvp-details'
        },
        {
            title: 'Restaurant Ads - First Set',
            snippet: 'Printed Ads',
            description: 'Printed Ads',
            image: 'taco-wall-1.jpg',
            timeOut: 2400,
            classItem: 'printed-ads-1'
        },
        {
            title: 'RPC Prices',
            snippet: 'Registration Cost',
            description: 'Red Pill Cheer - Registration Cost',
            image: 'red-pill-price.png',
            timeOut: 2600,
            classItem: 'rpc-prices'
        },
        {
            title: 'Restaurant Ads - Second Set',
            snippet: 'Printed Ads',
            description: 'Printed Ads',
            image: 'taco-wall-2.jpg',
            timeOut: 2800,
            classItem: 'printed-ad-2'
        },
    ]
    content = () => {
        imageUlId.insertAdjacentHTML('beforeend',
            `
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

        printObj.forEach(function(item) {
            imageUlId.insertAdjacentHTML('beforeend', 
            `
            <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
                <div class="${item.classItem} hide card-wrap image-wrap">
                    <div class="card-inner">
                        <div class="card-front image-item" style="background-image: url(print-media/small/${item.image});">
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
                modalImageWrapper.innerHTML = `<img class="modal-large-image" src="print-media/large/${printObj[index].image}"/>`
                descriptionTitle.innerHTML =`<p>${printObj[index].title.toUpperCase()}</p>`
                descriptionHR.innerHTML =`<hr>`
                descriptionText.innerHTML =`<p">${printObj[index].description}</p>`
            })
        })

        printObj.forEach(print => {
            setTimeout(card, print.timeOut)
            function card() {
                let classSelected = document.querySelector(`.${print.classItem}`)
                classSelected.classList.remove('hide');
                classSelected.classList.add('card-animation');
            }

        });
    }

    content();

});