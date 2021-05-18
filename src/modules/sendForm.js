'use strict';

const sendForm = () => {
  const errorMessage = 'Что то пошло не так...',
    loadMessage = `
      <div class="loadingio-spinner-spin-86w69p27foq"><div class="ldio-h8sab6b0wqe">
      <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
      <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
      </div></div>
      <style type="text/css">
      @keyframes ldio-h8sab6b0wqe {
      0% {
        opacity: 1;
        backface-visibility: hidden;
        transform: translateZ(0) scale(1.5,1.5);
      } 100% {
        opacity: 0;
        backface-visibility: hidden;
        transform: translateZ(0) scale(1,1);
      }
    }
    .ldio-h8sab6b0wqe div > div {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ffd11a;
      animation: ldio-h8sab6b0wqe 1s linear infinite;
    }.ldio-h8sab6b0wqe div:nth-child(1) > div {
      left: 75px;
      top: 45px;
      animation-delay: -0.875s;
    }
    .ldio-h8sab6b0wqe > div:nth-child(1) {
      transform: rotate(0deg);
      transform-origin: 80px 50px;
    }.ldio-h8sab6b0wqe div:nth-child(2) > div {
      left: 66px;
      top: 66px;
      animation-delay: -0.75s;
    }
    .ldio-h8sab6b0wqe > div:nth-child(2) {
      transform: rotate(45deg);
      transform-origin: 71px 71px;
    }.ldio-h8sab6b0wqe div:nth-child(3) > div {
      left: 45px;
      top: 75px;
      animation-delay: -0.625s;
    }
    .ldio-h8sab6b0wqe > div:nth-child(3) {
      transform: rotate(90deg);
      transform-origin: 50px 80px;
    }.ldio-h8sab6b0wqe div:nth-child(4) > div {
      left: 24px;
      top: 66px;
      animation-delay: -0.5s;
    }
    .ldio-h8sab6b0wqe > div:nth-child(4) {
      transform: rotate(135deg);
      transform-origin: 29px 71px;
    }.ldio-h8sab6b0wqe div:nth-child(5) > div {
      left: 15px;
      top: 45px;
      animation-delay: -0.375s;
    }
    .ldio-h8sab6b0wqe > div:nth-child(5) {
      transform: rotate(180deg);
      transform-origin: 20px 50px;
    }.ldio-h8sab6b0wqe div:nth-child(6) > div {
      left: 24px;
      top: 24px;
      animation-delay: -0.25s;
    }
    .ldio-h8sab6b0wqe > div:nth-child(6) {
      transform: rotate(225deg);
      transform-origin: 29px 29px;
    }.ldio-h8sab6b0wqe div:nth-child(7) > div {
      left: 45px;
      top: 15px;
      animation-delay: -0.125s;
    }
    .ldio-h8sab6b0wqe > div:nth-child(7) {
      transform: rotate(270deg);
      transform-origin: 50px 20px;
    }.ldio-h8sab6b0wqe div:nth-child(8) > div {
      left: 66px;
      top: 24px;
      animation-delay: 0s;
    }
    .ldio-h8sab6b0wqe > div:nth-child(8) {
      transform: rotate(315deg);
      transform-origin: 71px 29px;
    }
    .loadingio-spinner-spin-86w69p27foq {
      width: 84px;
      height: 84px;
      display: inline-block;
      overflow: hidden;
      background: none;
    }
    .ldio-h8sab6b0wqe {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(0.84);
      backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
    }
    .ldio-h8sab6b0wqe div { box-sizing: content-box; }
    /* generated by https://loading.io/ */
    </style>`,
    successMessage = 'Спасибо! Мы скоро с вами свяжемся',
    thanksBlock = document.getElementById('thanks'),
    message = thanksBlock.querySelector('.form-content p'),
    alertBlock = document.createElement('div'),
    form = document.querySelectorAll('form'),
    input = document.querySelectorAll('form input'),
    inputLetoMozaika = document.getElementById('footer_leto_mozaika'),
    inputLetoShelkovo = document.getElementById('footer_leto_schelkovo'),
    
    clearAlertBlock = () => {
      setTimeout(() => {
        alertBlock.textContent = '';
      }, 3000);
    };
  let formWrapper = document.querySelector('#callback_form');
  let freeVisitForm = document.querySelector('#free_visit_form');

  alertBlock.style.cssText = `
    color: red;
    margin-top: 10px;
    padding: 0 10px;
  `;

  input.forEach((item) => {
    item.addEventListener('input', (event) => {
      const target = event.target;

      if (target.matches('[name=name]') && target.id !== 'promocode') {
        target.value = target.value.replace(/[^а-яё\s]/gi, '');
      }
    });
  });

  form.forEach((item) => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();
      const target = event.target;

      target.appendChild(alertBlock);

      if (target.id !== 'footer_form') {
        for (const elem of target.elements) {
          if (elem.type === 'checkbox' && !elem.checked) {
            alertBlock.textContent = 'Пожалуйста, подтвердите согласие на обработку персональных данных';
            clearAlertBlock();
            return;
          } else if (elem.type === 'tel' && elem.value.length < 18) {
            alertBlock.textContent = 'Введите полный номер телефона';
            clearAlertBlock();
            return;
          } else if (
            elem.type === 'text' &&
            elem.id !== 'promocode' &&
            (elem.value.length < 2 || elem.value.length > 50)
          ) {
            alertBlock.textContent = 'Имя должно состоять как минимум из 2-х символов, максимум 50';
            clearAlertBlock();
            return;
          }
        }
      } else {
        if (!inputLetoMozaika.checked && !inputLetoShelkovo.checked) {
          alertBlock.textContent = 'Пожалуйста, выберите клуб';
          clearAlertBlock();
          return;
        } else {
          for (const elem of target.elements) {
            if (elem.type === 'tel' && elem.value.length < 18) {
              alertBlock.textContent = 'Введите полный номер телефона';
              clearAlertBlock();
              return;
            }
          }
        }
      }

      if (target.matches('#footer_form, #card_order, #banner-form, #form1, #form2')) {
        thanksBlock.style.display = 'block';
       
        message.innerHTML = loadMessage;
        const formData = new FormData(target);
        const body = {};

        formData.forEach((val, key) => {
          body[key] = val;
        });

        const outputData = () => {
          input.forEach((item) => {
            if (item.id !== 'footer_leto_schelkovo' && item.id !== 'footer_leto_mozaika') {
              item.value = '';
            }
          });
          message.textContent = successMessage;
          
        };

        const statusMessageRemove = () => {
           thanksBlock.style.display = 'none';
           formWrapper.style.display = 'none';
           freeVisitForm.style.display = 'none';
        };

        setTimeout(statusMessageRemove, 1000);
        postData(body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error('status network not 200');
            }
            outputData();
          })
          .catch((error) => {
            message.textContent = errorMessage;
            console.error(error);
          });
      }
    });
  });

  const postData = (body) =>
    fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
};

export default sendForm;
