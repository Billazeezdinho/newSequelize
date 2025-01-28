//import express database
const express = require('express');
//import sequelize database
const sequelize = require('../DATABASE/sequelize');
const clubRouter = require('./routes/clubRouter');

const PORT = 1230;
const app = express();
app.use(express.json());

app.use(clubRouter);

//use the express body-parser middleware


const server = async ()=>{
    try {
        
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch (error){
        console.error('unable to connect to the database:', error);
    }
}
server();


app.listen(PORT, ()=>{
    console.log(`This app is listening to PORT: ${PORT}`);
    
})