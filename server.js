const express = require('express');
const routes = require('./routes');
const db = require('./db');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use('/', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
