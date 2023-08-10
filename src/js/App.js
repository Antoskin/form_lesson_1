export class App {
    constructor({root, components, options}) {
        this.step = 0
        this.root = root
        this.components = components
        this.isRegistered = options?.isRegistered

        // this.initComponent()
    }

    getRequiredComponent() {
        this.isRegistered && this.step === 0 && this.step ++;

        return this.components.find(Component => Component.id === this.step)

        //console.log(this.step)
    }    

    initComponent() {
        const Component = this.getRequiredComponent()

        const componentWrapper = document.createElement('div')
        componentWrapper.classList.add(Component.className)

        const component = new Component()

        componentWrapper.append(component.toHtml())

        return componentWrapper;

    }

    render() {
        this.root.append(this.initComponent())
    }
}