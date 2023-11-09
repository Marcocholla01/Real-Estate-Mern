import express from 'express'

const port = 3000 || process.env.PORT;
const app =  express();

app.listen(port,()=>{
    console.log('Server is running on port ' + port)
})