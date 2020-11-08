const http = require('http');
const nodemon = require('nodemon');

// create server method, takes one argument - callback
// callback has a request and response object

const server = http.createServer((req,res)=> {
    console.log(req)

    // http
    // 1. start message - taken care of by node 
    // 2. Header 
    // 3. Body 
    //? write head takes two args status code and 
    // res.writeHead(200, {
    //     'content-type:': 'text/html'
    // });
    // res.write('<h1>Hello Mfs</h1>')
    // res.end()
})


server.listen(8000)