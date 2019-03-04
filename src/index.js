let express = require('express');
let app = express();

let personRoute = require('./routes/person')

app.use(personRoute);

app.use(express.static('public'));

const PORT = process.env.port || 3000;

app.listen(PORT, ()=>console.log(`Server has started on ${PORT}`));