const toggleClub = (e) => {
    const clubItems = document.querySelector('.club-items');
    const body = document.querySelector('body');

    body.addEventListener('click', (e) => {
        let target = e.target;
        if (target.matches('.clubs-list>p') && clubItems.style.display == 'none') {
            clubItems.style.display = 'block';
        } else if (target.matches('.clubs-list>p')  ) {
            clubItems.style.display = 'none';
        }
    })

}

export default toggleClub;