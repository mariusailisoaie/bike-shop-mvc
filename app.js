const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000 || process.env.PORT;
app.listen(PORT, console.log(`Server running on port ${PORT}`));