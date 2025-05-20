const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Coffee break! 15mins and lets do Lab 3'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
