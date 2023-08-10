import { getUrlParams } from "./utils"

function checkUserId() {
    let isRegistered = false;

    const HashedID = getUrlParams();

    const storagedUsers = localStorage.getItem('users');

    if (storagedUsers) {
        const users = JSON.parse(storagedUsers)

        const isExist = users.find(user => user.HashedID === HashedID);
    
        if (isExist) {
            isRegistered = true
        }
    }

    

    return { isRegistered, HashedID }

}

export { checkUserId }