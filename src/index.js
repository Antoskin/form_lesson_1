import {checkUserId} from './js/actions';

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

    console.log('isRegistered', isRegistered)
}

window.addEventListener('load', DomLoaded)

console.log('run...')