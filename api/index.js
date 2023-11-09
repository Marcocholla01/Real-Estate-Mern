import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("DB Connnection Established Sucessfully")
}).catch((err)=>{
    console.log(err.message)
})

const port = 3000 || process.env.PORT;
const app =  express();

app.listen(port,()=>{
    console.log('Server is running on port ' + port)
})