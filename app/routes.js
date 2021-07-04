const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const bodyParser = require('body-parser');
const crypto = require('crypto');



module.exports = function (app) {


    app.get('/', function (req, res) {
        res.send('Hello world!')
    });

    app.use(bodyParser.urlencoded({ extended: true }));
   
};
