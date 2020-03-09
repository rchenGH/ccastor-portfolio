document.addEventListener("DOMContentLoaded", function(event) { 
    const navigationComponent = () => {
        const portfolioBody = document.querySelector('.portfolio-body');
        const navBar =       
        `<nav class='portfolio-nav'>
            <div class='grey-background hide-class'></div>
            <div class='logo'>
                <h4>Cyndi Castor</h4>
            </div>
            <ul class='nav-links toggle-shadow'>
                <li><a href="#">HOME</a></li>
                <li><a href="#">CALLIGRAPHY</a></li>
                <li><a href="#">WEB / MOBILE</a></li>
                <li><a href="#">PRINT MEDIA</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>`;
        portfolioBody.innerHTML += navBar;
    }

    navigationComponent()

  });