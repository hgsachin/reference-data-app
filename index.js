const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const fetchFuntions = require('./fetchFunctions');
const PORT = process.env.PORT || '3030';

const service = express();
service.use(bodyParser.json());

service.get('/metals', (req, res) => {
    fetchFuntions.getAllMetalDetails((err, doc) => {
        if (err) {
            res.sendStatus(404).send(`An error occured while getting metal details : ${err}`);
        } else {
            res.send({'metals' : doc});
        }
    });
});

service.get('/commodities', (req, res) => {
    fetchFuntions.getCommodities((err, doc) => {
        if (err) {
            res.sendStatus(404).send(`An error occured while getting commodities : ${err}`);
        } else {
            res.send(doc);
        }
    });
});

service.get('/counterParties', (req, res) => {
    fetchFuntions.getCounterparties((err, doc) => {
        if (err) {
            res.sendStatus(404).send(`An error occured while getting counterParties : ${err}`);
        } else {
            res.send(doc);
        }
    });
});

service.get('/locations', (req, res) => {
    fetchFuntions.getLocations((err, doc) => {
        if (err) {
            res.sendStatus(404).send(`An error occured while getting locations : ${err}`);
        } else {
            res.send(doc);
        }
    });
});

const server = http.createServer(service);
server.listen(PORT, (req, res) => {
    console.log(`Reference Data service started on ${PORT}`);
});