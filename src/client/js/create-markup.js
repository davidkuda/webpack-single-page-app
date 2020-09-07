function createMarkup() {
    let url = 'this is the url';
    const newSection = `
    <section id="response">
        <div class="response__container">
            <h2>Sentiment Analysis</h2>
            <p>
                <span>based on:</span>
                <span>${url}</span>
            </p>
        </div>
    </section>`;
};

export { createMarkup };