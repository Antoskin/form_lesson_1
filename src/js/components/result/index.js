import Timer from './timer';
import { templateCard } from './template';

export class Result {
    constructor({options}) {
        this.options = options
        this.tempate = templateCard
        this.timer  = new Timer(this.options)
    }

    static id = 3
    static className = 'res'

    toHtml() {
        const template = this.tempate()

        template.append(this.timer.toHtml())

        return template;
    }
}