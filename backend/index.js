const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/auth', function(req, res) {
    if(req.body.id == "une" && req.body.pass == "unko"){
        res.send({
            message: "OK"
        })
    }else{
        res.send({
            message: "認証エラー"
        })
    }
});

app.listen(process.env.PORT || 3000);