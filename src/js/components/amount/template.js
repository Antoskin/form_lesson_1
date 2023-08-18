function templateAmount() {
    const wrap = document.createElement('form')
    wrap.classList.add('amount')

    const { paymentType } = this.options

    wrap.innerHTML = (`
        <input type="number" name="amount" placeholder="amount" required />
        <button>submit</button>
    `)

    if (paymentType === 'card') {
        const _number = document.createElement('input');

        Object.assign(_number, {
            type: 'number',
            name: 'cardNumber',
            placeholder: "xxxx xxxx xxxx xxxx",
            required: true,
        })




        wrap.prepend(_number)
    }

    return wrap

}

export default templateAmount;