const popupVisit = (e) => {
    const visitFormBtn = document.querySelector('.open-popup');
    const callBackForm = document.querySelector('#callback_form')
    const freeVisitForm = document.querySelector('#free_visit_form');
    const thanksBlock = document.getElementById('thanks');
    const body = document.querySelector('body');

    const visitForm = (e) => {
        let target = e.target;
        if (target.matches('.free-visit>p>a')) {
            // при клике по надписи "записаться на бесплатный визит" открывается модальное окно
            freeVisitForm.style.display = 'block';
        } else if (target.matches('.overlay, .close_icon')) {
            // при клике на подложку или крестик - модальное окно закрывается
            freeVisitForm.style.display = 'none';
        }

        if (target.matches('.callback-btn')) {
            callBackForm.style.display = 'block'
        } else if (target.matches('.overlay, .close_icon, .close-btn')) {
            callBackForm.style.display = 'none';
            thanksBlock.style.display = 'none';
        }
    }
    body.addEventListener('click', visitForm);
}


export default popupVisit;