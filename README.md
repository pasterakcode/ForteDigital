** Participants list **


![image](https://user-images.githubusercontent.com/78322363/166842274-89449fab-7af8-4039-9800-9445c5b40589.png)

------------
Application description:

After starts, application downloads the interns data from the backend (API) and displays them on the list. The user can edit for each person: name, e-mail address, internship start date, internship end date
-------------
Environment:

React application with router-react-dom to connected between sites of application and axios to connected with backend. Styles are put by React styled-components Module.

Node: 16.15.0
Dependencies:
        "axios": "^0.27.2",
        "history": "^5.3.0",
        "react": "^18.0.0",
        "react-dom": "^18.0.0",
        "react-router-dom": "^6.3.0",
        "react-scripts": "5.0.1"

---------------------
How run this application?

To start application on localhost You must have installed Node + NPM or Yarn
Download my project to your computer open terminal in folder where you puted downloaded files
use command "npm install". After downloaded node_modules use command "npm start". 
Application will be open on address: http://localhost:3000/


----------------------
Functionality

Data from API: The application is prepared to handle an empty state, incomplete data and displays information about the ongoing data loading.


![image](https://user-images.githubusercontent.com/78322363/166842428-9161dace-2eab-4a1a-9917-d229855b750c.png)


![image](https://user-images.githubusercontent.com/78322363/166842378-3e8d00a1-383f-4f70-9820-1cb3bf715d47.png)


Validation of inputs: Validation is carried out by the simplest method, using the built-in functionalities of the form / input object. 
Input of type text is validate by regex. 
Input type email has default validation. 
Input data is validated on the basis of min and max parameters

Since one of the main assumptions of the application is the storage and the ability to change the data regarding the start and end of the internship, I added my own functionality displaying the current date range after hovering over the "edit" button


![image](https://user-images.githubusercontent.com/78322363/166842316-ebce12c3-4832-4c93-b6a4-c4122a2bfc90.png)


-------------





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
API is available on http://localhost:3001/interns  using json-server. 

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#� �F�o�r�t�e�D�i�g�i�t�a�l�T�a�s�k�
�
�
