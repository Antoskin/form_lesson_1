import Timer from './timer';
import { templateCard, templateCanvas } from './template';
import { generateQRCode } from '../../utils';

export class Result {
    constructor({options}) {
        this.options = options
        this.tempate = templateCard
        this.timer  = new Timer(this.options)
    }

    static id = 3
    static className = 'res'

    drawQr(template) {
        const canvas = templateCanvas();    
        template.prepend(canvas)
        generateQRCode(canvas)
    }

    toHtml() {
        const template = this.tempate();

        template.append(this.timer.toHtml());

        this.options.paymentType === 'crypto' && this.drawQr(template);

        return template;
    }
}