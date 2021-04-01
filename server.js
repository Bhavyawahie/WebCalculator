const express = require('express');
const app = express();

app.get("/",(req, res)=>{ 
    res.send("<h1>Calculator</h1>");
});
// function add(q1, q2){
//     return q1+q2;
// }

// function sub(q1, q2){
//     return q1-q2;
// }
// function mul(q1, q2){
//     return q1*q2;
// }
// function div(q1, q2){
//     return q1/q2;
// }
// function calculate(q1, q3, q2){
//     return q3(q1,q2);
// }


app.get("/calc/add",(req, res) => {
    let q1 = parseInt(req.query.q1);
    let q2 = parseInt(req.query.q2);
    let result = q1+q2;
    res.send("Answer " + result);
});
app.get("/calc/sub",(req, res) => {
    let q1 = parseInt(req.query.q1);
    let q2 = parseInt(req.query.q2);
    let result = q1-q2;
    res.send("Answer " + result);
});
app.get("/calc/mult",(req, res) => {
    let q1 = parseInt(req.query.q1);
    let q2 = parseInt(req.query.q2);
    let result = q1*q2;
    res.send("Answer " + result);
});
app.get("/calc/div",(req, res) => {
    let q1 = parseInt(req.query.q1);
    let q2 = parseInt(req.query.q2);
    let result = q1/q2;
    res.send("Answer " + result);
});

app.listen("3000", (req, res) =>{
    console.log("Server Running at port 3000");
});