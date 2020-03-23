document.addEventListener("DOMContentLoaded", function(event) { 
    let homeContainer = document.querySelector('.home-container');

    function content(){
        homeContainer.insertAdjacentHTML('beforeend',
            `
            <div class="loader-wrapper">
                <span class="loader"><span class="loader-inner"></span></span>
            </div>
            <div class="home-wrapper container">
                <div class="name-text row name-animation">
                    Cyndi Castor
                </div>

                <hr class="home-hr home-hr-1 name-animation">
                <hr class="home-hr home-hr-2 hr-2-animation">
                
                <div class='home-snippet snippet-animation'>
                    graphic design & calligraphy
                </div>

                <div class='home-snippet snippet-animation'>
                    <button class="contact-btn">
                        <a href="mailto:ccastor323@gmail.com">
                            CONTACT
                        </a>
                    </button>
                </div>
                
                <div class="home-snippet row">
                    <div class="column-2-md">
                    </div>
                </div>

            </div>
          `
        );
    }
    content();
})
