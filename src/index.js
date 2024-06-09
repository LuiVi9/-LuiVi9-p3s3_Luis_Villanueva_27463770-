import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "view"));
app.set("view engine", "ejs");
app.use(indexRoutes);

app.listen(3000);

console.log("Server listening on port", 3000);
