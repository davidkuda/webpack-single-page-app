function checkInput (input) {
    console.log('::: checking input :::')
    if (input.includes('www') || input.includes('http')) {
        console.log('input is an url')
        return true
    } else {
        console.log('input is not an url')
        return false
    }
};

export { checkInput }