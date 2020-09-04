function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
    const apiKey = '?key=5e209f22ac0f0d3ad7045b336058b1fc';
    const outputFormat = '&of=json';
    let text = '&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me';
    const language = '&lang=en';
    const model = '&model=general';
    let apiUrl = `${baseUrl}${apiKey}${text}${language}${model}`
    fetch(apiUrl)
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res.agreement;
    })
}

export { handleSubmit }
