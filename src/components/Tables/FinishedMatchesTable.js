import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Hidden from '@material-ui/core/Hidden';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SportsBaseballTwoToneIcon from '@material-ui/icons/SportsBaseballTwoTone';
import { getFinishedMatches } from "../../actions/matchActions";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { setLoading, setCurrentDate } from "../../actions/matchActions"

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: 0,
    // paddingBottom: 0
    padding: "0 4px"
  }
}));

function FinishedMatchesTable(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { finishedMatches, currentDate } = useSelector(state => state.tennisReducer.match);

  const handleDateChange = (date) => {
    dispatch(setCurrentDate(date));
    dispatch(getFinishedMatches(date));
  };
  useEffect(() => {
    dispatch(getFinishedMatches(currentDate))
  }, [getFinishedMatches])

  var uniqueTours = [];
  for (let i of finishedMatches) {
    var number = 0
    switch (i.Country) {
      case "Netherlands":
        number = 1
        break;
      case "England":
        number = 2
        break;
      case "Germany":
        number = 3
        break;
      case "Spain":
        number = 4
        break;
      case "Italy":
        number = 5
        break;
      case "Belgium":
        number = 6
        break;
      case "Portugal":
        number = 7
        break;
      case "Russia":
        number = 8
        break;
      default:
        number = 9;
    }
    var tourInfo = {
      Number: number,
      League: i.League,
      Country: i.Country
    }
    var temp = uniqueTours.find(tour => tour.League == tourInfo.League && tour.Country == tourInfo.Country)
    if (temp === undefined) uniqueTours.push(tourInfo);
  }
  uniqueTours.sort((a, b) => { return a.Number - b.Number })

  const handleRowClick = (match) => {
    dispatch(setLoading());

    if (match.HomeTeam && match.AwayTeam && match.MatchKey) {
      props.history.push(`/matchesh2h/${match.HomeTeam}/${match.AwayTeam}/${match.MatchKey}`)
    }
  }

  if (finishedMatches.length == 0) {
    return (
      <>
        <div className="w-full flex justify-end pr-16">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={currentDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <Typography variant="h3" className="text-center">No Datas</Typography>

      </>
    )
  };

  return (
    <>
      <div className="w-full flex justify-end pr-16">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={currentDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {uniqueTours.map((eachTour, index) => (
              <Fragment key={index}>

                <TableRow hover key={eachTour.League} style={{ background: "#A2DBFA" }} >
                  <TableCell className={classes.root} style={{ fontWeight: "bold" }} colSpan={12}>
                    {eachTour.Country}&nbsp;&nbsp;&nbsp;{eachTour.League}
                  </TableCell>
                </TableRow>

                {(finishedMatches.filter(liveMatch => liveMatch.Country == eachTour.Country && liveMatch.League == eachTour.League))
                  .map(match => (
                    <TableRow hover key={match.MatchKey} >
                      <TableCell align="left" className={classes.root} style={{ width: 200 }}>
                            <b>{match.HomeTeam}</b>
                            <br />
                            <b>{match.AwayTeam}</b>
                      </TableCell>

                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.Score1}</b>
                            <br />
                            <b>{match.Score2}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.Odds1.toFixed(2)}</b>
                            <br />
                            <b>{match.Odds2.toFixed(2)}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
      											<b>{match.Odds1Start.toFixed(2)}</b>
      											<br />
      											<b>{match.Odds2Start.toFixed(2)}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.BallPossessionHome}</b>
                            <br />
                            <b>{match.BallPossessionAway}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.DangerousAttacksHome}</b>
                            <br />
                            <b>{match.DangerousAttacksAway}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.GoalAttemptsHome}</b>
                            <br />
                            <b>{match.GoalAttemptsAway}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.RedCardsHome}</b>
                            <br />
                            <b>{match.RedCardsAway}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.Form1}</b>
                            <br />
                            <b>{match.Form2}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.Rank1}</b>
                            <br />
                            <b>{match.Rank2}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.Group1}</b>
                            <br />
                            <b>{match.Group2}</b>
                      </TableCell>
                      <TableCell align="center" className={classes.root} style={{ width: 60 }}>
                            <b>{match.Matches1}</b>
                            <br />
                            <b>{match.Matches2}</b>
                      </TableCell>
                    </TableRow>
                  ))}
              </Fragment>
            ))}

          </TableBody>
        </Table>
      </TableContainer>


    </>
  );
}

export default FinishedMatchesTable;
