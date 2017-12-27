const MongoClient = require('mongodb').MongoClient;

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/'

var queryDB = (collection, query, callback) => {
    MongoClient.connect(`${DB_URL}reference_data`, (err, dbObject) => {
        if (err) {
            console.log('Unable to connect to MongoDB server');
            callback(err);
        }
        const db = dbObject.db('reference_data');
        db.collection(collection).find(JSON.parse(query)).toArray().then((docs) => {
            callback(undefined, docs);
        }, (e) => {
            console.log('Error occured while finding data', e);
            callback(e);
        });
        dbObject.close();
    });
}

module.exports.queryDB = queryDB;