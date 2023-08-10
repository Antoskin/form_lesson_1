import templatePayments from "./template"

export class Payments {
    constructor() {

    }

    static id = 1
    static className = 'pay'

    toHtml() {
        const payments = templatePayments()

        return payments()
    }
}