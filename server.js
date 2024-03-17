const express = require('express');
const apiRoutes = require('./Develop/routes/apiRoutes.js');
const htmlRoutes = require('./Develop/routes/htmlRoutes.js');

const app = express ();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});