const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs')

const app = express()
const port = 3001

mongoose.connect('mongodb://localhost:27017/rahman')
.then(() => {
    console.log('MongoDB connected successfully');
}).catch((err : any) => {
    console.error('MongoDB connection error:', err);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Code should be logic implementated

// userAccount
// email
// password
// firstName
// lastName
// phoneNumber
// address
// city

// request api - validation
// {
//     userAccount
//     email
//     password
//     firstName
//     lastName
//     phoneNumber
//     address
//     city
// }

// schema - models