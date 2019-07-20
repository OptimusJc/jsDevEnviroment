var express = require('express'),
    path = require('path'),
    open = require('open')

// set port and instance of the app
var port = 3000,
    app = express()

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(port, (err) => {
    if(err) {
        console.log(err)
    }else {
        open('http://localhost:'+ port)
    }
})