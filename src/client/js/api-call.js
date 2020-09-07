async function getWeather() {
    const field = document.getElementById("name");
    let zipcode = field.value;
    let countrycode = 'DE';
    const baseURL = "https://api.openweathermap.org/data/2.5/weather",
        zipParameter = "?zip=" + zipcode + "," + countrycode,
        apiKey = "&appid=f245a8ab742aa26adb273a9c50af5426",
        format = "&units=metric";
    const apiURL = baseURL + zipParameter + apiKey + format;
    const res = await fetch(apiURL);
    try {
        const userData = await res.json();
        return `${userData.main.temp}°C, ${userData.weather[0].description}, ${userData.name}`;
    } catch (error) {
        console.log("error", error);
        console.log('invalid zip code')
    }
};

export { getWeather }

// https://api.openweathermap.org/data/2.5/weather?zip=13086,DE&appid=f245a8ab742aa26adb273a9c50af5426&units=metric

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = '?key=5e209f22ac0f0d3ad7045b336058b1fc';
const outputFormat = '&of=json';
let text = '&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me';
const language = '&lang=en';
const model = '&model=general';
let apiUrl = `${baseUrl}${apiKey}${text}${language}${model}`