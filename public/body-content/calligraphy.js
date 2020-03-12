document.addEventListener("DOMContentLoaded", function(event) { 
    let imageUlId = document.querySelector('#image-ul-id');
    let calligraphyObj = [
        {    
            title: '3d Images',
            snippet: 'Frame by Frame Ad',
            image: 'web-mobile/3d-images.gif'
        },
    ]

    for(let i = 0; i < 15; i++){
        imageUlId.insertAdjacentHTML('beforeend', 
        `
        <li class="image-list column-12-xs column-6-sm column-4-md column-3-lg column-3-xl column-2-xxl">
            <div class="card-wrap image-wrap">
                <div class="card-inner">
                    <div class="card-front image-item" style="background-image: url(${calligraphyObj[i].image});">
                    </div>
                    <div class="card-back" style="background-image: url('images/spiration-light.png');>
                        <p class="card-text">${calligraphyObj[i].title}</p>
                        <p class="card-text">${calligraphyObj[i].description}</p>
                    </div>
                </div>
            </div>
        </li>
      `
        
        );
    }
});



