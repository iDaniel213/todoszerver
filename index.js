import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import {config} from './config.js';

const db = mysql.createConnection(config)
const app = express()
app.use(express.json())

app.use(cors())

app.get('/name', (request,response) => {
    console.log("Szia.")
    db.query('select name from todos',(error,results)=>{
        if (error) 
        console.log(error)
        else
        response.send(results)
    })
    
})


app.listen(8000,()=> console.log("szerver listening on port "))