const toggleMenu = () => {
    const menuBtn = document.querySelector('.menu-button')
    const popupMenu = document.querySelector('.popup-menu')

    menuBtn.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    })
    popupMenu.addEventListener('click', (e) => {
        let target = e.target;
        if (target.matches('.close-menu-btn img, .scroll a')) {
            popupMenu.style.display = 'none';
        }
    })

}

export default toggleMenu;