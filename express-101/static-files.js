const express = require('express');
const chalk = require('chalk')   
const app = express()

//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
//*               The app USE has methods
//? -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

//? the middleware that you want to run

//? for static files we pass express.static('PATH')

app.use(express.static('public'))



app.listen(346)
console.log(chalk.green.inverse.bold(' Listening on 346 - static files '))