function apiCall(apiUrl) {
    fetch(apiUrl)
        .then((res) => res.json())
        .then(function (res) {
            console.log('hello from .then')
            console.log(apiUrl)
            return res
        });
}

export { apiCall }