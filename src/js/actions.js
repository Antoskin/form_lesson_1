import { getUrlParams, storageController } from "./utils"

function checkUserId() {
    let isRegistered = false;

    const HashedID = getUrlParams();

    isRegistered = storageController().isExists(HashedID)

    return { isRegistered, HashedID }
}

export { checkUserId }