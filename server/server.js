let express = require('express');

let app = express();

console.log('starting express app2');

app.get('/', (req, res) => res.send('hello world make a change, this is pretty f**king awesome, travis build added to it, finally put it all together and it all works!!!'));

app.listen(3000, () => console.log('example app running on port 3000'));

