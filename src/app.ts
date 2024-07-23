import cors from "cors";
import * as dotevnv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
dotevnv.config();

import "./Common/DatabaseConnection";
import { productRouter } from "./senderEmails/senderEmail.routes";

if (!process.env.PORT) {
  console.log(`No port value specified...`);
}

const PORT = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.use("/senderEmails", productRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
