const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const { friendsRouter } = require("./routes/friends.router");
const { messagesRouter } = require("./routes/messages.router");

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
