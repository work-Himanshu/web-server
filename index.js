import express from "express";
import {fileURLToPath} from "url";
import {dirname} from "path";
import bodyParser from "body-parser";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/submit",(req,res)=>{
    console.log(req.body);
    res.send("Submitted")
})

app.listen(port,()=>{
    console.log(`Server is listening on ${port}.`);
});