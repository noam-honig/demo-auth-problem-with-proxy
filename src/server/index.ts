import express from "express";
import { auth } from "./auth.js";
import { api } from "./api.js";

const app = express();

app.set("trust proxy", true);
app.use("/auth/*", auth);
app.use(api);

// This code is responsible for serving the frontend files.
const frontendFiles = process.cwd() + "/dist";
app.use(express.static(frontendFiles));
app.get("/*", (_, res) => {
  res.sendFile(frontendFiles + "/index.html");
});
// end of frontend serving code

app.listen(process.env["PORT"] || 3002, () => console.log("Server started"));
