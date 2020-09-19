# Using Webpack and APIs to create Single Page Apps

This project is built with JavaScript. It uses JavaScript's async functionalities to get data from an API. In this case, this app uses [meaning cloud's "sentiment analysis" api](https://www.meaningcloud.com/developer/sentiment-analysis/doc/what-is-sentiment-analysis).

All the code is finally built with __Webpack__ into a single JavaScript file.

![gif preview of app](https://github.com/OzzieKuda/webpack-single-page-app-with/blob/master/docs/screenshot.png)

## running the app

- `npm run build-prod` will create the dist folder with the production files
- `npm run start` will start the node server (server.js) on localhost:8081
- `npm run build-dev`will run the developer build on localhost:8080

note: Not pushed to the repo are the .env-variables. They contain api-keys which are necessary for the app to work propperly.

## functionality

enter a link in the field and the app will analyze the sentiment of the text. It will return for instance whether the entered text is positive or negative or objective or subjective. 

## Tech Stack
- (vanilla) JavaScript
- NodeJS
- Webpack
- Meaning Cloud's "Sentiment Analysis" API