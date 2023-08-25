import IMask from "imask"

function templateAmount() {
    const wrap = document.createElement('form')

    Object.assign(wrap, {
        className: 'amount d-flex align-items-center'
    })

    const { paymentType } = this.options

    wrap.innerHTML = (`
        <span class="me-3">
            <input type="number" class="form-control" name="amount" placeholder="amount" required />
        </span>
        <button class="btn btn-info right">Submit</button>
    `)

    if (paymentType === 'card') {
        const _number = document.createElement('input');

        Object.assign(_number, {
            name: 'cardNumber',
            className: 'form-control me-3',
            placeholder: "0000-0000-0000-0000",
            required: true,
        })

        IMask(_number, { mask: '0000-0000-0000-0000' })

        wrap.prepend(_number)    
    }
    

    return wrap

}

export default templateAmount;