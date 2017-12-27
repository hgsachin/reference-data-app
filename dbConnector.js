const MongoClient = require('mongodb').MongoClient;

var queryDB = (collection, query, callback) => {
    MongoClient.connect('mongodb://localhost:27017/RefData', (err, dbObject) => {
        if (err) {
            console.log('Unable to connect to MongoDB server');
            callback(err);
        }
        const db = dbObject.db('RefData');
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