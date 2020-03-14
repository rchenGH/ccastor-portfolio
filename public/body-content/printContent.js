document.addEventListener("DOMContentLoaded", function(event) { 
    let imageUlId = document.querySelector('#image-ul-id');
    let printObj = [
        {    
            title: '6th-Street',
            description: 'Front and back',
            image: 'print-media/small/6th-street-shirt.jpg'
        },
        {
            title: 'Gogol',
            description: 'Brochure',
            image: 'print-media/small/coldwell-gogol.jpg'
        },
        {
            title: 'Fourth Meal',
            description: 'Restaurant Ad',
            image: 'print-media/small/fourthmeal.jpg'
        },
        {
            title: 'Kaprielian',
            description: 'Brochure',
            image: 'print-media/small/coldwell-kaprielian.jpg'
        },
        {
            title: 'Royal Family',
            description: 'Sign',
            image: 'print-media/small/royal-family.png'
        },
        {
            title: 'Floors',
            description: 'Overhead view',
            image: 'print-media/small/floors.jpg'
        },
        {
            title: 'Invitation',
            description: 'Wedding Invitation',
            image: 'print-media/small/invitation.jpg'
        },
        {
            title: 'Overview',
            description: 'Bird\'s Eye View Layout',
            image: 'print-media/small/overview.jpg'
        },
        {
            title: 'RPC List',
            description: 'Top 10',
            image: 'print-media/small/red-pill-top-10.png'
        },
        {
            title: 'RPC Cover',
            description: 'Poster',
            image: 'print-media/small/red-pill.jpg'
        },
        {
            title: 'RSVP',
            description: 'Details',
            image: 'print-media/small/rsvp-details.jpg'
        },
        {
            title: 'Restaurant Ads - First Set',
            description: 'Printed Ads',
            image: 'print-media/small/taco-wall-1.jpg'
        },
        {
            title: 'RPC Prices',
            description: 'Registration Cost',
            image: 'print-media/small/red-pill-price.png'
        },
        {
            title: 'Restaurant Ads - Second Set',
            description: 'Printed Ads',
            image: 'print-media/small/taco-wall-2.jpg'
        },
    ]

    for(let i = 0; i < printObj.length; i++){
        imageUlId.insertAdjacentHTML('beforeend', 
        `
        <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
            <div class="card-wrap image-wrap">
                <div class="card-inner">
                    <div class="card-front image-item" style="background-image: url(${printObj[i].image});">
                    </div>
                    <div class="card-back" style="background-image: url('images/spiration-light.png')";>
                        <p class="card-title">${printObj[i].title.toUpperCase()}</p>
                        <hr class="hr-line"/>
                        <p class="card-snippet">${printObj[i].description.toLowerCase()}</p>
                    </div>
                </div>
            </div>
        </li>
      `
        
        );
    }
});



