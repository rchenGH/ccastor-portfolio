
document.addEventListener("DOMContentLoaded", function(event) { 
    homeContent = () => {
        const portfolioBody = document.querySelector('.portfolio-body');

        const homeContainer =       
        `<article class='main'>
            <div class='container home-container'>
            </div>
        </article>`;
        portfolioBody.insertAdjacentHTML('beforeend', homeContainer);
    }
    homeContent()
  });

  

