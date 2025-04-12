import express from 'express'
import dotenv from 'dotenv'
import { dbConnection } from './db/config'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000 

// Test route
app.get("/", (req,res)=>{
    res.send("App is running..")
})

app.listen(port, ()=>{
    dbConnection()
    console.log("App is running on port ",port)
})