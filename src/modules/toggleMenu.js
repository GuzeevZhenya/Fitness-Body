const toggleMenu = () => {
    const body = document.querySelector('body');
    const menuBtn = document.querySelector('.menu-button')
    const popupMenu = document.querySelector('.popup-menu')



    menuBtn.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    })
    popupMenu.addEventListener('click', (e) => {
        let target = e.target;
        if (target.matches('.close-menu-btn img, .scroll a, .popup-menu')) {
            popupMenu.style.display = 'none';
        }
    })

    // const handleMenu = (e) => {
    //     let target = e.target;
    //     if (target.matches('.menu-button img')) {
    //         menuItems.style.display = 'flex';
    //     } else {
    //         console.log(2);
    //     }
    // }



    // body.addEventListener('click', handleMenu);
}

export default toggleMenu;