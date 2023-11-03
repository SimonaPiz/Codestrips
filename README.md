# 🗨 Codestrips
> CREATE A BACK-END APP WITH JAVASCRIPT
Build an API for a small application to allow users to create and save small one-pane comic strips.

<img src="" width="600px" alt="preview" title="preview"/>

## Table of Contents
* [Project Overview](#project-overview)
* [Implementation Details](#implementation-details)
* [Testing](#testing)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Acknowledgements](#acknowledgements)
* [Author](#author)


## Project Overview

Build an API for Codestrips, a small application to allow users to create and save small one-pane comic strips. 
- Users can select a head, body, background location, thought/speech bubble type, thought/speech bubble text, and caption for a strip.

The API allows to save these to a SQLite database and retrieve them so that they persist even when users restart the server.

## Implementation Details

- [x] Setting up Express Router

  ✔ [#2 issue](https://github.com/SimonaPiz/Codestrips/issues/2)

- [x] Creating the database using `sqlite3`

  ✔ [#3 issue](https://github.com/SimonaPiz/Codestrips/issues/3)

- [x] Implement GET '/strips' Route to get all strips
  - Import SQLite database
  - Add a new route to your application, it should monitor the `/strips` endpoint for GET requests.
  - Send back the array of all strips in the `db.all()`callback. 

  ✔ [#5 issue](https://github.com/SimonaPiz/Codestrips/issues/5)

- [x] Implement POST request for '/strips' route to create new Strip

  - Add a new route to your application, it should monitor the `/strips` endpoint for POST requests.
  - When a POST /strips request arrives, the application should validate the strip and send a 400 response if it is invalid.
  - Your POST /strips route should `INSERT` a new strip into the database.
  - If an error occurs, send back a 500 response status.
  - Set a 201 status code and the send the created strip inside the callback of your `db.get()`. Create an object to send in the response and set its `strip` property equal to the strip returned from the database. Send this object in the response.

  ✔ [#6 issue](https://github.com/SimonaPiz/Codestrips/issues/6)

## Testing

A testing suite has been provided, checking for all essential functionality and edge cases.

To run these tests run 
```
$ npm test
```

✔ All Tests passed

![test results](https://user-images.githubusercontent.com/91121660/280332217-9f4460b3-22b0-4a07-a2ec-e0aae507af38.png)

## Usage

You can start the server from the terminal window with 
```
$ node app.js
```
and stop it with the Ctrl + C key command.

## Technologies Used

I use Express, SQLite, and the sqlite3 node module in order to create a Strip table and then set up a POST route for creating new strips and a GET route to retrieve all strips from the database.

  - express 4
  - sqlite3 5
  - body-parser 1
  - mocha 10
  - chai 4

  ## Acknowledgements

This project comes from the [Codecademy's Create a Back-End with JavaScript](https://www.codecademy.com/learn/paths/create-a-back-end-app-with-javascript) course.

## Author

- [Simona Pizio](https://github.com/SimonaPiz)
