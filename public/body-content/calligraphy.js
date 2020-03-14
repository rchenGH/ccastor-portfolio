document.addEventListener("DOMContentLoaded", function(event) { 
    let imageUlId = document.querySelector('#image-ul-id');
    let calligraphyObj = [
        {    
            title: 'Be Someone',
            snippet: 'Pentel sign pen',
            description: 'Modern Calligraphy - Pentel sign pen',
            image: 'calligraphy/small/be-someone.jpg'
        },
        {    
            title: 'Walnut Ink',
            snippet: 'Pointed Pen Copperplate',
            description: 'Walnut Ink - Pointed Pen Copperplate',
            image: 'calligraphy/small/walnut-ink.jpg'
        },
        {    
            title: 'Candy',
            snippet: 'Walnut Ink',
            description: 'Walnut Ink - Copperplate.',
            image: 'calligraphy/small/candy.jpg'
        },
        {    
            title: 'Give Goodness',
            snippet: 'Gothic broad pen calligraphy',
            description: 'Gothic broad pen calligraphy - Pilot Parallel',
            image: 'calligraphy/small/give-goodness.jpg'
        },
        {    
            title: 'Homer Simpson',
            snippet: 'Pink Water Color',
            description: 'Pink Water Color - Pointed Pen copperplate',
            image: 'calligraphy/small/homer-simpson.jpg'
        },
        {    
            title: 'Love Letter',
            snippet: 'Sumi Ink',
            description: 'Sumi Ink - Pointed Pen Copperplate',
            image: 'calligraphy/small/love-letter.png'
        },
        {    
            title: 'Pearl',
            snippet: 'Sumi ink',
            description: 'Sumi Ink - Spencerian',
            image: 'calligraphy/small/pearl.jpg'
        },
        {    
            title: 'Rainbow Ink',
            snippet: 'Watercolor',
            description: 'Watercolor - Pointed Pen Copperplate',
            image: 'calligraphy/small/rainbow-ink.png'
        },
        {    
            title: 'Traditional v Modern',
            snippet: 'Copperplate and Traditional',
            description: 'Traditional Copperplate and Modern Calligraphy',
            image: 'calligraphy/small/traditional-modern.jpg'
        },
    ]

    for(let i = 0; i < calligraphyObj.length; i++){
        imageUlId.insertAdjacentHTML('beforeend', 
        `
        <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
            <div class="card-wrap image-wrap">
                <div class="card-inner">
                    <div class="card-front image-item" style="background-image: url(${calligraphyObj[i].image});">
                    </div>
                    <div class="card-back" style="background-image: url('images/spiration-light.png')";>
                        <p class="card-title">${calligraphyObj[i].title.toUpperCase()}</p>
                        <hr class="hr-line"/>
                        <p class="card-snippet">${calligraphyObj[i].snippet.toLowerCase()}</p>
                    </div>
                </div>
            </div>
        </li>
      `
        );
    }
});



