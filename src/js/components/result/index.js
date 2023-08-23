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

    drawQr(template, wallet) {
        const canvas = templateCanvas();    
        template.prepend(canvas)
        generateQRCode(canvas, wallet)

        return {wallet}
        
    }

    toHtml() {
        const template = this.tempate();

        template.append(this.timer.toHtml());

        const {wallet} = this.options

        wallet && this.drawQr(template, wallet);

        return template;
    }
}