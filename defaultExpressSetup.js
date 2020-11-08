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

//secure headers
app.use(helmet());

// logging
app.use(morgan('tiny'))

// parse incoming json - content-type application/json
app.use(express.json())

// url encoded parsing - w/ extended false option
app.use(express.urlencoded({extended:false}))

//*-------------------------------------------------------------
//?                    Express Routes
//*-------------------------------------------------------------

app.get('/', (req,res) => {
    app.send({
        test: "Success"
    })
})

//*-------------------------------------------------------------
//?                    Express Ports
//*-------------------------------------------------------------


port = 1234

app.listen(port, ()=>{
    console.log("Listening on ", port)
})

