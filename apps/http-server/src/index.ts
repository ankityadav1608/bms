import express from "express";
import { client } from "@repo/db/client"

const app = express();

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hi from http server")
})

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const result = await client.user.create({
        data: {
            username,
            password
        }
    })

    res.json({
        message: "user created successfully",
        id: result.id
    })
})

app.listen(3005)