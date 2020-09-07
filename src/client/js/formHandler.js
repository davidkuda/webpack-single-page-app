function handleSubmit(event) {
    event.preventDefault();

    // get user input and save it into a variable
    let formInput = document.getElementById("name").value;

    // get target html element
    const resultsHtmlElement = document.getElementById("results");

    // API URL
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
    const apiKey = "?key=5e209f22ac0f0d3ad7045b336058b1fc";
    const outputFormat = "&of=json";
    let text = "&txt=" + formInput.replace(" ", "%"); // is no longer used / either text or url!
    let link = "&txt=" + formInput;
    const language = "&lang=en";
    const model = "&model=general";
    let apiUrl = `${baseUrl}${apiKey}${link}${language}${model}`;

    // API call
    function apiCall() {
        fetch(apiUrl)
            .then((res) => res.json())
            .then(function (res) {
                console.log(res);
                Client.analyzeContent(resultsHtmlElement, formInput, res);
            });
    }

    if (Client.checkInput(formInput)) {
        console.log('input == URL');
        apiCall();
    } else {
        console.log('input != url');
        Client.invalidInput(resultsHtmlElement);

    }
}

export {
    handleSubmit
}