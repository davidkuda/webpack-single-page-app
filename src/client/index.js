import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/results.scss';
import './styles/footer.scss';

import { handleSubmit } from './js/formHandler';
import { analyzeContent } from './js/analyze-content';
import { checkInput } from "./js/check-input";
import { markupInvalidInput } from "./js/markup-invalid-input";
import { getSentimentAnalysisUrl } from "./js/get-sentiment-analysis-url";
import { apiCall } from "./js/api-call";
import { updateUi } from "./js/update-ui";

console.log('hello from index.js')

export {
    handleSubmit,
    analyzeContent,
    checkInput,
    markupInvalidInput,
    getSentimentAnalysisUrl,
    apiCall,
    updateUi
}