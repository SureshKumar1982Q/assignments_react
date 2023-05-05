const express = require('express')

const cors = require('cors')
const app = express()
const fs = require('fs')
app.use(cors())

app.get('/getMovies',(req,res)=>{
     console.log('getMovies')
    fs.readFile('./data.txt','utf8',(err,data)=>{
      console.log('server', data)
       res.status(200).send(data)
    })
  
})

app.listen(5000,()=>console.log('server listening'))



