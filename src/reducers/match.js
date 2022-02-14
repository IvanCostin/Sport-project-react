import {
  GET_MATCHDATA,
  GET_FINISHED_MATCHES,
  GET_LIVE_MATCHES,
  GET_SCHEDULED_MATCHES,
  GET_MATCHINFO,
  GET_LIVE_PREDICTION,
  GET_PLAYERDATA,
  GET_DISTINCT_PLAYERS,
  GET_DISTINCT_TOURNAMENTS,
  GET_TOURDATA
} from "../actions/types";

const initialState = {
  liveMatches: [],
  scheduledMatches: [],
  matchData: [],
  finishedMatches: [],
  playerData: {},
  playerData2: {},
  tournamentData: [],
  matchInfo: {},
  livePrediction: [],
  loading: true,
  currentTab: 0,
  currentDate: new Date(),
  distinctPlayers: [],
  distinctTournaments: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MATCHDATA:
      return {
        ...state,
        matchData: action.payload
      };
    // Get Finished Matches
    case GET_FINISHED_MATCHES:
      return {
        ...state,
        finishedMatches: action.payload
      };
    // Get Live Matches
    case GET_LIVE_MATCHES:
      return {
        ...state,
        liveMatches: action.payload
      };
    // Get Scheduled Matches
    case GET_SCHEDULED_MATCHES:
      return {
        ...state,
        scheduledMatches: action.payload
      };
    case GET_PLAYERDATA:
      if (action.player === 1) {
        return {
          ...state,
          playerData: action.payload
        };
      } else if (action.player === 2) {
        return {
          ...state,
          playerData2: action.payload
        };
      }

    case "GET_PLAYERDATA2":
      return {
        ...state,
        playerData2: action.payload
      };
    case GET_TOURDATA:
      return {
        ...state,
        tournamentData: action.payload
      };
    case GET_MATCHINFO:
      return {
        ...state,
        matchInfo: action.payload
      };
    case GET_LIVE_PREDICTION:
      return {
        ...state,
        livePrediction: action.payload,
        loading: false
      };
    case "EMPTY_DATA":
      return {
        ...state,
        matchData: [],
        finishedMatches: [],
        playerData: [],
        playerData2: [],
        tournamentData: [],
        matchInfo: {},
        livePrediction: []
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };
    case "SET_CURRENT_TAB":
      return {
        ...state,
        currentTab: action.payload
      };
    case "SET_CURRENT_DATE":
      return {
        ...state,
        currentDate: action.payload
      };
    case GET_DISTINCT_PLAYERS:
      return {
        ...state,
        distinctPlayers: action.payload
      };
    case GET_DISTINCT_TOURNAMENTS:
      return {
        ...state,
        distinctTournaments: action.payload
      };
    default:
      return state;
  }
}
