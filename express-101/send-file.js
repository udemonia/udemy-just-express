const path = require('path')
const express = require('express')
const chalk = require('chalk')
const app = express()

app.use(express.static('public'))


console.log(path.join(__dirname))
app.all('/', (req, res) => {
    // absolute path
    res.sendFile(path.join(__dirname + '/public/test.png'))
})

app.listen(404)
console.log(chalk.inverse.bold.red(' Listening on port 404: Send File EXAMPLE '))