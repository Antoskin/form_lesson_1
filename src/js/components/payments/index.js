import templatePayments from "./template"

export class Payments {
    constructor({options}) {
        this.options = options
        this.template = templatePayments;

        console.log(Payments.id)

        this.onClick = this.onClick.bind(this)
    }

    static id = 1
    static className = 'pay'

    onClick({ target }) {
        this.options.paymentType = target.dataset.id;
        this.options.update()
    }

    toHtml() {
        return this.template()
    }
}