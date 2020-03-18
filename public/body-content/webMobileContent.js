
document.addEventListener("DOMContentLoaded", function(event) { 
    
    let imageUlId = document.querySelector('#image-ul-id');
    
    let webMobileObj = [
        {    
            title: 'App Store Images',
            snippet: 'Multi-page banner',
            description: 'Multi-page banner',
            image: 'web-mobile/small/app-store-images.jpg',
            timeOut: 200,
            classItem: 'multi-banner'
        },
        {    
            title: 'Holiday Card',
            snippet: 'Holiday Card',
            description: 'Hand calligraphy digitized holiday card (2017)',
            image: 'web-mobile/small/holiday-card.jpg',
            timeOut: 400,
            classItem: 'holiday'
        },
        {    
            title: 'Highways Tiger',
            snippet: 'Engraving illustration',
            description: 'Illustration for engraving (2018)',
            image: 'web-mobile/small/highways-tiger.jpg',
            timeOut: 600,
            classItem: 'tiger'
        },
        {    
            title: 'PocketMe Web',
            snippet: 'Website Layout',
            description: 'PocketMe website layout (2017)',
            image: 'web-mobile/small/pocketme-web.jpg',
            timeOut: 800,
            classItem: 'pocket-layout'
        },
        {    
            title: 'Kylie Subscribers',
            snippet: 'Streamer Asset',
            description: 'Twitch streamer assets - subscription icons',
            image: 'web-mobile/small/kylie-subscribers.jpg',
            timeOut: 1000,
            classItem: 'kylie-sub'
        },
        {    
            title: 'Ganymede\'s Girls Pride Logo',
            snippet: 'Caming Community Logo',
            description: 'Ganymede\'s Girls Gaming Community Pride Logo (2018)',
            image: 'web-mobile/small/ganymedes-girls.png',
            classItem: 'pride-logo',
            timeOut: 1200,
        },
        {    
            title: 'Super Duper',
            snippet: 'Site Info',
            description: 'Site info - octagonal floor tiles used as inspiration and backdrop is the Super Duper tray liner (2018)',
            image: 'web-mobile/small/super-duper.jpg',
            classItem: 'super-duper',
            timeOut: 1400,
        },
        {    
            title: 'Bree\'s Subs',
            snippet: 'Twitch sub icons',
            description: 'Twitch subcription icons',
            image: 'web-mobile/small/brees-subs.jpg',
            classItem: 'bree-sub',
            timeOut: 1600,
        },
        {    
            title: 'DedlyKittns Emotes',
            snippet: 'Streamer Asset',
            description: 'Twitch Streamer Assets - Emotes (2018)',
            image: 'web-mobile/small/dedlykittns-emotes.jpg',
            classItem: 'dedly-kittns',
            timeOut: 1800,
        },
        {    
            title: 'Freeze Time',
            snippet: 'Digital Ad',
            description: 'Digital advertisement for PocketMe (2017)',
            image: 'web-mobile/small/freeze-time.jpg',
            classItem: 'freeze-time',
            timeOut: 2000,
        },
        {    
            title: 'Ganymedes Redesign',
            snippet: 'Logo Redesign',
            description: 'Ganymede\'s Girls Gaming Community logo redesign (2018)',
            image: 'web-mobile/small/ganymede-redesign.png',
            classItem: 'redesign',
            timeOut: 2200,
        },
        {    
            title: 'Ganymede\s Girls Pride',
            snippet: 'Gaming Community T-Shirt',
            description: 'Ganymede\'s Girls Gaming Community Pride T-Shirt (2019)',
            image: 'web-mobile/small/ganymedes-girl-pride.png',
            classItem: 'pride-shirt',
            timeOut: 2400,
        },
        {    
            title: 'CynCity Sticker',
            snippet: 'Asset Media',
            description: 'Asset Media',
            image: 'web-mobile/small/cyncity-sticker.gif',
            classItem: 'cyn-sticker',
            timeOut: 2600,
        },
        {    
            title: 'Cake Topper',
            snippet: 'Digital ad',
            description: 'Digital ad for PocketMe (2017)',
            image: 'web-mobile/small/cake-topper.jpg',
            classItem: 'topper',
            timeOut: 2800,
        },
        {    
            title: 'Offline Scene',
            snippet: 'Streamer Asset',
            description: 'Twitch Streamer Asset - Splash Page',
            image: 'web-mobile/small/offline-scene.jpg',
            classItem: 'offline',
            timeOut: 3000,
        },
        {    
            title: 'Team Callisto Banner',
            snippet: 'Poster',
            description: 'ESports Team Poster (2018)',
            image: 'web-mobile/small/team-callisto-banner.jpg',
            classItem: 'callisto',
            timeOut: 3200,
        },
        {    
            title: '3d Images',
            snippet: 'Digital ad',
            description: 'Frame by Frame 3D image animation - digital advertisement (2017)',
            image: 'web-mobile/small/3d-images.gif',
            classItem: 'ad-images',
            timeOut: 3400,
        },
    ]

    function content(){
        for(let i = 0; i < webMobileObj.length; i++){
            imageUlId.insertAdjacentHTML('beforeend', 
            `
            <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
                <div class="${webMobileObj[i].classItem} hide card-wrap image-wrap">
                    <div class="card-inner">
                        <div class="card-front image-item" style="background-image: url(${webMobileObj[i].image});">
                        </div>
                        <div class="card-back" style="background-image: url('images/spiration-light.png')";>
                            <p class="card-title">${webMobileObj[i].title.toUpperCase()}</p>
                            <hr class="hr-line"/>
                            <p class="card-snippet">${webMobileObj[i].snippet.toLowerCase()}</p>
                        </div>
                    </div>
                </div>
            </li>
          `
            
            );
        }
    }

    webMobileObj.forEach(webMob => {
        setTimeout(card, webMob.timeOut)
        function card() {
            let classSelected = document.querySelector(`.${webMob.classItem}`)
            classSelected.classList.remove('hide');
            classSelected.classList.add('card-animation');
        }
    });

    content();

});



