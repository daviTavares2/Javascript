import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();

app.listen(port, ()=>{
console.log(`Server Listening on port ${port}`);
})