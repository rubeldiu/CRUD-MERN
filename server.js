const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT =  5000;
const cors = require('cors')
const {MONGOURI} = require('./keys');


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

require('./models/student')
app.use(express.json())
app.use(cors())
app.use(require('./router/studentRouter'))

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
