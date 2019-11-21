
const navSlide = () => {
    const burger = document.querySelector('.burger'); //media menu
    const nav = document.querySelector('.options'); //slider
    const navLinks = document.querySelectorAll('.options li'); //every list item in my nav

    
    //nav animation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
    //Option animation ease in
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.1}s`;
            }
        })

    })
    
    
    
}
navSlide();

// close hamburger menu after click a
$( '.options li a' ).on("click", function(){
  $('.burger').click();
});