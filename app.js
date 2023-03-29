const express = require("express")
const app = express()
const port = 8030
app.use(express.static(__dirname+'/public'));


app.get('/',function(req,res){
    res.sendfile(__dirname + '/public/html/index.html')
})

app.listen(port,()=>{
    console.log(`servidor rodando em localhost:${port}`)
})




// express 