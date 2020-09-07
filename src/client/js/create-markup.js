function createMarkup(element, link, res) {
    const results = `
    <div id="response">
        <div class="response__container">
            <h2>Sentiment Analysis</h2>
            <p>
                <span>source:</span>
                <span>${link}</span>
            </p>
            <ul>
                <li>
                    <span class="category">agreement:</span>
                    <span class="score">${res.agreement}</span>
                </li>
                <li>
                    <span class="category">confidence:</span>
                    <span class="score">${res.confidence}</span>
                </li>
                <li>
                    <span class="category">irony:</span>
                    <span class="score">${res.irony}</span>
                </li>
                <li>
                    <span class="category">subjectivity:</span>
                    <span class="score">${res.subjectivity}</span>
                </li>
            </ul>
        </div>
        <p class="disclaimer">Analysis done based on Meaning Cloud 's "Sentiment Analysis"-API. For an explanation of the categories visit: https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response</p>
    </section>`;
    element.insertAdjacentHTML('beforeend', results);
};

export { createMarkup };