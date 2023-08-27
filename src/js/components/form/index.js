import { Modal } from "../modal";
import { getFields, storageController } from "../../utils";
import {templateForm} from "./template";

class Form extends Modal {
    constructor({root, options}) {
        super(root, options)
        this.options = options
    }

    static id = 0
    static className = 'reg'


    onSubmit(e) {
        e.preventDefault()
        
        const { name: { value: name }, surname: { value: lastName }, email: { value: email } } = getFields(e.target);
        
        const { HashedID } = this.options;
        const { onSave } = storageController();
        
        const { isError } = onSave({ HashedID, name, lastName, email })
        
        super.onOpen(isError)
    }

    toHtml() {
        const form = templateForm()

        form.addEventListener('submit', (e) => this.onSubmit(e))

        return form
    }
}

export default Form;