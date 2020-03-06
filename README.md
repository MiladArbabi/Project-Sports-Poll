## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## More About The Project

Author general approach was to use stateless functional components rather than stateful components.

Data is circulated throughout the application using react context API and games information is hardcoded as state inside the PollProvider.js component.

React Router Dom is used for routing in this project.

Styled components and framer motion elements are used throughout the project to style the application.

Navigation bar takes the user to the three main pages of application including:

### Home

A simple layout identical to those of about page with a 'BEGIN' which loads the first poll and takes the user to polls/:id

### Polls

In this page all votes are loaded one by one on a random basis. 

Users selection is stored on the localStorage.

### About

Inherting the same layout as home page with a link which takes the user back to home page.


### Deployment

Based on user preference, application can run with npm/yarn start which is loaded on port 3000.
