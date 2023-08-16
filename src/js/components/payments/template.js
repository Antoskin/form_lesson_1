import './style.scss';

const payList = [
    {
        id: 'visa',
        name: 'Visa'
    },
    {
        id: 'mc',
        name: 'Master Card'
    },
]

const templatePayments = () => {
    const payment = document.createElement('div')
    payment.classList.add('payments')

    payList.forEach(({id, name}) => {
        const card = document.createElement('div')
        card.classList.add('payments_card')

        card.innerHTML = (`
            <div class="payments_card__wrap" data-id="${id}">
                <div class="payments_card__ico">ico</div>
                <div class="payments_card__name">${name}</div>
            </div>
        `)

        payment.append(card)
    })

    return payment;
    
}

export default templatePayments;