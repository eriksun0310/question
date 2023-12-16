const express = require("express")
const app = express()



app.get('/', (req,res)=>{
    return res.send('test')
})

app.listen(3000, ()=>{
    console.log('server listen port 3000')
})