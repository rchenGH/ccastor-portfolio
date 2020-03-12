document.addEventListener("DOMContentLoaded", function(event) { 
    let imageUlId = document.querySelector('#image-ul-id');
    let printObj = [
        {    
            title: '6th-Street',
            description: 'Front and back',
            image: 'print-media/6th-street-shirt.jpg'
        },
        {
            title: 'Gogol',
            description: 'Brochure',
            image: 'print-media/coldwell-gogol.jpg'
        },
        {
            title: 'Kaprielian',
            description: 'Brochure',
            image: 'print-media/coldwell-kaprielian.jpg'
        },
        {
            title: 'Floors',
            description: 'Overhead view',
            image: 'print-media/floors.jpg'
        },
        {
            title: 'Fourth Meal',
            description: 'Restaurant Ad',
            image: 'print-media/fourthmeal.jpg'
        },
        {
            title: 'Invitation',
            description: 'Wedding Invitation',
            image: 'print-media/invitation.jpg'
        },
        {
            title: 'Overview',
            description: 'Bird\'s Eye View Layout',
            image: 'print-media/overview.jpg'
        },
        {
            title: 'RPC Prices',
            description: 'Registration Cost',
            image: 'print-media/red-pill-price.png'
        },
        {
            title: 'RPC List',
            description: 'Top 10',
            image: 'print-media/red-pill-top-10.png'
        },
        {
            title: 'RPC Cover',
            description: 'Poster',
            image: 'print-media/red-pill.jpg'
        },
        {
            title: 'Royal Family',
            description: 'Sign',
            image: 'print-media/royal-family.png'
        },
        {
            title: 'RSVP',
            description: 'Details',
            image: 'print-media/rsvp-details.jpg'
        },
        {
            title: 'Restaurant Ads - First Set',
            description: 'Printed Ads',
            image: 'print-media/taco-wall-1.jpg'
        },
        {
            title: 'Restaurant Ads - Second Set',
            description: 'Printed Ads',
            image: 'print-media/taco-wall-2.jpg'
        },
    ]

    for(let i = 0; i < 15; i++){
        imageUlId.insertAdjacentHTML('beforeend', 
        `
        <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
            <div class="card-wrap image-wrap">
                <div class="card-inner">
                    <div class="card-front image-item" style="background-image: url(${printObj[i].image});">
                    </div>
                    <div class="card-back" style="background-image: url('images/spiration-light.png');>
                        <p class="card-text">${printObj[i].title}</p>
                        <p class="card-text">${printObj[i].description}</p>
                    </div>
                </div>
            </div>
        </li>
      `
        
        );
    }
});



