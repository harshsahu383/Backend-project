import dotenv  from "dotenv";
dotenv.config({
    path : "./env/"
})
import app from "./app.js"

let port = process.env.PORT || 1800;
app.listen(port, (req, res) => {
  console.log("server is been started");
});