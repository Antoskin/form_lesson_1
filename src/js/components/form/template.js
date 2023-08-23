export const templateForm = () => {
    const $form = document.createElement('form')
    $form.classList.add('form')

    $form.innerHTML = (`
        <input type="text" name="email" class=" form-control mb-3" placeholder="email" required />
        <input type="text" name="name" class=" form-control mb-3" placeholder="name" required />
        <input type="text" name="surname" class=" form-control mb-3" placeholder="last name" required />
        <button class=" btn btn-info">Submit</button>
    `)
    
    return $form;
}

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

export default { templateForm, templateModal };