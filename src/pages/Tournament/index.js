import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getTournamentData } from "../../actions/matchActions";
import { Typography, IconButton } from '@material-ui/core';
import GoBackButton from "../../components/MuiComponents/GoBackButton";


import TourRatingTable from "../../components/Tables/TourRatingTable";
import TourResultTable from "../../components/Tables/TourResultTable";

function Tournament(props) {
  const dispatch = useDispatch();

  const TournamentData = useSelector(state => state.tennisReducer.match.tournamentData);

  useEffect(() => {
    dispatch(getTournamentData(props.match.params.location));
  }, [getTournamentData])

  if (TournamentData.length == 0) return null;

  return (
    <div className="h-full relative bg-white">
      <div className="w-full">
        <div className="px-8 flex justify-between items-center flex-wrap" style={{ background: "#ffc478" }}>
          <div className="flex items-center">
            <GoBackButton />
            <Typography>{props.match.params.location}</Typography>
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* <TourRatingTable Location={props.match.params.location} /> */}
        <TourResultTable TournamentData={TournamentData} />
      </div>
    </div>
  );
}

export default Tournament;
