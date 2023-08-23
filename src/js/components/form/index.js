import { getFields, storageController, getModal } from "../../utils";
import {templateForm, templateModal as template} from "./template";




export class Form {
    constructor({options}) {
        this.options = options
        this.form = null;
    }

    static id = 0
    static className = 'reg'

    onSubmit(e) {
        e.preventDefault()

        const { onSave } = storageController();

        const { HashedID } = this.options;

        const { name: { value: name }, surname: { value: lastName } } = getFields(e.target);

        onSave({ HashedID, name, lastName })
        

        const options = { 
            root: this.form, 
            template,
            text: 'success !!!!', 
            onClose: () => this.options.update() 
        }

        const modal = getModal(options)

        modal.onShow()
    }

    toHtml() {
        this.form = templateForm()

        this.form.addEventListener('submit', (e) => this.onSubmit(e))

        return this.form
    }
}