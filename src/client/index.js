// import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/results.scss';
import './styles/footer.scss';

import { handleSubmit } from './js/formHandler';
import { analyzeContent } from './js/analyze-content';
import { checkInput } from "./js/check-input";
import { invalidInput } from "./js/invalid-input";

console.log('hello from index.js')

export {
    handleSubmit,
    analyzeContent,
    checkInput,
    invalidInput
}