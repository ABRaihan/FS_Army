const express = require("express");
const routes = require("./routes/index");
const app = express();

app.use(express.json()); /* @__Read body buffer__@ */
app.use(routes); /* @__All routes included__@ */

/* @__Global Error Handler Middleware__@ */
app.use((err, _req, res, _next) => {
  const message = err.message ? err.message : "Server error";
  const status = err.status ? err.status : 500;

  res.status(status).json({
    message,
  });
});

/* @__Server Listener__@ */
app.listen(4000, () => {
  console.log("Server is running port 4000");
});
