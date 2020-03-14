document.addEventListener("DOMContentLoaded", function(event) { 
    let imageUlId = document.querySelector('#image-ul-id');
    let webMobileObj = [
        {    
            title: 'App Store Images',
            snippet: 'Multi-page banner',
            description: 'Multi-page banner',
            image: 'web-mobile/small/app-store-images.jpg'
        },
        {    
            title: 'Holiday Card',
            snippet: 'Holiday Card',
            description: 'Hand calligraphy digitized holiday card (2017)',
            image: 'web-mobile/small/holiday-card.jpg',
        },
        {    
            title: 'Highways Tiger',
            snippet: 'Engraving illustration',
            description: 'Illustration for engraving (2018)',
            image: 'web-mobile/small/highways-tiger.jpg',
        },
        {    
            title: 'PocketMe Web',
            snippet: 'Website Layout',
            description: 'PocketMe website layout (2017)',
            image: 'web-mobile/small/pocketme-web.jpg',
        },
        {    
            title: 'Kylie Subscribers',
            snippet: 'Streamer Asset',
            description: 'Twitch streamer assets - subscription icons',
            image: 'web-mobile/small/kylie-subscribers.jpg',
        },
        {    
            title: 'Ganymede\'s Girls Pride Logo',
            snippet: 'Caming Community Logo',
            description: 'Ganymede\'s Girls Gaming Community Pride Logo (2018)',
            image: 'web-mobile/small/ganymedes-girls.png',
        },
        {    
            title: 'Super Duper',
            snippet: 'Site Info',
            description: 'Site info - octagonal floor tiles used as inspiration and backdrop is the Super Duper tray liner (2018)',
            image: 'web-mobile/small/super-duper.jpg',
        },
        {    
            title: 'Bree\'s Subs',
            snippet: 'Twitch sub icons',
            description: 'Twitch subcription icons',
            image: 'web-mobile/small/brees-subs.jpg',
        },
        {    
            title: 'DedlyKittns Emotes',
            snippet: 'Streamer Asset',
            description: 'Twitch Streamer Assets - Emotes (2018)',
            image: 'web-mobile/small/dedlykittns-emotes.jpg',
        },
        {    
            title: 'Freeze Time',
            snippet: 'Digital Ad',
            description: 'Digital advertisement for PocketMe (2017)',
            image: 'web-mobile/small/freeze-time.jpg',
        },
        {    
            title: 'Ganymedes Redesign',
            snippet: 'Logo Redesign',
            description: 'Ganymede\'s Girls Gaming Community logo redesign (2018)',
            image: 'web-mobile/small/ganymede-redesign.png',
        },
        {    
            title: 'Ganymede\s Girls Pride',
            snippet: 'Gaming Community T-Shirt',
            description: 'Ganymede\'s Girls Gaming Community Pride T-Shirt (2019)',
            image: 'web-mobile/small/ganymedes-girl-pride.png',
        },
        {    
            title: 'CynCity Sticker',
            snippet: 'Asset Media',
            description: 'Asset Media',
            image: 'web-mobile/small/cyncity-sticker.gif',
        },
        {    
            title: 'Cake Topper',
            snippet: 'Digital ad',
            description: 'Digital ad for PocketMe (2017)',
            image: 'web-mobile/small/cake-topper.jpg',
        },
        {    
            title: 'Offline Scene',
            snippet: 'Streamer Asset',
            description: 'Twitch Streamer Asset - Splash Page',
            image: 'web-mobile/small/offline-scene.jpg',
        },
        {    
            title: 'Team Callisto Banner',
            snippet: 'Poster',
            description: 'ESports Team Poster (2018)',
            image: 'web-mobile/small/team-callisto-banner.jpg',
        },
        {    
            title: '3d Images',
            snippet: 'Digital ad',
            description: 'Frame by Frame 3D image animation - digital advertisement (2017)',
            image: 'web-mobile/small/3d-images.gif'
        },
    ]

    for(let i = 0; i < webMobileObj.length; i++){
        imageUlId.insertAdjacentHTML('beforeend', 
        `
        <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
            <div class="card-wrap image-wrap">
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
});



