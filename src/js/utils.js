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

export { getUrlParams, storageController, getFields }