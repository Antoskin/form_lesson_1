const templateExpired = () => {

    const root = document.createElement('section')

    const _html = (`
            <div class="exp_error">
                Invoice Expired
            </div>
            <div class="exp_description">
                An invoice is only valid for 30 minutes
            </div>
            <div class="exp_description">
                Return if you would like to resubmit a payment
            </div>
    `)

    root.innerHTML = _html

    return root;
}

export default templateExpired;