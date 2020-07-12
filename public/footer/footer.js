document.addEventListener("DOMContentLoaded", function(event){
    const footerCompontent = () => {
        const portfolioBody = document.querySelector('.portfolio-body');
        const footer =
        `<div class="footer">
            <div class="footer-content">© 2020 Design & Build by <a href="https://www.rchen.ca">Raymond Chen</a></div>
        </div>`;
        portfolioBody.insertAdjacentHTML('beforeend', footer);
    }

    footerCompontent();

})