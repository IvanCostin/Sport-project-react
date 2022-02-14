import axios from "axios";
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
} from "./types"
// CREATE USER
export const getMatchData = () => dispatch => {
  axios
    .get("/getMatchData")
    .then(res =>
      dispatch({
        type: GET_MATCHDATA,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const betAction = (betData) => dispatch => {
  axios
    .post("/betAction", betData)

};

export const setLoading = () => dispatch => {
  dispatch({
    type: "SET_LOADING",
  })
};

export const setCurrentTab = (tab) => dispatch => {
  dispatch({
    type: "SET_CURRENT_TAB",
    payload: tab,
  })
};

export const setCurrentDate = (date) => dispatch => {
  dispatch({
    type: "SET_CURRENT_DATE",
    payload: date,
  })
};

export const getLiveMatches = () => dispatch => {
  axios
    .get("/api/match/getLiveMatches")
    .then(res =>
      dispatch({
        type: GET_LIVE_MATCHES,
        payload: res.data.matches
      })
    )
    .catch(err =>
      console.log(err)
    );
}

export const getScheduledMatches = () => dispatch => {
  axios
    .get("/api/match/getScheduledMatches")
    .then(res =>
      dispatch({
        type: GET_SCHEDULED_MATCHES,
        payload: res.data.matches
      })
    )
    .catch(err =>
      console.log(err)
    );
}

export const getFinishedMatches = (date) => dispatch => {
  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate()
  };
  axios
    .post("/api/match/getFinishedMatches", { dateInfo })
    .then(res =>
      dispatch({
        type: GET_FINISHED_MATCHES,
        payload: res.data.matches
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const getMatchInfo = (matchKey) => dispatch => {
  axios
    .post(`/api/match/getMatchInfo`, { matchKey })
    .then(res =>
      dispatch({
        type: GET_MATCHINFO,
        payload: res.data.match
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const getLivePrediction = (matchKey) => dispatch => {
  axios
    .post("/api/match/getLivePrediction", { matchKey })
    .then(res =>
      dispatch({
        type: GET_LIVE_PREDICTION,
        payload: res.data.match
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const getPlayerData = (playerName, filterData, player) => dispatch => {
  axios
    .post("/api/match/getPlayerData", { playerName, filterData, player })
    .then(res =>
      dispatch({
        type: GET_PLAYERDATA,
        payload: res.data.PlayerData,
        player: player
      })
    )
    .catch(err =>
      console.log(err)
    );
};

export const getDistinctPlayers = () => dispatch => {
  axios
    .get("/api/match/getDistinctPlayers")
    .then(res =>
            dispatch({
        type: GET_DISTINCT_PLAYERS,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err)
    );
}

export const getDistinctTournaments = () => dispatch => {
  axios
    .get("/api/match/getDistinctTournaments")
    .then(res =>
      dispatch({
        type: GET_DISTINCT_TOURNAMENTS,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err)
    );
}


export const getTournamentData = (location) => dispatch => {
  axios
    .post("/getTournamentData", { location })
    .then(res =>
      dispatch({
        type: GET_TOURDATA,
        payload: res.data
      })
    )
    .catch(err =>
      console.log(err)
    );
};
