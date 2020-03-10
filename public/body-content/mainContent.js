
document.addEventListener("DOMContentLoaded", function(event) { 
    mainContent = () => {
        const portfolioBody = document.querySelector('.portfolio-body');

        const mainContainer =       
        `<article class='main'>
            <div class='container'>
                <ul id='image-ul-id' class='row image-ul'>

                </ul>
            </div>
        </article>`;
        portfolioBody.insertAdjacentHTML('beforeend', mainContainer);
    }
    mainContent()
  });

  

