async function apiCall(apiUrl) {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data)
    return data;
}

// function apiCall(apiUrl) {
//     fetch(apiUrl)
//         .then((res) => res.json())
//         .then(function (res) {
//             console.log('hello from .then')
//             console.log('res1:', res)
//             return res
//         });
// }

export { apiCall }