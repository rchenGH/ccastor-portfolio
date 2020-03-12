document.addEventListener("DOMContentLoaded", function(event) { 
    let imageUlId = document.querySelector('#image-ul-id');
    let webMobileObj = [
        {    
            title: '3d Images',
            description: 'Frame by Frame 3D image animation- digital advertisement (2017)',
            image: 'web-mobile/3d-images.gif'
        },
        {    
            title: 'App Store Images',
            description: 'Multi-page banner',
            image: 'web-mobile/app-store-images.jpg'
        },
        {    
            title: 'Bree\'s Subs',
            description: 'Twitch subcription icons',
            image: 'web-mobile/brees-subs.jpg',
        },
        {    
            title: 'Cake Topper',
            description: 'Digital ad for PocketMe (2017)',
            image: 'web-mobile/cake-topper.jpg',
        },
        {    
            title: 'Clickup Marketing',
            description: 'Animated Digital Ad',
            image: 'web-mobile/clickup-marketing.gif',
        },
        {    
            title: 'CynCity Sticker',
            snippet: 'Asset Media',
            image: 'web-mobile/cyncity-sticker.gif',
        },
        {    
            title: 'DedlyKittns Emotes',
            description: 'Twitch Streamer Assets- Emotes (2018)',
            image: 'web-mobile/dedlykittns-emotes.jpg',
        },
        {    
            title: 'Freeze Time',
            description: 'Digital advertisement for PocketMe (2017)',
            image: 'web-mobile/freeze-time.jpg',
        },
        {    
            title: 'Ganymedes Redesign',
            description: 'Ganymede\'s Girls Gaming Community logo redesign (2018)',
            image: 'web-mobile/.jpg',
        },
        {    
            title: 'Ganymede\s Girls Pride',
            description: 'Ganymede\'s Girls Gaming Community Pride Tshirt (2019)',
            image: 'web-mobile/ganymedes-girl-pride.png',
        },
        {    
            title: 'Ganymede\'s Girls Pride Logo',
            description: 'Ganymede\'s Girls Gaming Community Pride Logo (2018)',
            image: 'web-mobile/ganymedes-girls.png',
        },
        {    
            title: 'Highways Tiger',
            description: 'Illustration for engraving (2018)',
            image: 'web-mobile/highways-tiger.jpg',
        },
        {    
            title: 'Holiday Card',
            description: 'Hand calligraphy digitized Holiday card (2017)',
            image: 'web-mobile/holiday-card.jpg',
        },
        {    
            title: 'Kylie Subscribers',
            description: 'Twitch streamer assets - subscription icons',
            image: 'web-mobile/kylie-subscribers.jpg',
        },
        {    
            title: 'Offline Scene',
            description: 'Twitch Streamer Asset- Splash Page',
            image: 'web-mobile/offline-scene.jpg',
        },
        {    
            title: 'PocketMe Web',
            description: 'PocketMe website Layout (2017)',
            image: 'web-mobile/pocketme-web.jpg',
        },
        {    
            title: 'Super Duper',
            description: 'Site info - octagonal floor tiles used as inspiration and backdrop is the Super Duper tray liner (2018)',
            image: 'web-mobile/super-duper.jpg',
        },
        {    
            title: 'Team Callisto Banner',
            description: 'ESports Team Poster (2018)',
            image: 'web-mobile/team-callisto-banner.jpg',
        }
    ]

    for(let i = 0; i < 15; i++){
        imageUlId.insertAdjacentHTML('beforeend', 
        `
        <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
            <div class="card-wrap image-wrap">
                <div class="card-inner">
                    <div class="card-front image-item" style="background-image: url(${webMobileObj[i].image});">
                    </div>
                    <div class="card-back" style="background-image: url('images/spiration-light.png');>
                        <p class="card-text">${webMobileObj[i].title}</p>
                        <p class="card-text">${webMobileObj[i].description}</p>
                    </div>
                </div>
            </div>
        </li>
      `
        
        );
    }
});



