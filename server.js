const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/calc/:op",(req, res) =>{
    let var1 = parseInt(req.query.n1);
    let var2 = parseInt(req.query.n2);
    let result;
    switch(req.params.op){
    case "add" : result = var1 + var2; break;
    case "sub":  result = var1 - var2; break;
    case "mult": result = var1 * var2; break;
    case "div":  result = var1 / var2; break;
    }
    res.send(`
    <html> 
    <body>
        <h1>Result = ${result}</h1>
    </body>
    </html>
    `);
});


app.listen("3000", (req, res) =>{
    console.log("Server Running at port 3000");
});