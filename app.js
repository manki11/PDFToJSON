const express = require('express');
const app = express();
var json = require("./pdf2json/json/result.json");

app.get('/', (req, res) => res.send(json));

app.listen(3000, () => console.log('Example app listening on port 3000!'));