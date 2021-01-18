const express = require('express');

const app = express();

app.use(express.static('./dist/movie-recommendation'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/movie-recommendation/'}),
);

app.listen(process.env.PORT || 8080);