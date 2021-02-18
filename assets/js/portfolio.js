document.getElementById('menu-toggle').onchange = () => {
    const hamburger = document.getElementById('menu-toggle').checked;
    const menu = document.getElementById('menu');
    if(hamburger){
        menu.classList.remove('smartphone:hidden');
        menu.classList.add('smartphone:block');
    }
    else{
        menu.classList.remove('smartphone:block');
        menu.classList.add('smartphone:hidden');
    }
}