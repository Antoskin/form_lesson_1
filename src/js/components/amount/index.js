import templateAmount from './template';

class Amount {
    constructor({options}) {
        this.options = options
    }

    static id = 2
    static className = 'amt'

    onSubmit(e) {
        e.preventDefault()
        
        const data = new FormData(e.target)

        this.options.amount = data.get('amount');

        this.options.update()
    }

    toHtml() {
        const $amount = templateAmount();

        $amount.addEventListener('submit', this.onSubmit.bind(this))

        return $amount
    }
}

export default Amount;