function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=13086,DE&appid=f245a8ab742aa26adb273a9c50af5426&units=metric')
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res.name;
    })
}

export { handleSubmit }
