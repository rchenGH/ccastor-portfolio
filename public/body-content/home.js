document.addEventListener("DOMContentLoaded", function(event) { 
    let homeContainer = document.querySelector('.home-container');

    function content(){
        homeContainer.insertAdjacentHTML('beforeend',
            `
            <div>
                <div class="name-text">
                    CYNDI CASTOR
                </div>

                <hr class="home-hr home-hr-1">
                <hr class="home-hr home-hr-2">
                
                <div class="home-snippet">
                    graphic design & calligraphy
                </div>

            </div>
          `
        );
    }
    content();
})
    // <img class="home-img" src="calligraphy/large/pearl.jpg" />
    // <div class="overlay"></div>