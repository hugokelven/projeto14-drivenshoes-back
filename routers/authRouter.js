import express from 'express';
import db from "./../controllers/db.js";


import { signUp, login, validateToken } from './../controllers/authController.js';


const authRouter = express.Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/login", login);
authRouter.get("/login", validateToken);
authRouter.get("/teste", async(req, res) => {
    res.send("Hello");
});

export default authRouter;