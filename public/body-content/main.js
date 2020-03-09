document.addEventListener("DOMContentLoaded", function(event) { 
    const mainComponent = () => {
        const portfolioBody = document.querySelector('.portfolio-body');
        const main =       
        `<article class='main'>
            <div class='container'>
                <ul class='row image-ul'>
                </div>
            </div>
        </article>`;
        portfolioBody.innerHTML += main;
    }
    mainComponent()

  });