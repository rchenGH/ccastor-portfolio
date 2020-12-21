
document.addEventListener("DOMContentLoaded", function(event) { 
    
    let imageUlId = document.querySelector('#image-ul-id');
    
    let webMobileObj = [
        {    
            title: 'Holiday Card',
            snippet: 'Holiday Card',
            description: 'Hand calligraphy digitized holiday card (2017)',
            image: 'holiday-card.jpg',
            timeOut: 0,
            classItem: 'holiday'
        },
        {    
            title: 'Peppermint Twist',
            snippet: 'Icon Gif',
            description: 'Icon Gif (2020)',
            image: 'new-pep-twist.gif',
            timeOut: 0,
            classItem: 'twist'
        },
        {    
            title: 'Peppermint Twist - Pride',
            snippet: 'Icon Gif',
            description: 'Icon Gif (2020)',
            image: 'new-pep-twist-pride.gif',
            timeOut: 0,
            classItem: 'twist-pride'
        },
        {    
            title: 'Highways Tiger',
            snippet: 'Engraving illustration',
            description: 'Illustration for engraving (2018)',
            image: 'highways-tiger.jpg',
            timeOut: 0,
            classItem: 'tiger'
        },
        {    
            title: 'Kylie Subscribers',
            snippet: 'Streamer Asset',
            description: 'Twitch streamer assets - subscription icons',
            image: 'kylie-subscribers.jpg',
            timeOut: 0,
            classItem: 'kylie-sub'
        },
        {    
            title: 'GG Logo',
            snippet: 'logo',
            description: 'logo (2020)',
            image: 'gg-logo.png',
            timeOut: 0,
            classItem: 'gg-logo'
        },
        {    
            title: 'Ganymede\'s Girls Pride Logo',
            snippet: 'Caming Community Logo',
            description: 'Ganymede\'s Girls Gaming Community Pride Logo (2018)',
            image: 'ganymedes-girls.png',
            classItem: 'pride-logo',
            timeOut: 0,
        },
        {    
            title: 'Super Duper',
            snippet: 'Site Info',
            description: 'Site info - octagonal floor tiles used as inspiration and backdrop is the Super Duper tray liner (2018)',
            image: 'super-duper.jpg',
            classItem: 'super-duper',
            timeOut: 0,
        },
        {    
            title: 'Bree\'s Subs',
            snippet: 'Twitch sub icons',
            description: 'Twitch subcription icons',
            image: 'brees-subs.jpg',
            classItem: 'bree-sub',
            timeOut: 0,
        },
        {    
            title: 'DedlyKittns Emotes',
            snippet: 'Streamer Asset',
            description: 'Twitch Streamer Assets - Emotes (2018)',
            image: 'dedlykittns-emotes.jpg',
            classItem: 'dedly-kittns',
            timeOut: 0,
        },
        {    
            title: 'Ganymedes Redesign',
            snippet: 'Logo Redesign',
            description: 'Ganymede\'s Girls Gaming Community logo redesign (2018)',
            image: 'ganymede-redesign.png',
            classItem: 'redesign',
            timeOut: 0,
        },
        {    
            title: 'Team Callisto Banner',
            snippet: 'Poster',
            description: 'ESports Team Poster (2018)',
            image: 'team-callisto-banner.jpg',
            classItem: 'callisto',
            timeOut: 0,
        },
        {    
            title: '3d Images',
            snippet: 'Digital ad',
            description: 'Frame by Frame 3D image animation - digital advertisement (2017)',
            image: '3d-images.gif',
            classItem: 'ad-images',
            timeOut: 0,
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

        webMobileObj.forEach(function(item) {
            imageUlId.insertAdjacentHTML('beforeend', 
            `
            <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
                <div class="${item.classItem} hide card-wrap image-wrap">
                    <div class="card-inner">
                        <div class="card-front image-item" style="background-image: url(web-mobile/small/${item.image});">
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
                modalImageWrapper.innerHTML = `<img class="modal-large-image" src="web-mobile/large/${webMobileObj[index].image}"/>`
                descriptionTitle.innerHTML =`<p>${webMobileObj[index].title.toUpperCase()}</p>`
                descriptionHR.innerHTML =`<hr>`
                descriptionText.innerHTML =`<p">${webMobileObj[index].description}</p>`
            })
        })

        let timeOutFunc = function() {
            for(let i = 0; i < webMobileObj.length; i++){
                webMobileObj[i].timeOut += 200*[i]
            }
        }

        timeOutFunc();

        webMobileObj.forEach(webMobile => {
            setTimeout(card, webMobile.timeOut)
            function card() {
                let classSelected = document.querySelector(`.${webMobile.classItem}`)
                classSelected.classList.remove('hide');
                classSelected.classList.add('card-animation');
            }

        });
    }

    content();

});