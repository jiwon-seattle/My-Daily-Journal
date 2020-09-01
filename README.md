# My Daily Journal

#### By **Jiwon Han**

## Table of Contents

* [Getting Started](#Getting Started)
* [Technologies](#Technologies)
* [Glossary](#Glossary)
* [Bugs](#Bugs)
* [Contact](#Contact)

## Getting Started

A <strong>Udacity</strong> front-end <em>Weather Journal App </em> project. This is an asynchronous web app that uses Weather API and user data to dynamically update the UI for a My-Daily-Journal App. A journal data from a user is stored in MongoDB database and past journals will be fetched from there.

### To see Demo web app:

Currently the app is deployed via Heroku. Visit https://my-daily-journal-jw.herokuapp.com/.

### To run dev mode locally:

```bash
  $ git clone https://github.com/jiwon-seattle/My-Daily-Journal.git
  $ cd into repository
  $ npm install  
  # After successfull pkg installtion
  $ npm run dev
```

## Development

This site provides platform for a user to write journals. 

1. A user is able to write journal.
2. When a user clicks `Generate` button, the journal is saved to database.
3. Daily weather information automatically is fetched via Weather API and saved to database.
4. When a user clicks `PAST MY JOURNALS`, previous written journals are listed by date in descending order.
5. Different weather image is displayed per a weather condition.
6. When a user clicks `WRITE TODAY'S JOURNAL`, writing section is back.
7. A user is able to navigate developer's contact pages by clicking icons in the footer section.

<img src="../img/website.png" width="700px" height="350px" />

### Part 1: FrontEnd 

#### HTML/CSS

* Responsive Web Design
  * Media query used for different size of views 
* Feminine and delicate UI 
  * Used a flower image and Google Fonts to give prettiness 

#### DOM

* DOM with JQuery for interaction with Back-end reponses
  * Data from database is showing in the UI with DOM 

### Part 2: BackEnd

#### ExpressJS

* bodyparser & cors
  * Middleware that only parses JSON and a protocol that enables scripts running on a browser client to interact with resources from a different origin.
* router
  * `/weather` is base url and GET/POST request is made to the url.
* Weahter API
  * A weather information is fetched via the API in the client-side and a weather condition is sent to server-side to save in the database.

#### MongoDB

* Non-Relational Database  
* Model and Controller
  * Schema has `Date`, `Weather`, `Feeling`.
  * GET/POST orders to DB are executed by corresponding routes.

## Tech Stack & Development Sources

- HTML
- CSS
- [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
- [NodeJS](https://nodejs.org/en/) as core stack
- [ExpressJS](https://expressjs.com/) for server-side rendering
- [MongoDB](https://www.mongodb.com/) for non-relational database
- [Weather API](https://openweathermap.org/api) for weather api
- [Heroku](https://heroku.com) for deployment
- [Unsplash](https://unsplash.com/) for images

## Glossary 
- [Bootstrap](https://getbootstrap.com/) : Buttons, Card, Form for styling.  
- Image and Letter Hover Effects : Added interactivity to elements and made effects in CSS.
- Layouts : Used Flex, Grid, Position, Margin, Padding in CSS.
- [Mapbox](https://www.mapbox.com/) : Fetched a map api and displayed popups for certain locations on click with Maki symbols. 
- Responsive Web Design : Used media queries to make fittable pages for all devices and DOM to make sliders and scrolling nav bar.
- [Unsplash](https://unsplash.com/) : Used good quality of pictures from there. Appreciate the best photographers! :sparkles:
- [Google Script](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server) : Sending a email to me is set by Google Script.
 
 ## Future Development
 1. ENV Setting for weather api 

 2. Auth feature : LogIn/Out

 3. Edit/Delete for past journals

## Authors

#### Jiwon Han
* [GitHub](https://github.com/jiwon-seattle)
* [LinkedIn](https://www.linkedin.com/in/jiwon1han/)

## License

`My Daily Journal` is open source software [licensed as MIT][license].

Copyright (c) 2020 **_Jiwon Han_**

[//]: # (HyperLinks)
[license]: https://github.com/jiwon-seattle/My-Daily-Journal/master/LICENSE.md