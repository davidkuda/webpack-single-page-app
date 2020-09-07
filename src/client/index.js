// import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/results.scss';
import './styles/footer.scss';

import { handleSubmit } from './js/formHandler';
import { getWeather } from './js/api-call';
import { testLog } from './js/testLog';
import { createMarkup } from './js/create-markup';

console.log('hello from index.js')

export {
    handleSubmit,
    getWeather,
    testLog,
    createMarkup,
}