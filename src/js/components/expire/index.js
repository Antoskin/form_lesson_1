import templateExpired from "./template"

export class Expire {
    constructor() {
        
    }

    static id = 4
    static className = 'exp'

    toHtml() {
        return templateExpired()
    }
}
