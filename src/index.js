let express = require('express');
let app = express();

app.use(express.static('public'));

const PORT = process.env.port || 3000;

app.listen(PORT, ()=>console.log(`Server has started on ${PORT}`));