import templateCard from './template';

export class Result {
    constructor({options}) {
        this.options = options
        this.tempate = templateCard
    }

    static id = 3
    static className = 'res'

    toHtml() {
        const template = this.tempate()

        return template;
    }
}