const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json({limit:"5mb"}));
dotenv.config();

const PORT = process.env.PORT || 5000;


try {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.on('connected',()=>{
        console.log("Dbconnected")
    })
} catch (error) {
    mongoose.connection.on('error',()=>{
        console.log(error.message)
    })
    console.log(error.message)
}  

fs.readdirSync("./routes").map((file)=>{
    app.use('/',require('./routes/'+file));
})

app.listen(PORT,()=>{
    console.log(`The server is running on the port-${PORT}`)
})