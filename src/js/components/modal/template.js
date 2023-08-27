export const templateModal = ({text, onClose}) => {
    const modal = document.createElement('div')
    modal.classList.add('mdl')
    modal.classList.add('shadow')

    modal.innerHTML = `<div class="body-text">${text}</div>`;

    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.classList.add('btn-primary')
    btn.innerText = 'Okay :)'
    btn.addEventListener('click', onClose)

    modal.append(btn)

    return modal;
}