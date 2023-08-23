import { millisToMinutesAndSeconds } from "../../utils";

export function templateCard() {

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

export const templateTimer = (time) => {
    const root = document.createElement('div');
    root.classList.add('timer')
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
