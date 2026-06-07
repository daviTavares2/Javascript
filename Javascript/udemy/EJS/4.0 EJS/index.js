import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    console.log(day);
    res.render("index.ejs",
    { dayType: "a weekday",
      advice: "its time to work  Hard",
     })
});

app.listen(port, ()=>{
console.log(`Server Listening on port ${port}`);
})