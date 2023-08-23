import templateAmount from './template';
import { getFields } from '../../utils';
import { fetchWallet } from '../../actions';
 
export class Amount {
    constructor({ options }) {
        this.options = options
        this.template = templateAmount
    }

    static id = 2
    static className = 'amt'

    onSubmit(e) {
        e.preventDefault()
        
        const { amount: { value }, cardNumber} = getFields(e.target)

        this.options.amount = value;

        if (cardNumber) {
            this.options.cardNumber = cardNumber.value
        } else {
            this.options.wallet = fetchWallet()
        }

        this.options.update()
    }

    toHtml() {
        const $amount = this.template();

        $amount.addEventListener('submit', this.onSubmit.bind(this))

        return $amount
    }
}
