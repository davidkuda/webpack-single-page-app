function updateUi(markup) {
    targetElement = document.getElementById("results");
    targetElement.innerHTML = markup;
};

export { updateUi }