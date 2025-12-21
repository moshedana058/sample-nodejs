const express = require("express");
const client = require("prom-client");

const app = express();

const PORT = Number(process.env.PORT || 8080);

let BASE_PATH = (process.env.BASE_PATH || "/moshe-dana-app").trim();
if (!BASE_PATH.startsWith("/")) BASE_PATH = "/" + BASE_PATH;
BASE_PATH = BASE_PATH.replace(/\/+$/, "");
if (BASE_PATH === "") BASE_PATH = "/";

const GREETING = (process.env.APP_GREETING || "Hello, World!").trim() || "Hello, World!";

const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get("/", (_req, res) => res.status(200).send(GREETING));
app.get("/ready", (_req, res) => res.status(200).send("Ready"));
app.get("/live", (_req, res) => res.status(200).send("Alive"));
app.get("/metrics", async (_req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.get(BASE_PATH, (_req, res) => res.status(200).send(GREETING));
app.get(`${BASE_PATH}/`, (_req, res) => res.status(200).send(GREETING));
app.get(`${BASE_PATH}/ready`, (_req, res) => res.status(200).send("Ready"));
app.get(`${BASE_PATH}/live`, (_req, res) => res.status(200).send("Alive"));
app.get(`${BASE_PATH}/metrics`, async (_req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} (BASE_PATH=${BASE_PATH})`);
});
