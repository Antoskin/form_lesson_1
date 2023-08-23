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
            type: 'number',
            name: 'cardNumber',
            className: 'form-control me-3',
            placeholder: "xxxx xxxx xxxx xxxx",
            required: true,
        })




        wrap.prepend(_number)
    }

    return wrap

}

export default templateAmount;