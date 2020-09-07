function invalidInput(element) {
    const invalidInputMarkup = `
    <div id="response">
        <div class="response__container">
            <h2>Invalid URL</h2>
            <p>
               Please add a valid URL as input!
            </p>
        </div>
        </div>
    </section>`;
    element.insertAdjacentHTML('beforeend', invalidInputMarkup);
};

export {
    invalidInput
};