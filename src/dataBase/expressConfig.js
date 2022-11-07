const express = require('express');
const todosRouter = require('./routes/todosRoutes');
const cors = require('cors');


const app = express();

// middlewares
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3110', // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
    optionsSuccessStatus: 200
})); 
app.use(todosRouter);

module.exports = app;