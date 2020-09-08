# My Daily Journal :cherry_blossom:

#### By **Jiwon Han**

## Table of Contents

* Instructions
* Development
* Tech Stack
* Future Development
* Author
* License

## Instructions

A <strong>Udacity</strong> front-end <em>Weather Journal App </em> project. This is an asynchronous web app that uses Weather API and user data to dynamically update the UI for a My-Daily-Journal App. A journal data from a user is stored in MongoDB database and past journals will be fetched from there via server-side rendering.

### To see Demo web app:

Currently, the app is deployed via Heroku. Visit https://my-daily-journal-jw.herokuapp.com/.

### To run dev mode locally:

[Weather API](https://openweathermap.org/api) is needed to run the development mode. Please have the API and put it into `const apiKey = HERE!` in app.js in the website folder. 

```bash
  $ git clone https://github.com/jiwon-seattle/My-Daily-Journal.git
  $ cd website
  $ npm install  
  # After successfull pkg installtion
  $ npm run dev
```
The site is automatically hosted in http://localhost:8000. 

## Development

This site provides a platform for a user to write journals. 

1. Web app asks a user to allow share user's location information by giving pop-up. A user accepts it. 
1. A user is able to write a journal.
2. When a user clicks the `Generate` button, the journal is saved to the database.
3. Daily weather information automatically is fetched via Weather API and saved to the database.
4. When a user clicks `PAST MY JOURNALS`, previously written journals are listed by date in ascending order.
5. Different weather image is displayed per a weather condition.
6. When a user clicks `WRITE TODAY'S JOURNAL`, writing section is back.
7. A user is able to navigate the developer's contact pages by clicking icons in the footer section.

<img src="website/img/website.png" width="700px" height="350px" />

### Part 1: Frontend 

#### HTML/CSS

* Responsive Web Design
  * Media query used for different size of view-points
* Feminine and delicate UI 
  * Used a flower image and Google Fonts to give prettiness 

#### DOM

* DOM with JQuery for interaction with Back-end responses
  * Data from the database is showing in the UI with DOM 

### Part 2: Backend

#### ExpressJS

* bodyparser & cors
  * Middleware that only parses JSON and a protocol that enables scripts running on a browser client to interact with resources from a different origin.
* router
  * `/weather` is the base URL and GET/POST request is made to the URL.
* Geolocation API & Weather API
  * Geolocation API returns a user's location with latitude and longitude. With this information, weather information is fetched via the API in the client-side and a weather condition is sent to the server-side to save in the database.

#### MongoDB

* Non-Relational Database  
* Model and Controller
  * Schema has `Date`, `Weather`, `Feeling`.
  * GET/POST orders to DB are executed by corresponding routes.

## Tech Stack

- HTML
- CSS
- [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
- [NodeJS](https://nodejs.org/en/) as core stack
- [ExpressJS](https://expressjs.com/) for server-side rendering
- [MongoDB](https://www.mongodb.com/) for non-relational database
- [HTML Geolocation API](https://www.w3schools.com/html/html5_geolocation.asp) to locate the user's position
- [Weather API](https://openweathermap.org/api) for weather api
- [Heroku](https://heroku.com) for deployment
- [Unsplash](https://unsplash.com/) for images

 ## Future Development
 1. env setting 

 2. Auth feature: Login/out

 3. Edit/Delete for past journals

## Authors

#### Jiwon Han
* [GitHub](https://github.com/jiwon-seattle)
* [LinkedIn](https://www.linkedin.com/in/jiwon1han/)

## License

`My Daily Journal` is open source software [licensed as MIT][license].

Copyright (c) 2020 **_Jiwon Han_**

[//]: # (HyperLinks)
[license]: https://github.com/jiwon-seattle/My-Daily-Journal/blob/master/LICENSE.md
