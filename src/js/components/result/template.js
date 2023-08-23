import { millisToMinutesAndSeconds } from "../../utils";

export function templateCard() {

    const {HashedID, paymentType, amount, cardNumber, wallet} = this.options;

    const wrap = document.createElement('ul')
    wrap.classList.add('list-group')

    const _html = (`
        <li class="list-group-item">User ID: <span class="fw-bold fs-5">${HashedID}</span></li>
        <li class="list-group-item">Payment type: <span class="fw-bold fs-5">${paymentType}</span></li>
        <li class="${wallet ? 'list-group-item': 'd-none'}">Wallet: <span class="fw-bold fs-5">${wallet}</span></li>
        <li class="list-group-item">Amount: <span class="fw-bold fs-5">${amount}</span></li>
        <li class="${cardNumber ? 'list-group-item': 'd-none'}">Card number: <span class="fw-bold fs-5">${cardNumber}</span></li>
    `);

    wrap.innerHTML = _html

    return wrap;
}

export const templateTimer = (time) => {
    const root = document.createElement('div');
    root.classList.add('timer')
    root.classList.add('mt-3')

    root.innerText = 'This invoice will expire in ';

    const timer = document.createElement('span')
    timer.innerText = millisToMinutesAndSeconds(time)

    root.append(timer)
    

    return {root, timer};
} 

export const templateCanvas = () => {
    const canvas = document.createElement('canvas');

    return canvas
}
