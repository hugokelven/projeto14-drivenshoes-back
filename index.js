import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';

import db from './controllers/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const answer = await db.collection("users").findOne({});
        res.send(`Sou o back e esse é o banco de dados: ${answer.msg}`);
    } catch (error) {
        console.log(`I64 - ${error}`)
        res.sendStatus(500);
    }
});

const port = process.env.PORT || 5000;
app.listen(port);