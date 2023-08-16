import templatePayments from "./template"

export class Payments {
    constructor({options}) {
        this.options = options

    }

    static id = 1
    static className = 'pay'

    onClick({ target }) {
        this.options.card = target.dataset.id;
        this.options.update()
    }

    toHtml() {
        const payments = templatePayments()

        payments.addEventListener('click', this.onClick.bind(this))

        return payments
    }
}