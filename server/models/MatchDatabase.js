const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'matchdatabase',
  {
    Id: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    EventKey: {
      type: Sequelize.STRING
    },
    Date: {
      type: Sequelize.DATE
    },
    Time: {
      type: Sequelize.TIME
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
    Status: {
      type: Sequelize.STRING
    },
    Winner: {
      type: Sequelize.INTEGER
    },
    Odds1: {
      type: Sequelize.DECIMAL
    },
    Odds2: {
      type: Sequelize.DECIMAL
    },
    Sets1: {
      type: Sequelize.INTEGER
    },
    Sets2: {
      type: Sequelize.INTEGER
    },
    G1_1: {
      type: Sequelize.INTEGER
    },
    G1_2: {
      type: Sequelize.INTEGER
    },
    G2_1: {
      type: Sequelize.INTEGER
    },
    G2_2: {
      type: Sequelize.INTEGER
    },
    G3_1: {
      type: Sequelize.INTEGER
    },
    G3_2: {
      type: Sequelize.INTEGER
    },
    G4_1: {
      type: Sequelize.INTEGER
    },
    G4_2: {
      type: Sequelize.INTEGER
    },
    G5_1: {
      type: Sequelize.INTEGER
    },
    G5_2: {
      type: Sequelize.INTEGER
    },
    R1_1: {
      type: Sequelize.INTEGER
    },
    R1_2: {
      type: Sequelize.INTEGER
    },
    R2_1: {
      type: Sequelize.INTEGER
    },
    R2_2: {
      type: Sequelize.INTEGER
    },
    R3_1: {
      type: Sequelize.INTEGER
    },
    R3_2: {
      type: Sequelize.INTEGER
    },
    R4_1: {
      type: Sequelize.INTEGER
    },
    R4_2: {
      type: Sequelize.INTEGER
    },
    R5_1: {
      type: Sequelize.INTEGER
    },
    R5_2: {
      type: Sequelize.INTEGER
    },
    Mom1: {
      type: Sequelize.INTEGER
    },
    Mom2: {
      type: Sequelize.INTEGER
    },
    Mom3: {
      type: Sequelize.INTEGER
    },
    Mom4: {
      type: Sequelize.INTEGER
    },
    Mom5: {
      type: Sequelize.INTEGER
    },
    Time1: {
      type: Sequelize.STRING
    },
    Time2: {
      type: Sequelize.STRING
    },
    TotalTime: {
      type: Sequelize.STRING
    },
    ServiceGames: {
      type: Sequelize.INTEGER
    },
    ServiceGamesWon: {
      type: Sequelize.INTEGER
    },
    ReturnGames: {
      type: Sequelize.INTEGER
    },
    ReturnGamesWon: {
      type: Sequelize.INTEGER
    },
    Servicepoints: {
      type: Sequelize.INTEGER
    },
    ServicepointsWon: {
      type: Sequelize.INTEGER
    },
    ReturnPoints: {
      type: Sequelize.INTEGER
    },
    ReturnPointsWon: {
      type: Sequelize.INTEGER
    },
    BpAhead: {
      type: Sequelize.INTEGER
    },
    BpAheadWon: {
      type: Sequelize.INTEGER
    },
    BpBehind: {
      type: Sequelize.INTEGER
    },
    BpBehindWon: {
      type: Sequelize.INTEGER
    },
    ServGames1_18: {
      type: Sequelize.INTEGER
    },
    ServGames1_18Won: {
      type: Sequelize.INTEGER
    },
    ServGames1_912: {
      type: Sequelize.INTEGER
    },
    ServGames1_912Won: {
      type: Sequelize.INTEGER
    },
    ReturnGames1_18: {
      type: Sequelize.INTEGER
    },
    ReturnGames1_18Won: {
      type: Sequelize.INTEGER
    },
    ReturnGames1_912: {
      type: Sequelize.INTEGER
    },
    ReturnGames1_912Won: {
      type: Sequelize.INTEGER
    },
    ServPoints1_18: {
      type: Sequelize.INTEGER
    },
    ServPoints1_18Won: {
      type: Sequelize.INTEGER
    },
    ServPoints1_912: {
      type: Sequelize.INTEGER
    },
    ServPoints1_912Won: {
      type: Sequelize.INTEGER
    },
    ReturnPoints1_18: {
      type: Sequelize.INTEGER
    },
    ReturnPoints1_18Won: {
      type: Sequelize.INTEGER
    },
    ReturnPoints1_912: {
      type: Sequelize.INTEGER
    },
    ReturnPoints1_912Won: {
      type: Sequelize.INTEGER
    },
    BpAhead1_18: {
      type: Sequelize.INTEGER
    },
    BpAhead1_18Won: {
      type: Sequelize.INTEGER
    },
    BpAhead1_912: {
      type: Sequelize.INTEGER
    },
    BpAhead1_912Won: {
      type: Sequelize.INTEGER
    },
    BpBehind1_18: {
      type: Sequelize.INTEGER
    },
    BpBehind1_18Won: {
      type: Sequelize.INTEGER
    },
    BpBehind1_912: {
      type: Sequelize.INTEGER
    },
    BpBehind1_912Won: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set1: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set1Restored: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set1: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set1Restored: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set1: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set1Restored: {
      type: Sequelize.INTEGER
    },
    LateBrBehind1Set1: {
      type: Sequelize.INTEGER
    },
    LateBrBehind1Set1Restored: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set2_won1: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set2_won1Restored: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set2_won1: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set2_won1Restored: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set2_won1: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set2_won1Restored: {
      type: Sequelize.INTEGER
    },
    LateBrBehind1Set2_won1: {
      type: Sequelize.INTEGER
    },
    LateBrBehind1Set2_won1Restored: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set2_lost1: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set2_lost1Restored: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set2_lost1: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set2_lost1Restored: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set2_lost1: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set2_lost1Restored: {
      type: Sequelize.INTEGER
    },

    LateBrBehind1Set2_lost1: {
      type: Sequelize.INTEGER
    },
    LateBrBehind1Set2_lost1Restored: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set3_won2: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set3_won2Restored: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set3_won2: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set3_won2Restored: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set3_won2: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set3_won2Restored: {
      type: Sequelize.INTEGER
    },
    LateBrBehind1Set3_won2: {
      type: Sequelize.INTEGER
    },
    LateBrBehind1Set3_won2Restored: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set3_lost2: {
      type: Sequelize.INTEGER
    },
    EarlBrAhead1Set3_lost2Restored: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set3_lost2: {
      type: Sequelize.INTEGER
    },
    LateBrAhead1Set3_lost2Restored: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set3_lost2: {
      type: Sequelize.INTEGER
    },
    EarlBrBehind1Set3_lost2Restored: {
      type: Sequelize.INTEGER
    },
    LateBrBehind1Set3_lost2: {
      type: Sequelize.INTEGER
    },
    LateBrBehind1Set3_lost2Restored: {
      type: Sequelize.INTEGER
    },
    TotalWin: {
      type: Sequelize.INTEGER
    },
    TotalLost: {
      type: Sequelize.INTEGER
    },
    TotalWinSet1: {
      type: Sequelize.INTEGER
    },
    TotalLostSet1: {
      type: Sequelize.INTEGER
    },

    TotalWinSet2_won1: {
      type: Sequelize.INTEGER
    },
    TotalWinSet2_lost1: {
      type: Sequelize.INTEGER
    },
    TotalLostSet2_lost1: {
      type: Sequelize.INTEGER
    },
    TotalLostSet2_won1: {
      type: Sequelize.INTEGER
    },
    TotalWinSet3_won2: {
      type: Sequelize.INTEGER
    },
    TotalWinSet3_lost2: {
      type: Sequelize.INTEGER
    },
    TotalLostSet3_lost2: {
      type: Sequelize.INTEGER
    },
    TotalLostSet3_won2: {
      type: Sequelize.INTEGER
    },

    TiebreakSet1Won: {
      type: Sequelize.INTEGER
    },
    TiebreakSet1Lost: {
      type: Sequelize.INTEGER
    },
    TiebreakSet2Won_win1: {
      type: Sequelize.INTEGER
    },
    TiebreakSet2Lost_win1: {
      type: Sequelize.INTEGER
    },
    TiebreakSet2Won_lost1: {
      type: Sequelize.INTEGER
    },
    TiebreakSet2Lost_lost1: {
      type: Sequelize.INTEGER
    },
    TiebreakSet3Won_win2: {
      type: Sequelize.INTEGER
    },
    TiebreakSet3Lost_win2: {
      type: Sequelize.INTEGER
    },
    TiebreakSet3Won_lost2: {
      type: Sequelize.INTEGER
    },
    TiebreakSet3Lost_lost2: {
      type: Sequelize.INTEGER
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)
