const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')


const blogroutes=require("./Routes/blog")





const app=express();
app.use(cors())
app.use(bodyparser.json())
app.use(blogroutes)
app.listen(3000)


