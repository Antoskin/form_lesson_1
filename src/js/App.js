export class App {
    constructor({root, components, options}) {
        this.step = 2
        this.root = root
        this.components = components
        this.options = options
        this.isRegistered = this.options?.isRegistered

        this.update = this.update.bind(this)
        // this.initComponent()
    }

    getRequiredComponent() {
        this.isRegistered && this.step === 0 && this.step ++;

        return this.components.find(Component => Component.id === this.step)

        //console.log(this.step)
    }    

    update() {
        const child = this.root.children[0]

        this.root.removeChild(child)
        this.step++
        this.render()
    }

    initComponent() {
        const Component = this.getRequiredComponent()

        const componentWrapper = document.createElement('div')
        componentWrapper.classList.add(Component.className)

        const options = Object.assign(this.options, {update: this.update})

        const component = new Component({ options })

        componentWrapper.append(component.toHtml())

        return componentWrapper;
    }

    render() {
        this.root.append(this.initComponent())
    }
}