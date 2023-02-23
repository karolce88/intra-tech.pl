const btn = document.querySelector('.button-click')
const msg = document.querySelector('.msg')

function showButton () {
    msg.classList.add('msg-show')
}

btn.addEventListener('click', showButton)