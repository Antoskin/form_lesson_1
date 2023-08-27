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



export default { templateForm };