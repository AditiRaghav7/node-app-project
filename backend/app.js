const express = require('express');
const appRoutes = require('./routes/appRoutes.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./db/conn');  // Make sure to import the connection here
const axios = require('axios');


const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", appRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

axios.get('https://example.com', { timeout: 20000 }) // Timeout of 20 seconds
.then(response => console.log(response))
.catch(error => console.error(error));
