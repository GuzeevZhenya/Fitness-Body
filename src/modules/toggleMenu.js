const toggleMenu = () => {
    const menuBtn = document.querySelector('.menu-button')
    const popupMenu = document.querySelector('.popup-menu')
    const anchors = document.querySelectorAll('.scroll-link');

    //  Плавная прокрутка
    anchors.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = item.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        })
    })
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