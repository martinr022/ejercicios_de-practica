const menuHam= document.querySelector('.menu-ham-btn');
const menu_Aside= document.querySelector('.menu-lateral');
menuHam.addEventListener("click",mostrar_aside_menu);

function mostrar_aside_menu(){
    menu_Aside.classList.toggle("inactive")
};