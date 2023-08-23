import QRCode from "qrcode";
import {v4 as uuidv4} from 'uuid';

const getUrlParams = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)

    const HashedID = urlParams.get('HashedId') || ''

    return HashedID
}

function storageController() {
    const USER_STORAGE = 'users';
    const storagedUsers = localStorage.getItem(USER_STORAGE);

    const getUsersArr = () => {
        return storagedUsers ? JSON.parse(storagedUsers): [];
    }

    const isExists = (HashedID) => {
        const users = getUsersArr();
    
        const notEmpty = users.find(user => user.HashedID === HashedID);
    
        return notEmpty ? true: false;
    }

    function onSave(newUser) {
        let list = [];

        const users = getUsersArr();

        list = users.length >= 1 ? [...users, newUser] : [newUser];

        localStorage.setItem(USER_STORAGE, JSON.stringify(list))
    }

    return {onSave, isExists}
}

const getFields = (data) => {
    let res = {}

    const formData = new FormData(data);

    for (const [key, value] of formData) {
        res = {...res, [key]: {'value': value}}
    }

    return res
}

function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const generateQRCode = (canvas) => {

    const wallet = uuidv4()

    QRCode.toCanvas(canvas, wallet, function(error) {
        if (error) {
            console.log(error)
            return null;
        }

        console.log('success')
    })
}

function getModal({ root, template, text, onClose }) {

    const onShow = () => {
        const modal = template(text, onClose)
        root.parentNode.append(modal)
        modal.classList.add('slow-show')

    }

    return { onShow }
}

export { getUrlParams, storageController, getFields, millisToMinutesAndSeconds, generateQRCode, getModal }