const express = require('express');
const chalk = require('chalk')
const app = express()

//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//*               The app object has methods
//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

//*     1. GET - get something 
//*     2. PUT - update
//*     3. POST - post to server
//*     4. DELETE - remove from server

//*     5. ALL - accept any http method.

//?  CRUD operations

// app.all('/', (req, res)=>{
//     console.log(req)
//     res.send({
//         title: "Welcome to my SERVER!",
//         person: "Brandon",
//         age: 38,
//         man: true
//     })
// })

app.get('/', (req, res) => {
    console.log(req)
    res.send({
        title: "Welcome to my SERVER!",
        person: "Brandon",
        age: 38,
        man: true
    })
});

app.post('/', (req, res) => {
    console.log(req)
    res.send({
        title: "You've posted stuff",
        person: "brandon"
    })
});

app.put('/', (req, res) => {

});

app.delete('/', (req, res) => {

});

app.listen(345)
console.log(chalk.inverse.bold.green(' The Server is listening on Port: 345 '))
