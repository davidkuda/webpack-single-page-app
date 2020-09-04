async function updateUI(url = '') {
    const res = await fetch(url);
    try {
        const projectData = await res.json();
        date.innerHTML = `Date: ${projectData.date}`;
        temp.innerHTML = `Weather: ${projectData.temperature}`;
        content.innerHTML = `Feelings: ${projectData.feelings}`;
        console.log('UI updated!')
        console.log(
            `Date: ${projectData.date}`,
            `Weather: ${projectData.temperature}`,
            `Feelings: ${projectData.feelings}`
        )
    } catch (error) {
        console.log(error);
    }
}

export { updateUI }