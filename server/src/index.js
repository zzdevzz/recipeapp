import express from 'express' // Used as framework to create API.
import cors from 'cors' // Allows communication rules between front end and backend.
import mongoose from 'mongoose' // ORM for MongoDB.

const app = express()

app.use(express.json()) //Make every request from frontend always be json.
app.use(cors()) //Only allow request made from cors.

app.listen(3001, () => console.log("SERVER STARTED!"))