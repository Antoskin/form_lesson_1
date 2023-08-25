import templateExpired from "./template"

export class Expire {
    static id = 4
    static className = 'exp'

    toHtml() {
        return templateExpired()
    }
}
