const axios = require("axios");
const Lookup = require("../models/Lookup");
const { calculateAura } = require("../utils/calculateAura");

const getUserInfo = async (req, res) => {
  const { userID } = req.body;
  const token = process.env.DISCORD_BOT_TOKEN;

  try {
    const response = await axios.get(
      `https://discord.com/api/v10/users/${userID}`,
      {
        headers: {
          Authorization: `Bot ${token}`,
        },
      }
    );

    const userData = response.data;
    userData.banner = `https://cdn.discordapp.com/banners/${userID}/${userData.banner}.gif`;
    userData.avatar = `https://cdn.discordapp.com/avatars/${userID}/${userData.avatar}.gif`;
    const aura = await calculateAura(userData);

    const newLookup = new Lookup({
      userID: userData.id,
      username: userData.username,
      joinDateScore: aura.joinDateScore,
      usernameScore: aura.usernameScore,
      profileMatchScore: aura.profileMatchScore,
      statusScore: aura.statusScore,
      totalAuraScore: aura.totalAuraScore,
    });

    await newLookup.save();

    res.status(200).json({
      message: "User info retrieved successfully",
      userData: userData,
      aura: aura,
    });
  } catch (error) {
    console.error("Error fetching user info:", error);

    if (error.response && error.response.status) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
};

module.exports = { getUserInfo };
