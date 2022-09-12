const { friends } = require("../models/friends.model");

function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  const friendId = req.params.friendId;
  const friend = friends.find((friend) => friend.id == friendId);
  res.json(friend);
}

function postFriend(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const friend = {
    name,
    id: friends.length,
  };

  friends.push(friend);
  res.json(friend);
}

module.exports = {
  postFriend,
  getFriend,
  getFriends,
};
