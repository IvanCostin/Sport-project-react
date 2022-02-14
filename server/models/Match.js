const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'match',
  {
    MatchKey: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    Datum: {
      type: Sequelize.DATE
    },
    Tijd: {
      type: Sequelize.TIME
    },
    Status: {
      type: Sequelize.STRING
    },
    Minuut: {
      type: Sequelize.STRING
    },
    HomeTeam: {
      type: Sequelize.STRING
    },
    AwayTeam: {
      type: Sequelize.STRING
    },
    Country: {
      type: Sequelize.STRING
    },
    League: {
      type: Sequelize.STRING
    },
    Odds1: {
      type: Sequelize.DECIMAL
    },
    Odds2: {
      type: Sequelize.DECIMAL
    },
    Odds3: {
      type: Sequelize.DECIMAL
    },
    Odds1Start: {
      type: Sequelize.DECIMAL
    },
    Odds2Start: {
      type: Sequelize.DECIMAL
    },
    Odds3Start: {
      type: Sequelize.DECIMAL
    },
    Score1: {
      type: Sequelize.INTEGER
    },
    Score2: {
      type: Sequelize.INTEGER
    },
    LastUpdate: {
      type: Sequelize.DATE
    },
    MarketId: {
      type: Sequelize.STRING
    },
    Player1Id: {
      type: Sequelize.STRING
    },
    Player2Id: {
      type: Sequelize.STRING
    },
    DrawId: {
      type: Sequelize.STRING
    },
    BallPossessionHome: {
      type: Sequelize.INTEGER
    },
    BallPossessionAway: {
      type: Sequelize.INTEGER
    },
    GoalAttemptsHome: {
      type: Sequelize.INTEGER
    },
    GoalAttemptsAway: {
      type: Sequelize.INTEGER
    },
    ShotsonGoalHome: {
      type: Sequelize.INTEGER
    },
    ShotsonGoalAway: {
      type: Sequelize.INTEGER
    },
    DangerousAttacksHome: {
      type: Sequelize.INTEGER
    },
    DangerousAttacksAway: {
      type: Sequelize.INTEGER
    },
    RedCardsHome: {
      type: Sequelize.INTEGER
    },
    RedCardsAway: {
      type: Sequelize.INTEGER
    },
    Form1: {
      type: Sequelize.DECIMAL
    },
    Form2: {
      type: Sequelize.DECIMAL
    },
    Rank1: {
      type: Sequelize.INTEGER
    },
    Rank2: {
      type: Sequelize.INTEGER
    },
    Group1: {
      type: Sequelize.INTEGER
    },
    Group2: {
      type: Sequelize.INTEGER
    },
    Matches1: {
      type: Sequelize.INTEGER
    },
    Matches2: {
      type: Sequelize.INTEGER
    },
  },
  {
    timestamps: false
  }
)
