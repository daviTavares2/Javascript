import express from "express";
const app = express();
const port = 1000;

app.get("/",(req, res) => {
    res.send("<h1>Hello</h1>");
});
 
app.get("/contact",(req,res) => {
    res.send("<h1>My Phone:+55 (81) 998953122</h1>");
});

app.get("/about"(req,res) => {
    res.send("<h1>About me</h1>");
        res.send("<h2>My Name is David , i was born and raised in Brazil , since i was Kid i alredy was passionate about tech and video games.</h2>");
});
app.listen(port, ()=>{
console.log(`server is running in port ${port}`);
});