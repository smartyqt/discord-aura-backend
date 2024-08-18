const {
  calculateNameScore,
  calculateJoinDateScore,
} = require("./joinDateUtils");
const { calculateStatusScore } = require("./statusUtils");

const calculateAura = async (userData) => {
  const aura = {};

  aura.usernameScore = calculateNameScore(userData.username);
  aura.joinDateScore = calculateJoinDateScore(userData.id);
  aura.statusScore = calculateStatusScore(userData.status);

  aura.totalAuraScore =
    aura.usernameScore + aura.joinDateScore + aura.statusScore;

  return aura;
};

module.exports = { calculateAura };
