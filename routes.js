const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:39000/shopback';

router.get('/search', (req, res) => {
    const { term } = req.query;

    if (!term) {
        res.json({
            error: 'Missing required parameter `term`',
        });
        return;
    }
    
    MongoClient.connect(mongoUrl, (err, db) => {
        db.collection('items').find(
            { 
                '$text': { 
                    '$search': term 
                } 
            }, {}).toArray((err, docs) => {            
                res.json(docs);
                db.close();
            });        
    })    
});

router.get('/terms', (req, res) => {
    const { term } = req.query;

    if (!term) {
        res.json({
            error: 'Missing required parameter `term`',
        });
        return;
    }
    
    MongoClient.connect(mongoUrl, (err, db) => {
        db.collection('items').find(
            { 
                '$text': { 
                    '$search': term 
                }                 
            }, { 'name': 1, '_id': 0 }).toArray((err, docs) => {            
                res.json(docs);
                db.close();
            });        
    })    
});

module.exports = router;