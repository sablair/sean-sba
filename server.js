const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/search', (req, res) => {
    const { term } = req.query;

    if (!term) {
        res.json({
            error: 'Missing required parameter `term`',
        });
        return;
    }
    res.json([{ "name" : "Grocery basket", "details": "Very cool basket" }]);
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});