// the purpose of this script is to document res.render functionality within express
const helmet = require("helmet");
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const app = express();



//path for PWD
const publicDirectoryPath = path.join(__dirname,'../public')

//*-------------------------------------------------------------
//?                    Express Middleware
//*-------------------------------------------------------------


// serve up public folder
app.use(express.static('public'))

// logging
app.use(morgan('tiny'))

//secure headers
app.use(helmet());

// parse incoming json - content-type application/json
app.use(express.json())

// url encoded parsing - w/ extended false option
app.use(express.urlencoded({extended:false}))

//*-------------------------------------------------------------
//?                    Express Routes
//*-------------------------------------------------------------

app.get('/', (req,res,next) => {
    res.json({
        Hello: "🧙‍♀️💫 - Hello World - 💫🧙‍♀️"
    })
})

//!-------------------------------------------------------------
//?                    Express Routes
//!-------------------------------------------------------------

// ? in order to use res.render()

// 1. Express as we know it
// 2. We define a view engine
    // EJS
    // Handlebars
    // Mustache
    // Jade/pug
// 3. Create a route with res.render()
// 4. We pass res.render two things
    // File we want to use
    // the data we want to send to that file

// 5. Express uses the node module for our specified view engine and parses the file

// takes the html, js, css and combines it with whatever node there is in the file
// the final result of this process is a compiled product of things the browser can read

app.set('view engine', 'ejs')
app.set('view', publicDirectoryPath)

app.get('/brandon', (req,res) => {
    res.render('index')
})

//*-------------------------------------------------------------
//?                    Express Ports
//*-------------------------------------------------------------


port = 1234

app.listen(port, ()=>{
    console.log("Brandon Listening on ", port)
})

