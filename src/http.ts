// import {createServer, IncomingMessage, ServerResponse} from 'http'

import path from "path"

// const server = createServer((req : IncomingMessage, res: ServerResponse) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World\n')
// })

// const PORT = 3001

// server.listen(PORT, () => {
//     console.log(`Server running`)
// })

// import {createServer, IncomingMessage, ServerResponse} from 'http'
// import {parse} from 'url'

// const server = createServer((req : IncomingMessage, res: ServerResponse) => {
//     const parsedURL = parse(req.url || '', true);
//     const path = parsedURL.pathname || '';
    
//     if(req.method === 'GET'){
//         if(path === '/about'){
//             res.statusCode = 200
//             res.setHeader('Content-Type', 'text/plain')
//             res.end('About Page')
//         }else if(path === '/contact'){
//             res.statusCode = 200
//             res.setHeader('Content-Type', 'text/plain')
//             res.end('Contact Page')
//         }else if(path === '/'){
//             res.statusCode = 200
//             res.setHeader('Content-Type', 'text/plain')
//             res.end('Home Page')
//         }else{
//             res.statusCode = 404
//             res.setHeader('Content-Type', 'text/plain')
//             res.end('Error Page')
//         }
//     }
// })

// const PORT = 3001

// server.listen(PORT, () => {
//     console.log(`Server running`)
// })