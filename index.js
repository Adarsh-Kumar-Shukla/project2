require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('adarsh.com');
})

app.get('/login',(req,res) => {
    res.send('<h1>Hi! my name is Adarsh<h1> <br> <h2>I am a Student<h2>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
