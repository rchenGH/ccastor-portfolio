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

    //Animate Links

}

  navSlide();
