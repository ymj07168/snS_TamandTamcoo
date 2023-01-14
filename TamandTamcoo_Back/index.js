const express = require('express')
const app = express();
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

mongoose.set('strictQuery', false)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api/users', require('./routes/users'));
app.use('/auth/backgrounds', require('./routes/backgrounds'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))