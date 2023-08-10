import {checkUserId} from './js/actions';
import { App } from './js/App';

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

    const {isRegistered} = checkUserId()

    //console.log('isRegistered', isRegistered)
    const root = document.getElementById('app')

    const app = new App({root, components: [], options: {isRegistered} })
}

window.addEventListener('load', DomLoaded)

console.log('run...')