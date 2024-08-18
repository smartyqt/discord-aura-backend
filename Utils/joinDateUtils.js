const getDiscordJoinDate = (discordID) => {
  const discordEpoch = 1420070400000;
  const timestamp = parseInt(discordID) >> 22;
  const joinDate = new Date(timestamp + discordEpoch);
  return joinDate;
};

const calculateJoinDateScore = (discordID) => {
  const joinDate = getDiscordJoinDate(discordID);
  const joinYear = joinDate.getFullYear();

  let score = 0;

  if (joinYear <= 2017) {
    score = 100;
  } else if (joinYear <= 2019) {
    score = 80;
  } else if (joinYear <= 2021) {
    score = 50;
  } else {
    score = 20;
  }

  return score;
};

const calculateNameScore = (username) => {
  let capitalLetters = 0;

  for (let i = 0; i < username.length; i++) {
    if (username[i] === username[i].toUpperCase() && isNaN(username[i])) {
      capitalLetters++;
    }
  }

  const totalLength = username.length;
  const capitalPercentage = (capitalLetters / totalLength) * 100;

  let lengthScore = 0;
  if (totalLength <= 3) {
    lengthScore = 50;
  } else if (totalLength <= 6) {
    lengthScore = 30;
  } else {
    lengthScore = 10;
  }

  let capitalScore = 0;
  if (capitalPercentage > 50) {
    capitalScore = 20;
  } else if (capitalPercentage > 20) {
    capitalScore = 10;
  } else {
    capitalScore = 5;
  }

  const totalScore = lengthScore + capitalScore;

  return totalScore;
};

module.exports = { calculateJoinDateScore, calculateNameScore };
