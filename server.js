
// Express to run server and routes
const express = require('express');
// Instance of app
const app = express();
// Dependencies
const bodyParser = require('body-parser');
// Middleware
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Cors
const cors = require('cors');
app.use(cors());
// Initialize the main poject folder
app.use(express.static('website'));


// router
require('./routers/routes')(app);

// Setup server
const port = 8000;
app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// Setup database
const db = require("./models/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
