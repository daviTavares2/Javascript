import express from "express";
const app = express();
const port = 1000;

app.get("/",(req, res) => {
    res.send("<h1>Hello</h1>");
});
 
app.get("/contact",(req,res) => {
    res.send("<h1>My Phone:+55 (81) 998953122</h1>");
});

app.get("/about",(req,res) => {
    console.log("My name is david and im passionate for technology")
});

app.listen(port, ()=>{
console.log(`server is running in port ${port}`);
}); 