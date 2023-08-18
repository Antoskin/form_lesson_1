import templateCard from './template';

export class Result {
    constructor({options}) {
        this.options = options
    }

    static id = 3
    static className = 'res'

    toHtml() {

        console.log(this.options)

        const template = templateCard()

        return template;
    }
}