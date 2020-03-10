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
                <li><a href="../public/index.html"><span style="color:transparent";>------</span>HOME<span style="color:transparent";>------</span></a></li>
                <li><a href="../public/calligraphy.html"><span>CALLIGRAPHY</span></a></li>
                <li><a href="../public/web-mobile.html">WEB / MOBILE</a></li>
                <li><a href="../public/print-media.html">PRINT MEDIA</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>`;
        portfolioBody.insertAdjacentHTML('beforeend', navBar);
    }

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const greyBackground = document.querySelector('.grey-background');
    
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            nav.classList.toggle('toggle-shadow')
    
            navLinks.forEach((link, index) => {
                if(link.style.animation){
                    // click off
                    link.style.animation = '';
                } else {
                    // after click
                    link.style.animation = `navLinkFade 0.4s ease forwards ${index/7 + 0.5 }s`
                }
            })
    
            // burger animation
            burger.classList.toggle('toggle');
            greyBackground.classList.toggle('hide-class');
        });
    }

    const runNav = () => {
        navigationComponent();
        navSlide();
    }

    runNav();

  });