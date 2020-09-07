// import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/results.scss';
import './styles/footer.scss';

import { handleSubmit } from './js/formHandler';
import { createMarkup } from './js/create-markup';
import { checkInput } from "./js/check-input";

console.log('hello from index.js')

export {
    handleSubmit,
    createMarkup,
    checkInput
}