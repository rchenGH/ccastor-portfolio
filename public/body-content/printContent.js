document.addEventListener("DOMContentLoaded", function(event) { 
    let imageUlId = document.querySelector('#image-ul-id');
    let printObj = [
        {    
            title: '6th-Street',
            snippet: 'Front and back',
            image: 'print-media/6th-street-shirt.jpg'
        },
        {
            title: 'Gogol',
            snippet: 'Brochure',
            image: 'print-media/coldwell-gogol.jpg'
        },
        {
            title: 'Kaprielian',
            snippet: 'Brochure',
            image: 'print-media/coldwell-kaprielian.jpg'
        },
        {
            title: 'Floors',
            snippet: 'Overhead view',
            image: 'print-media/floors.jpg'
        },
        {
            title: 'Fourth Meal',
            snippet: 'Restaurant Ad',
            image: 'print-media/fourthmeal.jpg'
        },
        {
            title: 'Invitation',
            snippet: 'Wedding Invitation',
            image: 'print-media/invitation.jpg'
        },
        {
            title: 'Overview',
            snippet: 'Bird\'s Eye View Layout',
            image: 'print-media/overview.jpg'
        },
        {
            title: 'RPC Prices',
            snippet: 'Registration Cost',
            image: 'print-media/red-pill-price.png'
        },
        {
            title: 'RPC List',
            snippet: 'Top 10',
            image: 'print-media/red-pill-top-10.png'
        },
        {
            title: 'RPC Cover',
            snippet: 'Poster',
            image: 'print-media/red-pill.jpg'
        },
        {
            title: 'Royal Family',
            snippet: 'Sign',
            image: 'print-media/royal-family.png'
        },
        {
            title: 'RSVP',
            snippet: 'Details',
            image: 'print-media/rsvp-details.jpg'
        },
        {
            title: 'Restaurant Ads - First Set',
            snippet: 'Printed Ads',
            image: 'print-media/taco-wall-1.jpg'
        },
        {
            title: 'Restaurant Ads - Second Set',
            snippet: 'Printed Ads',
            image: 'print-media/taco-wall-2.jpg'
        },
    ]

    for(let i = 0; i < 15; i++){
        imageUlId.insertAdjacentHTML('beforeend', 
        `
        <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
            <div class='image-wrap'>
                <div class='image-item' style="background-image: url(${printObj[i].image});">
                </div>
            </div>
            <div class="circle-wrap">
                <div class="circle-inner">
                    <div class="circle-front">
                        <p class="circle-text">${printObj[i].title}</p>
                    </div>
                    <div class="circle-back">
                        <p class="circle-text">${printObj[i].snippet}</p>
                    </div>
                </div>
            </div>
        </li>
      `
        
        );
    }
});



