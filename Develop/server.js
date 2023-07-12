// first we bring in any files or libraries we need/want
const express = require('express');


const routes = require('./routes');
// const data = require('./db/db.json');

// We need to INITALIZE an EXPRESS SERVER
const app = express();
const PORT = process.env.PORT || 3002;

// we have middleware setup
// these two lines PARSE the INCOMING (client/browser) DATA BODY 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// points EXPRESS to our not often changing files
app.use(express.static('public'));

// WE have ROUTES & DATA LOGIC
app.use(routes);

// console.log("PATH: ", __dirname);


// WE START OUR SERVER LISTENING FOR INCOMING REQUESTS
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});