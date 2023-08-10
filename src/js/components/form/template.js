const templateForm = () => {
    const $form = document.createElement('form')
    $form.classList.add('form')

    $form.innerHTML = (`
        <input type="text" name="name" class="form_field" placeholder="name" />
        <input type="text" name="surname" class="form_field" placeholder="last name" />
    `)
    
    return $form;
}

export default templateForm;