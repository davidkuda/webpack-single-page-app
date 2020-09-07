const dotenv = require('dotenv');
dotenv.config();

let json = {
    'title': 'test json response',
    'message': 'Congratulations, David. ;)',
    'time': 'now',
    'api': process.env.API_KEY
}

module.exports = json
