//const express = require('express');
//const app = express();
// Here we bring in (pass along the reference to our APP express web server)
const router = require('express').Router();
const fs = require('fs');

// All of these routes are prefixed with '/api'

// this endpoint is actually '/api/notes' w/ GET method
router.get('/notes', function(request, response) {
    // we need to request the DATASET --> send it back to the requester(client/Browser)
    // console.log("Data: ", data);

    // we want to READ IN the dataset from our data file (db.json)
    fs.readFile('./db/db.json', 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        }
        console.log("Dataset: ", data);
        console.log("Dataset Type: ", typeof data);
        response.json(JSON.parse(data));
    })
});

router.post('/notes', function(request, response) {
    // I like to verify that the INCOMING data is actually being passed
    console.log("request Body: ", request.body)
    
    // Then we need to READ IN our existing data
    fs.readFile('./db/db.json', 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        }
        console.log("Dataset: ", data);
        console.log("Dataset Type: ", typeof data);

        // Modify the data as needed
        let parsedData = JSON.parse(data)
        console.log("Dataset: ", parsedData);
        console.log("Dataset Type: ", typeof parsedData);
        
        // what are we adding(?)  --> the NEW NOTE INFO
        parsedData.push(request.body);
        console.log("Dataset: ", parsedData);

        // REWRITE the new data
        fs.writeFileSync('./db/db.json', JSON.stringify(parsedData), function(err, data) {
            if(err) {
                throw err;
            }
            response.json(parsedData)
            console.log("Saved data");

        })
     

    })

})

module.exports = router;