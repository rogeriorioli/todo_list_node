const express = require('express');
const  route = require('./routes');

const app = express();

app.use(express.json());

app.use(route)


app.listen(3333, () => console.log('runni ng on port 3333'));