const express = require('express');
const chalk = require('chalk')
const app = express()

//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//*                   Reading in Express
//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

// technically could do const express = require('express')()
//! but that looks weird. if you look at express in the node modules - its simply a function
//* convention is to read in express and invoke it as app


app.all('*', (req, res) => {
    res.send('<h1>This is the home page</h1>')
})

//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//*                  app.all in Express
//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

//? app all is a method that takes two arguments
//*   1. Route
//*   2. callback to run if the route is requested


//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//*                 headers and end in Express
//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

//*   1. Express handles the basic headers
//*   2. Express handles the end that you need to call in the http node core library

//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//*                   app.listen in Express
//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

//*   * Pass the port number through app.listen => (app is the express function invoked)

app.listen(345)
console.log(chalk.inverse.bold.green(' The Server is listening on Port: 345 '))
