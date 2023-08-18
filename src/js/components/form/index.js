import { getFields, storageController } from "../../utils";
import templateForm from "./template";

export class Form {
    constructor({options}) {
        this.options = options
    }

    static id = 0
    static className = 'reg'

    onSubmit(e) {
        e.preventDefault()

        const { onSave } = storageController();

        const { HashedID } = this.options;

        const { name: { value: name }, surname: { value: lastName } } = getFields(e.target);

        onSave({ HashedID, name, lastName })
        
        this.options.update()
    }

    toHtml() {
        const form = templateForm()

        form.addEventListener('submit', (e) => this.onSubmit(e))

        return form
    }
}