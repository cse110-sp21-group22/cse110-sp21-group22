# Architecture
Our web app is a single-page application, and an overview of our methods
can be found in our javadocs which can be accessed by clicking in our [Docs](https://cse110-sp21-group22.github.io/cse110-sp21-group22/).

See these diagrams for a visual representation of the flow of our website.

# Build Process

Check out our [onboarding documentation](https://github.com/cse110-sp21-group22/cse110-sp21-group22/blob/main/specs/onboarding.md)  to learn how to go from cloning to repository to a pull request. In order to view the latestversion of the project that is on main, you can navigate to the readme andclick on the app link. If you want to view the version you committed in your branch, the preview workflow should provide you a link from firebase that has the version of the app with your changes. Alternatively, you can open a local server at index.html in order to view your local version of the codebase.

# CI/CD Pipeline

To get a general sense of what our pipeline looks like, take
a look at our [pipeline](\..\admin\cipipeline\phase1.png). 
The only major adjustment we have made since then is adding the testing phase, which on pull request launches automated cypress tests.

