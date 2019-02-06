This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 8th Light Google Books Exercise

This is an exercise for 8th Light's apprenticeship program. The purpose of this application is as follows:

* To allow a user to type in a query.
* The query will then display a list of books match the query.
* Each item in the list includes the book's author, title, publishing company, and a picture of the book.
* Each list item allows the user to navigate to more information about the book.

[You can visit the project here.](https://floating-sands-15463.herokuapp.com/)

## Running the project locally

To run the project locally, you can take the following steps:

```
git clone git@github.com:sunnlamp/google-books-react.git
cd google-books-react
yarn install
yarn start
```

If you don't want a browser to pop up on dev server start, use the following start option:
```
BROWSER=none yarn start
```

Or add the following to your .env file:
```
BROWSER=none
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

