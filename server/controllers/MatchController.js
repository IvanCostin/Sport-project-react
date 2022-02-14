const Match = require("../models/Match");
const MatchDatabase = require("../models/MatchDatabase");
const LivePrediction = require("../models/LivePrediction");
const db = require("../database/db");
const moment = require("moment")
const { sequelize, Sequelize } = db;

Match.hasOne(LivePrediction, {
  foreignKey: 'FlashKey'
})
LivePrediction.belongsTo(Match, {
  foreignKey: 'FlashKey'
});

exports.getDistinctPlayers = (req, res) => {
  Match.findAll({
    attributes: ['HomeTeam'],
    distinct: true
  })

  //   .then(players => res.json(players))
  //   .catch((err) => res.status(400).json({ success: false, errors: "Oops, An error occured" }));
  Match.aggregate('HomeTeam', 'DISTINCT', {plain: false})
  .then(players => res.json(players))
  .catch((err) => res.status(400).json({ success: false, errors: "Oops, An error occured" }));
}

exports.getDistinctTournaments = (req, res) => {
  // Match.findAll({
  //   attributes: ['Location'],
  //   distinct: true
  // })
  Match.aggregate('League', 'DISTINCT', {plain: false})
    .then(tournaments => res.json(tournaments))
    .catch((err) => res.status(400).json({ success: false, errors: "Oops, An error occured" }));
}

exports.getLiveMatches = (req, res) => {
  Match.findAll({
    where: {
      Status: 'Live'
    }
  })
    .then(matches => res.json({ success: true, matches }))
    .catch((err) => res.status(400).json({ success: false, errors: "Oops, An error occured" }));
}

exports.getScheduledMatches = (req, res) => {
  Match.findAll({
    where: {
      Status: 'Scheduled'
    },
    order: [
      ['LastUpdate', 'ASC']
    ]
  })
    .then(matches => res.json({ success: true, matches }))
    .catch((err) => res.status(400).json({ success: false, errors: "Oops, An error occured" }));
}

exports.getFinishedMatches = (req, res) => {
  const { year, month, date } = req.body.dateInfo;
  const startDate = `${year}-${month}-${date} 00:00:00`
  const endDate = `${year}-${month}-${date} 23:59:59`

  Match.findAll({
    where: {
      Status: 'Finished',
      LastUpdate: {
        $between: [startDate, endDate]
      }
    }
  })
    .then(matches => res.json({ success: true, matches }))
    .catch((err) => res.status(400).json({ success: false, errors: "Oops, An error occured" }));
};

exports.getMatchInfo = (req, res) => {
  const { matchKey } = req.body;
  Match.findByPk(matchKey)
    .then(match => res.json({ success: true, match }))
    .catch((err) => res.status(400).json({ success: false, errors: "Oops, An error occured" }));
}

exports.getLivePrediction = (req, res) => {
  const { matchKey } = req.body;
  console.log(req.body);
  LivePrediction.findAll({
    include: [{
      model: Match,
      attributes: ['Rating1_1', 'Rating1_2', 'Rating2_1', 'Rating2_2', 'Rating3_1', 'Rating3_2', 'Rating4_1', 'Rating4_2'],
      required: true
    }],
    where: {
      FlashKey: matchKey
    },
    order: [
      ['TimeStamp', 'DESC']
    ]
  })
    .then(match => res.json({ success: true, match }))
    .catch((err) => res.status(400).json({ success: false, errors: "Oops, An error occured" }));
}

exports.getPlayerData = async (req, res) => {
  const { playerName, filterData, player } = req.body;
  console.log("-------------------------------------------", playerName, filterData, player);

  const where = {
    Player1: playerName
  }

  // if (player === 1) {
  //   where.Player1 = playerName
  // } else if (player === 2) {
  //   where.Player2 = playerName
  // }

  if (filterData.ground != '') {
    let likeArray = [];
    for (let i in filterData.ground) {
      likeArray.push({ $like: `%${filterData.ground[i]}%` })
    }

    where.Ground = {
      $or: likeArray
    }
  }

  if (filterData.odds != '') {
    let array = [];
    for (let i in filterData.odds) {
      switch (filterData.odds[i]) {
        case 'bigfav':
          array.push({ $lte: 1.40 });
          break
        case 'fav':
          array.push({
            $and: {
              $gt: 1.40,
              $lt: 1.85
            }
          });
          break
        case 'dog':
          array.push({
            $and: {
              $gte: 1.85,
              $lte: 3
            }
          });
          break
        case 'bigdog':
          array.push({ $gt: 3 });
          break
        default:
          // return null
      }
    }

    where.Odds1 = {
      $or: array
    }
  }

  if (filterData.venue != '') {
    where.Venue = filterData.venue
  }

  if (filterData.sort === 'ATP/WTA') {
    where.Sort = {
      $or: ['ATP MEN - SINGLES', 'ATP WOMEN - SINGLES']
    }
  } else if (filterData.sort === 'Chal/ITF') {
    where.Sort = {
      $or: ['CHALLENGER MEN - SINGLES', 'CHALLENGER WOMEN - SINGLES', 'ITF WOMEN - SINGLES']
    }
  }

  if (filterData.timeframe === '3month') {
    where.Date = {
      $gte: moment().subtract(92, 'days').toDate()
    }
  } else if (filterData.timeframe === "6month") {
    where.Date = {
      $gte: moment().subtract(185, 'days').toDate()
    }
  } else if (filterData.timeframe === "12month") {
    where.Date = {
      $gte: moment().subtract(366, 'days').toDate()
      // $between: [sequelize.literal("NOW() - INTERVAL '3 DAY'"), sequelize.literal("NOW()")]
    }
  }

  const OldMatches = await MatchDatabase.findAll({
    where,
    order: [
      ['Date', 'DESC']
    ]
  })

  const Stats = await MatchDatabase.findAll({
    attributes: [
      [sequelize.fn('sum', sequelize.col('ServiceGames')), 'ServiceGames'],
      [sequelize.fn('sum', sequelize.col('ServiceGamesWon')), 'ServiceGamesWon'],
      [sequelize.fn('sum', sequelize.col('ServicePoints')), 'ServicePoints'],
      [sequelize.fn('sum', sequelize.col('ServicePointsWon')), 'ServicePointsWon'],
      [sequelize.fn('sum', sequelize.col('ServGames1_18')), 'ServGames18'],
      [sequelize.fn('sum', sequelize.col('ServGames1_18Won')), 'ServGames18Won'],
      [sequelize.fn('sum', sequelize.col('ServGames1_912')), 'ServGames912'],
      [sequelize.fn('sum', sequelize.col('ServGames1_912Won')), 'ServGames912Won'],
      [sequelize.fn('sum', sequelize.col('ServPoints1_18')), 'ServPoints18'],
      [sequelize.fn('sum', sequelize.col('ServPoints1_18Won')), 'ServPoints18Won'],
      [sequelize.fn('sum', sequelize.col('ServPoints1_912')), 'ServPoints912'],
      [sequelize.fn('sum', sequelize.col('ServPoints1_912Won')), 'ServPoints912Won'],
      [sequelize.fn('sum', sequelize.col('ReturnGames')), 'ReturnGames'],
      [sequelize.fn('sum', sequelize.col('ReturnGamesWon')), 'ReturnGamesWon'],
      [sequelize.fn('sum', sequelize.col('ReturnPoints')), 'ReturnPoints'],
      [sequelize.fn('sum', sequelize.col('ReturnPointsWon')), 'ReturnPointsWon'],
      [sequelize.fn('sum', sequelize.col('ReturnGames1_18')), 'ReturnGames18'],
      [sequelize.fn('sum', sequelize.col('ReturnGames1_18Won')), 'ReturnGames18Won'],
      [sequelize.fn('sum', sequelize.col('ReturnGames1_912')), 'ReturnGames912'],
      [sequelize.fn('sum', sequelize.col('ReturnGames1_912Won')), 'ReturnGames912Won'],
      [sequelize.fn('sum', sequelize.col('ReturnPoints1_18')), 'ReturnPoints18'],
      [sequelize.fn('sum', sequelize.col('ReturnPoints1_18Won')), 'ReturnPoints18Won'],
      [sequelize.fn('sum', sequelize.col('ReturnPoints1_912')), 'ReturnPoints912'],
      [sequelize.fn('sum', sequelize.col('ReturnPoints1_912Won')), 'ReturnPoints912Won'],
      [sequelize.fn('sum', sequelize.col('BpAhead')), 'BpAhead'],
      [sequelize.fn('sum', sequelize.col('BpAheadWon')), 'BpAheadWon'],
      [sequelize.fn('sum', sequelize.col('BpBehind')), 'BpBehind'],
      [sequelize.fn('sum', sequelize.col('BpBehindWon')), 'BpBehindWon'],
      [sequelize.fn('sum', sequelize.col('BpAhead1_18')), 'BpAhead18'],
      [sequelize.fn('sum', sequelize.col('BpAhead1_18Won')), 'BpAhead18Won'],
      [sequelize.fn('sum', sequelize.col('BpBehind1_18')), 'BpBehind18'],
      [sequelize.fn('sum', sequelize.col('BpBehind1_18Won')), 'BpBehind18Won'],
      [sequelize.fn('sum', sequelize.col('BpAhead1_912')), 'BpAhead912'],
      [sequelize.fn('sum', sequelize.col('BpAhead1_912Won')), 'BpAhead912Won'],
      [sequelize.fn('sum', sequelize.col('BpBehind1_912')), 'BpBehind912'],
      [sequelize.fn('sum', sequelize.col('BpBehind1_912Won')), 'BpBehind912Won'],
    ],
    where
  });

  const BreakHold = await MatchDatabase.findAll({
    attributes: [
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set1')), 'EarlBrAhead1Set1'],
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set1Restored')), 'EarlBrAhead1Set1Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set1')), 'LateBrAhead1Set1'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set1Restored')), 'LateBrAhead1Set1Restored'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set1')), 'EarlBrBehind1Set1'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set1Restored')), 'EarlBrBehind1Set1Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set1')), 'LateBrBehind1Set1'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set1Restored')), 'LateBrBehind1Set1Restored'],
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set2_won1')), 'EarlBrAhead1Set2_won1'],
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set2_won1Restored')), 'EarlBrAhead1Set2_won1Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set2_won1')), 'LateBrAhead1Set2_won1'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set2_won1Restored')), 'LateBrAhead1Set2_won1Restored'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set2_won1')), 'EarlBrBehind1Set2_won1'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set2_won1Restored')), 'EarlBrBehind1Set2_won1Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set2_won1')), 'LateBrBehind1Set2_won1'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set2_won1Restored')), 'LateBrBehind1Set2_won1Restored'],
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set2_lost1')), 'EarlBrAhead1Set2_lost1'],
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set2_lost1Restored')), 'EarlBrAhead1Set2_lost1Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set2_lost1')), 'LateBrAhead1Set2_lost1'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set2_lost1Restored')), 'LateBrAhead1Set2_lost1Restored'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set2_lost1')), 'EarlBrBehind1Set2_lost1'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set2_lost1Restored')), 'EarlBrBehind1Set2_lost1Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set2_lost1')), 'LateBrBehind1Set2_lost1'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set2_lost1Restored')), 'LateBrBehind1Set2_lost1Restored'],
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set3_won2')), 'EarlBrAhead1Set3_won2'],
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set3_won2Restored')), 'EarlBrAhead1Set3_won2Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set3_won2')), 'LateBrAhead1Set3_won2'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set3_won2Restored')), 'LateBrAhead1Set3_won2Restored'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set3_won2')), 'EarlBrBehind1Set3_won2'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set3_won2Restored')), 'EarlBrBehind1Set3_won2Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set3_won2')), 'LateBrBehind1Set3_won2'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set3_won2Restored')), 'LateBrBehind1Set3_won2Restored'],
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set3_lost2')), 'EarlBrAhead1Set3_lost2'],
      [sequelize.fn('sum', sequelize.col('EarlBrAhead1Set3_lost2Restored')), 'EarlBrAhead1Set3_lost2Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set3_lost2')), 'LateBrAhead1Set3_lost2'],
      [sequelize.fn('sum', sequelize.col('LateBrAhead1Set3_lost2Restored')), 'LateBrAhead1Set3_lost2Restored'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set3_lost2')), 'EarlBrBehind1Set3_lost2'],
      [sequelize.fn('sum', sequelize.col('EarlBrBehind1Set3_lost2Restored')), 'EarlBrBehind1Set3_lost2Restored'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set3_lost2')), 'LateBrBehind1Set3_lost2'],
      [sequelize.fn('sum', sequelize.col('LateBrBehind1Set3_lost2Restored')), 'LateBrBehind1Set3_lost2Restored'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet1Won')), 'TiebreakSet1Won'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet1Lost')), 'TiebreakSet1Lost'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet2Lost_win1')), 'TiebreakSet2Lost_win1'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet2Won_win1')), 'TiebreakSet2Won_win1'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet2Won_lost1')), 'TiebreakSet2Won_lost1'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet2Lost_lost1')), 'TiebreakSet2Lost_lost1'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet3Won_win2')), 'TiebreakSet3Won_win2'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet3Lost_win2')), 'TiebreakSet3Lost_win2'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet3Won_lost2')), 'TiebreakSet3Won_lost2'],
      [sequelize.fn('sum', sequelize.col('TiebreakSet3Lost_lost2')), 'TiebreakSet3Lost_lost2'],
      [sequelize.fn('sum', sequelize.col('TotalWin')), 'TotalWin'],
      [sequelize.fn('sum', sequelize.col('TotalLost')), 'TotalLost'],
      [sequelize.fn('sum', sequelize.col('TotalWinSet1')), 'TotalWinSet1'],
      [sequelize.fn('sum', sequelize.col('TotalLostSet1')), 'TotalLostSet1'],
      [sequelize.fn('sum', sequelize.col('TotalWinSet2_won1')), 'TotalWinSet2_won1'],
      [sequelize.fn('sum', sequelize.col('TotalWinSet2_lost1')), 'TotalWinSet2_lost1'],
      [sequelize.fn('sum', sequelize.col('TotalLostSet2_lost1')), 'TotalLostSet2_lost1'],
      [sequelize.fn('sum', sequelize.col('TotalLostSet2_won1')), 'TotalLostSet2_won1'],
      [sequelize.fn('sum', sequelize.col('TotalWinSet3_won2')), 'TotalWinSet3_won2'],
      [sequelize.fn('sum', sequelize.col('TotalWinSet3_lost2')), 'TotalWinSet3_lost2'],
      [sequelize.fn('sum', sequelize.col('TotalLostSet3_lost2')), 'TotalLostSet3_lost2'],
      [sequelize.fn('sum', sequelize.col('TotalLostSet3_won2')), 'TotalLostSet3_won2'],
    ],
    where
  });

  const PlayerData = { OldMatches, Stats, BreakHold }

  res.json({ success: true, PlayerData })
}

exports.getTournamentData = async (req, res) => {
  // const { location } = req.body;
  // MatchDatabase.findAll({

  // })
  // connection.query("SELECT * FROM matchdatabase WHERE Location = '" + location + "' GROUP BY EventKey ORDER BY Date DESC",
  //   (err, rows, fields) => {
  //     if (err) throw err;
  //     res.status(200).send(rows);
  //   });
}
