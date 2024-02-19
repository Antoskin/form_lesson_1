import {checkUserId} from './js/actions';
import { App } from './js/App';
import Form from './js/components/form';
import { Payments } from './js/components/payments';
import { Amount } from './js/components/amount';
import { Result } from './js/components/result';
import { Expire } from './js/components/expire';

function DomLoaded() {
    const {isRegistered, HashedID} = checkUserId()

    const root = document.getElementById('app')

    const components = [Form, Payments, Amount, Result, Expire];

    const app = new App({
        root, 
        components, 
        options: { isRegistered, HashedID } 
    })

    app.render()
}

window.addEventListener('load', DomLoaded)

console.log('run...')