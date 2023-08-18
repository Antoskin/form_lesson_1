import templateAmount from './template';
import { getFields } from '../../utils';
 
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

        cardNumber && ( this.options.cardNumber = cardNumber.value);

        this.options.update()
    }

    toHtml() {
        const $amount = this.template();

        $amount.addEventListener('submit', this.onSubmit.bind(this))

        return $amount
    }
}
