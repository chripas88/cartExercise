# EXERCISE:

Please create a simple single page browser application where from:

* The user can add/remove items into their basket from a pool of priced items (dummy, hard-coded within the App).

* Basket should display total price and allow for quantity changes.

* When total exceeds €100 then apply 10% discount and notify user.

* A "buy" button should log (in console) an XML with the minimum amount of data required to describe the state of the basket (assume that this is to be sent to the back-end managing the items).

* Basket should survive browser refreshes.

## Technical details:

Application and unit tests should be written in JavaScript using custom code or your favourite framework.
There is no need to do anything special about styling (CSS).
Please do not implement anything outside of requirements (e.g database persistence, users and roles, authentication etc).
Deliverable should be a zip containing the sources of the application. Note that if zip can't be delivered via email due to security/spam filters, please send it over via a public dropbox link, a github link or wetransfer.

# END OF EXERCISE

## Project information

This project was created using React 16 and Redux.

Unit tests were created using jest and enzyme

XML was created using xml2js package.

#### Dependencies:
* "enzyme": "^3.11.0",
* "enzyme-adapter-react-16": "^1.15.2",
* "react": "^16.13.0",
* "react-dom": "^16.13.0",
* "react-redux": "^7.2.0",
* "react-router-dom": "^5.1.2",
* "react-scripts": "3.4.0",
* "redux": "^4.0.5",
* "xml2js": "^0.4.23"