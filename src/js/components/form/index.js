import templateForm from "./template";

export class Form {
    constructor() {

    }

    static id = 0
    static className = 'reg'

    onSubmit(e) {
        e.preventDefault()

    }

    toHtml() {
        const form = templateForm()

        form.addEventListener('submit', (e) => this.onSubmit(e))

        return form
    }
}