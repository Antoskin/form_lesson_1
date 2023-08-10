import {checkUserId} from './js/actions';
import { App } from './js/App';
import { Form } from './js/components/form';
import { Payments } from './js/components/payments';

// const testUser = [
//     {
//         HashedID: '123',
//         name: 'John',
//         lastName: 'Gold'
//     }
// ]

function DomLoaded() {
    //console.log('loaded')

//    localStorage.setItem('users', JSON.stringify(testUser))

    const {isRegistered, HashedID} = checkUserId()

    // console.log('isRegistered', isRegistered)
    // console.log('HashedID ', HashedID)
    const root = document.getElementById('app')

    const app = new App({root, components: [Form, Payments], options: {isRegistered, HashedID} })

    app.render()
}

window.addEventListener('load', DomLoaded)

console.log('run...')