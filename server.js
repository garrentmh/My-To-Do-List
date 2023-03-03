const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/to-do-list-element'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/to-do-list-element/index.html');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})