const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3001));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
    res.json([
        { "id": 1, "name" : "Grocery basket", "details": "Very cool basket" },
        { "id": 2, "name" : "Grocery cart", "details": "Very cool cart" }
    ]);
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});