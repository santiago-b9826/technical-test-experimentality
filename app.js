const express = require('express');

let app = new express();

const {
    server
} = require('./server');

server(app);

app.listen(app.get('port'), () => {
    console.log(`Integrations and changing life quotes running on port ${app.get('port')}`);
});