# FriendFinder
A matching tool to help you find like-minded friends

Looking for friends? Answer 10 simple questions and find people who have similar answers. You'll find new friends in no time. 
Access this site at: https://protected-forest-73370.herokuapp.com/.

## Table of Contents
* [About](#about)
* [Functionality](#functionality)
* [Technical Features](#technical-features)
* [Requirements](#requirements)
* [Build Tools](#build-tools)
* [Acknowledgements](#acknowledgements)

## About
This is a full stack deployed website that matches the user up with a previous "friend" that has similar answers to 10
questions that ask the user to rank statements on a scale of 1 (Strongly Disagree) to 5 (Strongly Agree).

## Functionality
The home page, which is the default path, has one button to access the survey. There is also a link that will display the
API information for all existing "friends" in JSON.

<img src="/assets/home-page.gif">

The survey page has 10 questions. If the user tries to submit without entering a name or a link to their photo, they will
get an error.

<img src="/assets/survey-error.gif">

Once all questions are answered, a modal will pop-up showing the most compatible friend.

<img src="/assets/survey-complete.gif">

If you visit the API link after submitting a survey, the new "friend" will be shown at the bottom.

<img src="/assets/api.gif">

## Technical Features
* This application uses express to create a server that drives the content rendered to the page.
* Express is also used to create an API for loading content and posting information from a new user.
* There are two HTML pages and one page that displays the API content in JSON.

## Requirements
If you are running from the deployed Heroku site, then there are no requirements to use. You can access directly 
at https://protected-forest-73370.herokuapp.com/.

If you would like to fork this application and run directly, then you will need to run:
`npm install`
in the local folder.

Then run `node server.js` in the command line. If successful, the console will confirm the
PORT that it is running. You will need to visit `http://localhost:8080` to test the funcationality.

## Build Tools
* Node.js v10.16.3
* Node packages:
  * express v4.17.1 (https://www.npmjs.com/package/express)
  * path v0.12.7 (https://www.npmjs.com/package/path)
* JQuery 
* Bootstrap 3.3.6
* Font Awesome
* Deployed on Heroku

## Acknowledgements
* Thanks to all of the authors of Node.js packages - they are invaluable.