// require('dotenv').config({path:'./env'}) we can improve this line of code as it breaks our consistency in code
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Initialize dotenv to use environment variables
dotenv.config({
    path: './env'
});

// Initialize Express app
const app = express();

//i was getting this error bcz i have not initilize app i.e const app = express
// MongoDB connected !! DB HOST : [object Object]
// MONGO db connection failed !! ReferenceError: app is not defined

// Connect to the database
connectDB()
    .then(() => {
        // Start the server after successful database connection
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        // Log an error if the database connection fails
        console.log("MONGO db connection failed !!", err);
    });




/* 1st approach using iife ,try catchc,error handle ,aur database dusre continent m h isliye async await bhi use kiya h
import express from "express"
const app = express

(async () => {  //using of iifes
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR" , error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);

        })
    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()

*/

// function connectDB(){} (1st approach)

// connectDB()












//note : database s baat karte samay problem aati h isliye use try catch a far better approach or promises
// database is always in other coninent isliye async await try catch ka dhyan rkhna h