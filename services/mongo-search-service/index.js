const MongoClient = require('mongodb').MongoClient;
const mongoUrl = process.env.mongoUrl || 'mongodb://localhost:39000/shopback';

function queryMongo(term, fields = {}) {
    return MongoClient.connect(mongoUrl)
        .then((db) => {        
            return db.collection('items').find(
                { 
                    '$text': { 
                        '$search': term 
                    } 
                }, {})
                .toArray()
                .then((docs) => { 
                    db.close(); 
                    return docs;
                });
        });          
}

module.exports = { queryMongo };