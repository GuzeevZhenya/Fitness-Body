const gift = () => {
    const gift = document.querySelector('#gift');
    const body = document.querySelector('body');
    const giftImg = document.querySelector('.fixed-gift')
    if (gift) {
        body.addEventListener('click', (e) => {
            const target = e.target;

            if (target.matches('.fixed-gift img')) {
                console.log(1)
                gift.style.display = 'block';
                giftImg.style.display = 'none'
            } else if (target.matches('.overlay,.close_icon')) {
                gift.style.display = 'none';
            }
        })

    }
}


export default gift;