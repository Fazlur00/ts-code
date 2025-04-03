// const express = require('express');
// const mongoose = require('mongoose');
// const fs = require('fs')

// const app = express()
// const port = 3001

// developer - selvakumar 
// github => clone to pc => after finishing the code => local environment => db clone local


// Uncomment this run without ssl connections in local 
// mongoose.connect('mongodb://localhost:27017/rahman')
// .then(() => {
//     console.log('MongoDB connected successfully');
// }).catch((err : any) => {
//     console.error('MongoDB connection error:', err);
// })

// mongodb connection db create - 
// db can only be created when new record updated



// this is for local connection with ssl - type 1 with self-signed certificate
// local mongodb community editor - ssl connection - self signed certificate enterprises level
// mongoose.connect('mongodb://sample.mongodb.com:27017/rahman', {
//     ssl: true,
//     sslValidate: true,
//     sslCA: fs.readFileSync('./ca.pem')
// })
// .then(() => {
//     console.log('MongoDB connected successfully');
// }).catch((err : any) => {
//     console.error('MongoDB connection error:', err);
// })


// this is for remote connection with ssl - type 1 
// Server DB - ATLAS or AWS, Azure MongoDB
// mongoose.connect('mongodb+srv://username:password@sample.mongdodb/rahman?retryWrites=true&w=majority')
// .then(() => {
//     console.log('MongoDB connected successfully');
// }).catch((err : any) => {
//     console.error('MongoDB connection error:', err);
// })



// this is for remote connection with ssl - type 2 in aws mongodb services - self signed certificate

// aws account creation
// aws mongodb servcies
// aws credentials - aws access key id and secret access key
// aws cli install 
// aws cli configure - aws access key id and secret access key
// aws cli configure - region and output format 
// aws cli configure - default region name and output format
// aws cli test connections - aws mongodb services
// aws connect to nodejs application - aws mongodb services
// aws connect to nodejs application - aws mongodb services - ssl connection - self signed certificate


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })