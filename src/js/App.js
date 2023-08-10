export class App {
    constructor({root, components, options}) {
        this.step = 0
        this.root = root
        this.components = components
        this.isRegistered = options?.isRegistered

        this.getRequiredComponent()
    }

    getRequiredComponent() {
        this.isRegistered && this.step === 0 && this.step ++;

        console.log(this.step)
    }    
}