const calculateStatusScore = (status) => {
  if (status === "offline") {
    return 10;
  } else if (status === "online") {
    return 20;
  }
  return 5;
};

module.exports = { calculateStatusScore };
