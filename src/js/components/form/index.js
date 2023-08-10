import templateForm from "./template";

export class Form {
    constructor({options}) {
        this.options = options
    }

    static id = 0
    static className = 'reg'

    onSubmit(e) {
        e.preventDefault()

        const data = new FormData(e.target)

        const newUser = {
            HashedID: this.options.HashedID,
            name: data.get('name'),
            lastName: data.get('surname')
        }

        let newUserList;

        const storagedUsers = localStorage.getItem('users');
        // console.log('storagedUsers', storagedUsers)

        if (storagedUsers) {
            const users = JSON.parse(storagedUsers)

            newUserList = [...users, newUser]
        } else {
            newUserList = [newUser]
        }

        //console.log('users', users)

        localStorage.setItem('users', JSON.stringify(newUserList))

        this.options.update()
    }

    toHtml() {
        const form = templateForm()

        form.addEventListener('submit', (e) => this.onSubmit(e))

        return form
    }
}