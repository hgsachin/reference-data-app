const expect = require('expect');
const fetchFunctions = require('../fetchFunctions');

describe('fetchFunctions tests', () => {
    it('should fetch all commodities', (done) => {
        let commodities = fetchFunctions.getCommodities();
        expect(typeof commodities).toBe('function');
        done();
    });
    it('should fetch all counterParties', (done) => {
        let counterParties = fetchFunctions.getCounterparties();
        expect(typeof counterParties).toBe('function');
        done();
    });
    it('should fetch all Locations', (done) => {
        let locations = fetchFunctions.getLocations();
        expect(typeof locations).toBe('function');
        done();
    });
    it('should fetch all metal Trades', (done) => {
        let metalTrades = fetchFunctions.getAllMetalDetails();
        expect(typeof metalTrades).toBe('function');
        done();
    });
});