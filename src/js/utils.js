import QRCode from "qrcode";

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

    const checkEmail = (email) => {
        const users = getUsersArr();

        if (users.length === 0) {
            return false
        }
    
        const isMatch = users.find(user => user?.email === email);


        return isMatch?.email ? 'email is exists already' : false;
        
    }

    function onSave(newUser) {
        let list = [];

        let isError = false;

        const users = getUsersArr();

        isError = checkEmail(newUser.email)

        if (!isError) {
            list = users.length >= 1 ? [...users, newUser] : [newUser];

            localStorage.setItem(USER_STORAGE, JSON.stringify(list))
        }

        return { isError }
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

const generateQRCode = (canvas, wallet) => {
    QRCode.toCanvas(canvas, wallet, function(error) {
        if (error) {
            console.log(error)
            return null;
        }

        console.log('success')
    })

    return wallet;
}

function getModal({ root, template }) {

    const onShow = ({ text, onClose }) => {
        const modal = template({ text, onClose })
        root.parentNode.append(modal)
        modal.classList.add('slow-show')
    }

    const onCLose = () => {
        const _root = root.parentNode

        _root.lastChild.classList.add('slow-hide')

        const delay = setTimeout(() => {
            clearTimeout(delay);
            _root.removeChild(_root.lastChild)
        }, 300)
    }

    return { onShow, onCLose }
}

export { getUrlParams, storageController, getFields, millisToMinutesAndSeconds, generateQRCode, getModal }