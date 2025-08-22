import express from "express";
import cors from "cors";
const app = express();
// require configurations
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
//cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:1800"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);
import healthCheckRouter from "./routes/healthcheck.routes.js";
app.use("/api/v1/healthcheck", healthCheckRouter);
app.get("/", (req, res) => {
  res.send("hello");
});
export default app;
