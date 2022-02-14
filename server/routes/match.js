const { connection } = require('../connection');
const Match = require("../models/Match");
const express = require("express");
const router = express.Router();

const getMatchData = async (req, res) => {
  // const Player1s = await Match.aggregate('Player1', 'DISTINCT', {plain: false});
  // const Locations = await Match.aggregate('Location', 'DISTINCT', {plain: false});
  // console.log(Locations)
  connection.query("SELECT DISTINCT HomeTeam FROM matches;\
				SELECT DISTINCT League FROM matches;\
        SELECT * FROM matches where Status = 'Finished' ORDER BY LastUpdate DESC LIMIT 10 ;\
        SELECT MatchKey, HomeTeam, AwayTeam FROM matches WHERE Status='Live' ;\
        SELECT MatchKey, HomeTeam, AwayTeam FROM matches WHERE Status='Schuduled' ;\
        SELECT * FROM matches where Status = 'Live' ;\
        SELECT * FROM matches where Status = 'Scheduled' ;\
        SELECT * FROM matches where Status = 'Finished'",
    (err, rows, fields) => {
      if (err) throw err;
      res.status(200).send(rows);
    });

};



const getTournamentData = (req, res) => {
  const { location } = req.body;
  connection.query("SELECT * FROM matches WHERE League = '" + location + "' ORDER BY Date DESC",
    (err, rows, fields) => {
      if (err) throw err;
      res.status(200).send(rows);
    });
};


const betAction = (req, res) => {
  const { target, FlashKey } = req.body;
  console.log("TARGET AND FLASH: ", target, FlashKey)
  //connection.query(`UPDATE matches SET Bet${target} = 1 WHERE MatchKey = '${FlashKey}'`,
  //connection.query(`UPDATE matches SET Ezra = 1 WHERE MatchKey = '6wsd5VGU'`,
  //connection.query("UPDATE matches SET Ezra = 1 WHERE MatchKey = '" + FlashKey + "'",
  connection.query("INSERT INTO `bettrigger` (`Id`, `TimeStamp`, `Flashkey`, `Side`) VALUES (NULL, current_timestamp(), '" + FlashKey + "', '" + target + "')",
    (err, rows, fields) => {
      if (err) throw err;
      console.log(err)
      res.status(200).send(rows);
    })
}

module.exports = {
  getMatchData,
  getTournamentData,
  betAction
};
