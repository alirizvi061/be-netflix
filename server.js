const express = require('express')
// console.log(express)

const app = express() 

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(3003, () =>{
console.log("the world is listening!")
})  