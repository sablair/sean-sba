const mongoSearchService = require('../../services/mongo-search-service');

function searchByTerm(req, res) {
    const { term } = req.query;

    if (!term) {
        res.json({
            error: 'Missing required parameter `term`',
        });
        return;
    }

    mongoSearchService.queryMongo(term)
        .then((results) => res.json(results));
}

function getSearchableTerms(req, res) {
    const { term } = req.query;

    if (!term) {
        res.json({
            error: 'Missing required parameter `term`',
        });
        return;
    }
    
    mongoSearchService.queryMongo(term, { 'name': 1, '_id': 0 })
        .then((results) => res.json(results));
}

module.exports = {
   getSearchableTerms,
   searchByTerm
}