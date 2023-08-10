const getUrlParams = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)

    const HashedID = urlParams.get('HashedId') || ''

    return HashedID
}

export { getUrlParams }