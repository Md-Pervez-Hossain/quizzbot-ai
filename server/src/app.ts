import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//test route
app.get("/", (req: Request, res: Response) => {
  res.send("Ai-Quizzbot server is running!");
});

export default app;
