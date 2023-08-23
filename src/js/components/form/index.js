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
        
        const { name: { value: name }, surname: { value: lastName }, email: { value: email } } = getFields(e.target);
        
        const { HashedID } = this.options;
        const { onSave } = storageController();
        
        const { isError } = onSave({ HashedID, name, lastName, email })

        const modal = getModal({root: this.form, template})

        modal.onShow({
            text: isError ? isError : 'success !!!!', 
            onClose: isError ? () => modal.onCLose(): () => this.options.update() 
        })
    }

    toHtml() {
        this.form = templateForm()

        this.form.addEventListener('submit', (e) => this.onSubmit(e))

        return this.form
    }
}