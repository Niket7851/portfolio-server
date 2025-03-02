const express = require('express');
const env = require('dotenv');
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const userRoutes = require('../server/routes/userRoutes')

const app = express();
env.config();
app.use(express.json());

const PORT = process.env.PORT || 8000;
const MONGOURI = process.env.MONGO_URI;
const connectDb = async () =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI).then(
            console.log("MongoDb Database Connected")
        );
    }catch(err){
        console.log("Database is not connected",err);
    }
}

app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
    res.send("API is Running")
})

app.use("/user",userRoutes)

app.listen(PORT, console.log("Server is Running..."))
connectDb();