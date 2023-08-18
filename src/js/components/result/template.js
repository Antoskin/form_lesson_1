
function templateCard() {

    const {HashedID, paymentType, amount, cardNumber} = this.options;

    const wrap = document.createElement('div')
    wrap.classList.add('card')

    const _html = (`
        <div>User ID: <span>${HashedID}</span></div>
        <div>Payment type: <span>${paymentType}</span></div>
        <div>Amount: <span>${amount}</span></div>
        <div class="${cardNumber || 'd-none'}">Card number: <span>${cardNumber}</span></div>
    `);

    wrap.innerHTML = _html

    return wrap;
}

export default templateCard;