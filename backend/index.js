const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');
// const DB = require('./data/DBClient')
const api = require('./API/sign')

const app = express();
app.use(bodyParser.json());
app.use(cors());

//以下API部分
app.post('/signIn', async function(req, res) {
    api.signIn(req, res);
});

app.post('/signUp', function(req, res) {
    api.signUp(req, res);
})

app.listen(process.env.PORT || 3000);