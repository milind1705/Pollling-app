require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000
const pollRoute = require('./routes/poll')

// set public folder
app.use(express.static(path.join(__dirname, 'public')));
// body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Enable CORS
app.use(cors());
app.use('/poll', pollRoute)
//start the server
app.listen(port, () =>{
    console.log(`app is running on the port ${port}`)
})