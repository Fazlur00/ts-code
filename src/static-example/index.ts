const express = require('express');
const mongoose = require('mongoose');
import { Request, Response } from 'express'
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3005

const fileLogPath = path.join('G:/logs', 'app.logs')

if(!fs.existsSync('G:/logs')) {
    fs.mkdirSync('G:/logs', { recursive: true }, (err : any) => {
        if (err) throw err;
        console.log('Directory created successfully');
    })
}
fs.appendFile(fileLogPath, 'application started '+new Date().toISOString() + '\n', (err : any) => {
    if (err) throw err;
    console.log('File created successfully');
});

// fs.writeFile(fileLogPath, 'application started '+new Date().toISOString(), (err : any) => {
//     if (err) throw err;
//     console.log('File created successfully');
// });

app.get('/', (req : Request, res:Response) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname+"/static", 'index.html'))
})

app.use(express.static(path.join(__dirname, 'static')))

app.get('/with-styles', (req : Request, res:Response) => {
    res.sendFile(path.join(__dirname+"/static", 'staticfile.html'))
})



mongoose.connect('mongodb://localhost:27017/rahman')
.then(() => {
    console.log('MongoDB connected successfully');
}).catch((err : any) => {
    console.error('MongoDB connection error:', err);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
