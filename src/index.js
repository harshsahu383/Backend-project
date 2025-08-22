import dotenv  from "dotenv";
dotenv.config({ path : "./.env" });
import app from "./app.js"
import connectDb from "./db/index.js"
let port = process.env.PORT || 1800;


connectDb()
.then(() => {
  app.listen(port, () => {
    console.log("server is been started");
  });
})
.catch((err) => {
  console.log(err);
  
});
