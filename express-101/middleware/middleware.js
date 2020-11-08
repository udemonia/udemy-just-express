const express = require('express')
const path = require('path')
const app = express() //invoke express


//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//*                    Middleware
//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

//? express is two things
//? 1. Router
//? 2. Middleware that comprises a web framework

//* TCP/IP Http request
//!  Request ---> Middleware <----- Response
//* A middleware function is any function that has access to the 
//* Request, Response, Next object

//? 1. request comes in
//! 2. validate user
//! 3. store data in db
//! 4. parse user data and store it
//? 5. respond how we need to

function validateUser(req,res,next) {
    res.locals.validate = true
    console.log('Validated User')
    next();
}
// * use middleware on all Routes - all Methods
app.use(validateUser)
//*  use middleware on one route - all methods
app.use('/admin', validateUser)

//*  Use middleware on one route - one method
app.get('/admin', validateUser)

// use the validate user function at an application level

app.get('/', (req,res,next) => {
    res.send('<h1>Brandon</h1>')
    console.log(res.locals.validate)
})

app.get('/admin', (req,res,next) => {
    res.send('<h1>Brandon</h1>')
    console.log(res.locals.validate)
})
app.get('/', (req,res,next) => {
    res.send('<h1>Brandon</h1>')
    console.log(res.locals.validate)
})

app.listen(9000)
console.log('listening on port 9k.....')