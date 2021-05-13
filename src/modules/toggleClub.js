const toggleClub = (e) => {
    const toggleBtn = document.querySelector('.club-select');
    const clubItems = document.querySelector('.club-items')

    toggleBtn.addEventListener('click', () => {
        if (getComputedStyle(clubItems).display == 'none') {
            clubItems.style.display = 'block';
        } else {
            clubItems.style.display = 'none';
        }

    })
    console.log(toggleBtn)
}

export default toggleClub;