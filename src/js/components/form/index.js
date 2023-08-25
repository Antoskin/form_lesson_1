import { getFields, storageController, getModal } from "../../utils";
import {templateForm, templateModal as template} from "./template";

export class Form {
    constructor({options}) {
        this.options = options
        this.form = null;
    }

    static id = 0
    static className = 'reg'

    showModal(isError) {
        const {onShow, onCLose} = getModal({root: this.form, template})

        onShow({
            text: isError ? isError : 'success !!!!', 
            onClose: isError ? onCLose: this.options.update
        })
    }

    onSubmit(e) {
        e.preventDefault()
        
        const { name: { value: name }, surname: { value: lastName }, email: { value: email } } = getFields(e.target);
        
        const { HashedID } = this.options;
        const { onSave } = storageController();
        
        const { isError } = onSave({ HashedID, name, lastName, email })
        
        this.showModal(isError)
    }

    toHtml() {
        this.form = templateForm()

        this.form.addEventListener('submit', (e) => this.onSubmit(e))

        return this.form
    }
}