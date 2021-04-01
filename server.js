const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post("/",(req, res) =>{
    let v1 = parseInt(req.body.n1);
    let v2 = parseInt(req.body.n2);
    let result = v1 + v2;
    res.send("Answer = " + result);
});


app.listen("3000", (req, res) =>{
    console.log("Server Running at port 3000");
});