const { connection } = require('../connection');
const Match = require("../models/Match");
const express = require("express");
const router = express.Router();
const matchController = require("../controllers/MatchController");

router.get("/getDistinctPlayers", matchController.getDistinctPlayers);
router.get("/getDistinctTournaments", matchController.getDistinctTournaments);
router.get("/getLiveMatches", matchController.getLiveMatches);
router.get("/getScheduledMatches", matchController.getScheduledMatches);
router.post("/getFinishedMatches", matchController.getFinishedMatches);
router.post("/getMatchInfo", matchController.getMatchInfo);
router.post("/getLivePrediction", matchController.getLivePrediction);
router.post("/getPlayerData", matchController.getPlayerData);
router.post("/getTournamentData", matchController.getTournamentData);

module.exports = router;