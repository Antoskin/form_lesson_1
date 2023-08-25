import templateAmount from './template';
import { getFields } from '../../utils';
import { fetchWallet } from '../../actions';
 
export class Amount {
    constructor({ options }) {
        this.options = options
        this.template = templateAmount

        this.onSubmit = this.onSubmit.bind(this)
    }

    static id = 2
    static className = 'amt'

    onSubmit(e) {
        e.preventDefault()

        const { amount: { value }, cardNumber} = getFields(e.target)

        this.options.amount = value;

        cardNumber ? 
            (this.options.cardNumber = cardNumber.value) : 
            (this.options.wallet = fetchWallet())

        this.options.update()
    }

    toHtml() {
        return this.template()
    }
}
