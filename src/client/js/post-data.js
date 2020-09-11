async function postData (url = '', data = {}) {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log('input posted to /form')
        return newData
        
    } catch (error) {
        console.log("error", error);
    }
};

export { postData };