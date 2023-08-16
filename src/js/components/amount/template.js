const templateAmount = () => {
    const wrap = document.createElement('form')
    wrap.classList.add('amount')

    wrap.innerHTML = (`
        <input type="number" name="amount" placeholder="" required />
        <button>submit</button>
    `)

    return wrap

}

export default templateAmount;