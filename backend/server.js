import express from "express"
import dotenv from "dotenv"
import path from "path" // Added path
import ConnectDb from "./config/Db.js";
import AuthRoute from "./routes/auth.route.js"
import cors from 'cors'

const app = express();


dotenv.config();


ConnectDb();

app.use(cors())
app.use(express.json());

// routes
app.use("/api/auth", AuthRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is working on ${PORT}`)
})