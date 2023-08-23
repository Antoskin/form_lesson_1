import { getUrlParams, storageController } from "./utils"
import {v4 as uuidv4} from 'uuid';

function checkUserId() {
    let isRegistered = false;

    const HashedID = getUrlParams();

    isRegistered = storageController().isExists(HashedID)

    return { isRegistered, HashedID }
}

const fetchWallet = () => {
    const wallet = uuidv4()

    return wallet;
}

export { checkUserId, fetchWallet }