const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const pageNotFoundController = require('./controllers/404');

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(pageNotFoundController.get404Page);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));