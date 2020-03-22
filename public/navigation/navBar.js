document.addEventListener("DOMContentLoaded", function(event) { 
    const navigationComponent = () => {
        const portfolioBody = document.querySelector('.portfolio-body');
        const navBar =       
        `<nav class='portfolio-nav'>
            <div class='grey-background hide-class'></div>
            <div class='logo'>
                <div>Cyndi Castor</div>
            </div>
            <ul class='nav-links toggle-shadow'>
                <li class="nav-link"><a href="index.html" class="link-text"><span style="color:transparent";>------</span>HOME<span style="color:transparent";>------</span></a></li>
                <li class="nav-link">
                    <a href="calligraphy.html" class="link-text">CALLIGRAPHY</a>
                </li>
                <li class="nav-link">
                    <a href="web-mobile.html" class="link-text">WEB / MOBILE</a>
                </li>
                <li class="nav-link">
                    <a href="print-media.html" class="link-text">PRINT MEDIA</a>
                </li>
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