function handleSubmit(event) {
    event.preventDefault();

    // get user input and save it into a variable
    let formInput = document.getElementById("name").value;

    // get target html element
    const resultsHtmlElement = document.getElementById("results");

    // get API URL
    apiUrl = Client.apiCall(formInput);

    // API call
    function apiFetch() {
        apiUrl = Client.apiCall(formInput)
        .then(fetch(apiUrl))
        // fetch(apiUrl)
            .then((res) => res.json())
            .then(function (res) {
                console.log(res);
                Client.analyzeContent(resultsHtmlElement, formInput, res);
            });
    }

    if (Client.checkInput(formInput)) {
        console.log('input == URL');
        apiFetch();
    } else {
        console.log('input != url');
        Client.invalidInput(resultsHtmlElement);

    }
}

export {
    handleSubmit
}