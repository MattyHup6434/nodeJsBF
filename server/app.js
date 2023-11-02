const express = require ('express')
const Quote = require ('inspirational-quotes')
const port = 5500;

const app = express();

app.get('/',(req,res)=>{
res.send(Quote.getQuote());
})

app.listen(port , () =>{
    console.log('server is runing on port',port)
})