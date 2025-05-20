const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Good morning! Is this a good time for a coffee break?'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
