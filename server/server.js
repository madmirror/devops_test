let express = require('express');

let app = express();

app.get('/', (req, res) => res.send('hello world'));

app.listen(3000, () => console.log('example app running on port 3000'));

