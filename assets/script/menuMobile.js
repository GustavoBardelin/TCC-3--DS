
const btnToggle = document.querySelector('.menuToggle');
const bgMenuActive = document.querySelector('.bgMenuActive');
const menuLinksWrapper = document.querySelector('.menu-link-wrapper');
const linksMenu = document.querySelector('.menu-link-wrapper').querySelectorAll('a');


btnToggle.addEventListener('click', () =>{
    AcaoMenuMobile();
});


const AcaoMenuMobile = () => {
    
    btnToggle.classList.toggle('active');
    bgMenuActive.classList.toggle('active');
    menuLinksWrapper.classList.toggle('menuMobileActive');

}

linksMenu.forEach((item) =>{

    item.addEventListener('click', () =>{
        AcaoMenuMobile();
    })
})