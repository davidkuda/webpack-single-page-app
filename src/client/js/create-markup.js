function createMarkup(element, link, response) {
    let url = link;
    const results = `
    <div id="response">
        <div class="response__container">
            <h2>Sentiment Analysis</h2>
            <p>
                <span>based on:</span>
                <span>${url}</span>
            </p>
        </div>
    </section>`;
    element.insertAdjacentHTML('beforeend', results);
};

export { createMarkup };