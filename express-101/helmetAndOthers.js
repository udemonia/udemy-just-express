const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express()

app.use(morgan('tiny'))

app.use(express.static('public'))

// parse incoming json - content-type application/json
app.use(express.json())

// url encoded parsing - w/ extended false option
app.use(express.urlencoded({extended:false}))

app.use(cors())


app.post('/ajax', (req,res)=> {
    console.log(req.body)
    console.log(req.headers)
    console.log(req.body)
    // res.send('TEST')
    res.json('Test')
})

port = 1124
app.listen(port, ()=> {
    console.log('Listening on port ', port)
})