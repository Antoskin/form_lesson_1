import { templateModal } from "./template";
import { getModal } from "../../utils";

export class Modal {
    constructor(root, options) {
        this.root = root;
        this.update = options?.update;
    }

    onOpen(isError) {
        
        const { onShow, onCLose } = getModal({ 
            root: this.root,
            template: templateModal
        })

        onShow({ 
            text: isError ? isError : 'success !!!!', 
            onClose: isError ? onCLose: this.update//this.options.update
        })
    }
}