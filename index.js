const express = require("express");
const app = express();
const port = 3000;

const friends = [
  { id: 0, name: "Patrick O." },
  { id: 1, name: "ESSOME Leroy" },
  { id: 2, name: "Georges S." },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = req.params.friendId;
  const friend = friends.find((friend) => friend.id == friendId);
  res.json(friend);
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
