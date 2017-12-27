const dbConnector = require('./dbConnector');
const COUNTERPARTIES = 'Counterparties';
const COMMODITIES = 'Commodities';
const LOCATIONS = 'Locations';
const METALS = 'Metals';

const getCounterparties = (partyCode, cb) => {
    dbConnector.queryDB(COUNTERPARTIES, `{"_id": ${partyCode}}`, (error, docs) => {
        if (error) {
            console.log(error);
            cb(error);
        } else if (docs.length === 0) {
            cb(`No Counterparties found for ${partyCode}`);
        } else {
            console.log(JSON.stringify(docs, undefined, 4));
            cb(undefined, docs);
        }
    });
}

const getCommodities = (commodityCode, cb) => {
    dbConnector.queryDB(COMMODITIES, `{"_id": ${commodityCode}}`, (error, docs) => {
        if (error) {
            console.log(error);
            cb(error);
        } else if (docs.length === 0) {
            cb(`No Commodities found for ${commodityCode}`);
        } else {
            console.log(JSON.stringify(docs, undefined, 4));
            cb(undefined, docs);
        }
    });
}

const getLocations = (locationCode, cb) => {
    dbConnector.queryDB(LOCATIONS, `{"_id": ${locationCode}}`, (error, docs) => {
        if (error) {
            console.log(error);
            cb(error);
        } else if (docs.length === 0) {
            cb(`No Location found for ${locationCode}`);
        } else {
            console.log(JSON.stringify(docs, undefined, 4));
            cb(undefined, docs);
        }
    });
}

const getAllMetalDetails = (cb) => {
    dbConnector.queryDB(METALS, '{}', (error, docs) => {
        if (error) {
            console.log(error);
            cb(error);
        } else if (docs.length === 0) {
            cb('No MetalDetails found');
        } else {
            console.log(JSON.stringify(docs, undefined, 4));
            cb(undefined, docs);
        }
    });
}

module.exports = {
    getCounterparties,
    getCommodities,
    getLocations,
    getAllMetalDetails
}