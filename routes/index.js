
//const express = require('express');
//const app = express();
// Here we bring in (pass along the reference to our APP express web server)
const router = require('express').Router()
const apiRoutes = require('./api')
const path = require('path');

router.use('/api', apiRoutes);

router.get('/notes', function(request, response) {
    response.sendFile(path.join(__dirname, "../public/notes.html"))
});

router.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"))
});


module.exports = router;