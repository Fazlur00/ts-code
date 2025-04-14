const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs')
import userRoutes from './routes/userRoutes'

const app = express()
const port = 3005
app.use(express.json())
app.use('/api', userRoutes)

mongoose.connect('mongodb://localhost:27017/rahman')
.then(() => {
    console.log('MongoDB connected successfully');
}).catch((err : any) => {
    console.error('MongoDB connection error:', err);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
