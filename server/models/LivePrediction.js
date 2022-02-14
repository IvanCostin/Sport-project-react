const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'liveprediction',
  {
    MatchKey: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    FlashKey: {
      type: Sequelize.STRING,
    },
    TimeStamp: {
      type: Sequelize.DATE
    },
    Player1: {
      type: Sequelize.STRING
    },
    Player2: {
      type: Sequelize.STRING
    },
    Gender: {
      type: Sequelize.STRING
    },
    Sort: {
      type: Sequelize.STRING
    },
    Location: {
      type: Sequelize.STRING
    },
    Stage: {
      type: Sequelize.STRING
    },
    Round: {
      type: Sequelize.STRING
    },
    Ground: {
      type: Sequelize.STRING
    },
    Venue: {
      type: Sequelize.STRING
    },
    Sets1: {
      type: Sequelize.STRING
    },
    Sets2: {
      type: Sequelize.STRING
    },
    Set11: {
      type: Sequelize.STRING
    },
    Set12: {
      type: Sequelize.STRING
    },
    Set21: {
      type: Sequelize.STRING
    },
    Set22: {
      type: Sequelize.STRING
    },
    Set31: {
      type: Sequelize.STRING
    },
    Set32: {
      type: Sequelize.STRING
    },
    Set41: {
      type: Sequelize.STRING
    },
    Set42: {
      type: Sequelize.STRING
    },
    Set51: {
      type: Sequelize.STRING
    },
    Set52: {
      type: Sequelize.STRING
    },
    GameScore1: {
      type: Sequelize.INTEGER
    },
    GameScore2: {
      type: Sequelize.INTEGER
    },
    Odds1: {
      type: Sequelize.DECIMAL
    },
    Odds2: {
      type: Sequelize.DECIMAL
    },
    Server: {
      type: Sequelize.STRING
    },
    Points: {
      type: Sequelize.STRING
    },
    ServerPoints: {
      type: Sequelize.STRING
    },
    ReturnPoints: {
      type: Sequelize.STRING
    },
    Deuce: {
      type: Sequelize.STRING
    },
    Bp: {
      type: Sequelize.STRING
    },
    Break: {
      type: Sequelize.STRING
    },
    Rating1: {
      type: Sequelize.STRING
    },
    Rating2: {
      type: Sequelize.STRING
    },
    Momentum: {
      type: Sequelize.STRING
    },
    AantalGames: {
      type: Sequelize.STRING
    },
    BreakPrediction: {
      type: Sequelize.DECIMAL
    },
    Odd1Break: {
      type: Sequelize.FLOAT
    },
    Odd2Break: {
      type: Sequelize.FLOAT
    },
    Odd1Hold: {
      type: Sequelize.FLOAT
    },
    Odd2Hold: {
      type: Sequelize.FLOAT
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)
