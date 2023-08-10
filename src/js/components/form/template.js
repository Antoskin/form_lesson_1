const templateForm = () => {
    const $form = document.createElement('form')
    $form.classList.add('form')

    $form.innerHTML = (`
        <input type="text" name="name" class="form_field" placeholder="name" required />
        <input type="text" name="surname" class="form_field" placeholder="last name" required />
        <button class="form_submit">submit<button/>
    `)
    
    return $form;
}

export default templateForm;