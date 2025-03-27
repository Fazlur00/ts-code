// const express = require('express')
// const app = express()
// const port = 3001

// GET, POST, PUT, DELETE, PATCH
// 

// path = '/about'
// parameter = '/about/:id'
// queryParameter = '/about?id=1'

// html - static
// api - json, xml

// app.get('/', (req : any, res : any) => {
//   res.send('Hello World!')
// })

// app.get('/about', (req : any, res : any) => {
//   res.send('About Page')
// })

// app.get('/user/:username', (req : any, res : any) => {
//   const username = req.params.username
//   res.send(`welcome ${username}`)
// })


// app.get('/search',(req : any, res:any, next : ()=>void)=> {
//   console.log("Sample")
//   // res.send(`middleware`)
//   next()
// }, (req : any, res : any) => {
//   const keyword = req.query.keyword || '';
//   const userDevice = req.query.userDevice || '';
//   res.send(`welcome ${keyword}, and your device is ${userDevice}`)
// })

// app.get('/search',(req : any, res:any, next : ()=>void)=> {
//   console.log("Sample")
//   res.send(`middleware`)
//   next()
// }, (req : any, res : any) => {
//   const keyword = req.query.keyword || '';
//   const userDevice = req.query.userDevice || '';
//   res.send(`welcome ${keyword}, and your device is ${userDevice}`)
// })


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })