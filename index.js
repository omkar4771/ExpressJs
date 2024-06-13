const express = require("express");
const { name } = require("../NodeJs/Node_Day-1/Fruits/apple");
const app = express();

console.dir(app);
let port = 8080;

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
    // control + c for stop the server
    app.use((req,res)=>{
        console.log("request recived");
        // res.send("this is basic response");
        // res.send({
        //     name : "apple",
        //     color : "yellow",
        // });
        // res.send("<h1>Fruits</h1> <ul><li>apple</li> <li>mango</li> </ul>");

        app.get("/",(req,res)=>{
            res.send("Hellow i am root");
        });
        app.get("/home",(req,res)=>{
            res.send("you contacted home path");    
        });
        app.get("/search",(req,res)=>{
            res.send("you contacted search path");
        });
        app.post("/",(req,res)=>{
            res.send("you send a post request to root");
        });

    });
});
