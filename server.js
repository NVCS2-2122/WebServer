const express = require('express')
const app = new express()

app.use(express.static("public"))

app.get('/hello', (request,response) => {
    response.send("My new message")
    console.log(request.ip)
})

app.get('/guess', (req,res) => {
    console.log(req.query.fullName)
    res.send("YOU'RE WRONG!")
})

app.get('/movies', (request, response) => {
    const movie = {
        name: "Ace Ventura Pet Detective",
        rating: 10
    }
    response.send(movie)
})

app.listen(3000, () => {
    console.log("server started")
})