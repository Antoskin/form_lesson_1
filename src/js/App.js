export class App {
    constructor({root, components, options}) {
        this.step = 0
        this.root = root
        this.components = components
        this.options = options

        this.update = this.update.bind(this)
    }

    getRequiredComponent() {
        this.options.isRegistered && this.step === 0 && this.step ++;

        return this.components.find(Component => Component.id === this.step)
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

        const component = new Component({ root: componentWrapper, options })

        componentWrapper.append(component.toHtml())

        return componentWrapper
    }

    render() {
        this.root.prepend(this.initComponent())
    }
}