# Architecture
Our web app is a single-page application, and an overview of our methods
can be found in our javadocs which can be accessed by clicking in our [Docs](https://cse110-sp21-group22.github.io/cse110-sp21-group22/).

See this [diagram](https://github.com/cse110-sp21-group22/cse110-sp21-group22/blob/b8be05d03726da27c48579eedb267afe7e74541d/specs/brainstorm/EndUserDiagram.png) for a visual representation of the flow of our website.
## Build Process
Check out our [onboarding](https://github.com/cse110-sp21-group22/cse110-sp21-group22/blob/main/specs/onboarding.md)
documentation to learn how to go from cloning to repository to a pull request. In order to view the latest version of
the project that is on main, you can navigate to the README and click on the `Product` link. If you want to view the
version you committed in your branch, the preview workflow should provide you a link from firebase that has the version of the app with your changes.
Alternatively, you can open a local server at index.html in order to view your local version of the codebase.
## Code Layout
### app.js
Handles core functionality of the app
### calendar.js
Functionality for the calendar tracker. Add or delete tracker and link to the upcoming board on the daily log page.
### color.js
Inputting the mood color from the main page into the mood tracker.
### index.js
Has the functionality for the components on the main page, including the daily log, upcoming tasks, rose and thorns, walkthrough demo.
### login.js
Used to allow the user to log-in to our application through firebase.
### moodFuncionality.js
Functionality for the mood tracker, such as setting up the layout and changing the color of the day.
### reset.js
Used to allow user to reset their password
### router.js
Since our application is a SPA, router.js handles the functionality to simulate the user navigating to different parts of a website. This file will dynamically load new pages and scripts depending on how the user navigates throughout the website.
### setting.js
Handles functionality of settings page.
### signup.js
Functionlity to create new user and store user email, password into firebase.
### sw.js
Functionality for service worker
## Testing
Our testing was done mainly as end-to-end testing through Cypress. Tests are found in the cypress/integration folder,
and our testing history is included [here](https://dashboard.cypress.io/projects/zaxzr4/runs).
A summary of our coverage can be found [here](https://app.codecov.io/gh/cse110-sp21-group22/cse110-sp21-group22).
We were able to cover 93% of our total code, with the remaining 7% being mostly error handling lines.
## CI/CD Pipeline
To get a general sense of what our pipeline looks like, take a look at our [pipeline](https://github.com/cse110-sp21-group22/cse110-sp21-group22/blob/b8be05d03726da27c48579eedb267afe7e74541d/admin/cipipeline/phase1.png). The only major adjustment we have made since then is adding the testing phase, which on pull request launches automated cypress tests.
