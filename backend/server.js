const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/expenses', );

app.use((req, res, next) => {
    const error = new HttpError('couldnt find this route', 404);
    throw error;
});

app.use((error, req, res, next) => {
    console.error(error.stack);
    if (res.headerSent) {
        return next(error);
    }

    res
        .status(error.code || 500)
        .json({ msg: error.message || 'Internal Server Error' });
});

app.listen(5010);
