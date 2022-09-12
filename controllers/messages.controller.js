const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "images", "tof.png"));
}

function postMessage(req, res) {
  console.log("Updating messages ...");

  return res.json({
    message: "good ...",
  });
}

module.exports = {
  getMessages,
  postMessage,
};
