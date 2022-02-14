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
import { getLiveMatches } from "../../actions/matchActions";
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

function LiveMatchesTable(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const LiveMatches = props.LiveMatches;

  const { finishedMatches, currentDate } = useSelector(state => state.tennisReducer.match);

  const handleDateChange = (date) => {
    dispatch(setCurrentDate(date));
    dispatch(getLiveMatches(date));
  };
  useEffect(() => {
    dispatch(getLiveMatches(currentDate))
  }, [getLiveMatches])

  var uniqueTours = [];
  for (let i of LiveMatches) {
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

  if (LiveMatches.length == 0) {
    return (
      <>

        <Typography variant="h3" className="text-center">No Datas</Typography>

      </>
    )
  };

  return (
    <>

      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {uniqueTours.map((eachTour, index) => (
              <Fragment key={index}>

                <TableRow hover key={eachTour.League} style={{ background: "#A2DBFA" }} >
                  <TableCell className={classes.root} style={{ fontWeight: "bold" }} colSpan={1}>
                    {eachTour.Country}&nbsp;&nbsp;&nbsp;{eachTour.League}
                  </TableCell>

                  <Hidden mdUp>
                    <TableCell align="center" className={classes.root}>Odds</TableCell>
                  </Hidden>
                  <Hidden smDown>
                    <TableCell align="center" className={classes.root}>Odds</TableCell>
                  </Hidden>
                  <Hidden mdUp>
                    <TableCell align="center" className={classes.root}>Old</TableCell>
                  </Hidden>
                  <Hidden smDown>
                    <TableCell align="center" className={classes.root}>Odds Old</TableCell>
                  </Hidden>



                  <Hidden mdUp>
                    <TableCell align="center" className={classes.root}>F</TableCell>
                  </Hidden>
                  <Hidden smDown>
                    <TableCell align="center" className={classes.root}>Form</TableCell>
                  </Hidden>
                  <Hidden mdUp>
                    <TableCell align="center" className={classes.root}>R</TableCell>
                  </Hidden>
                  <Hidden smDown>
                    <TableCell align="center" className={classes.root}>Rank</TableCell>
                  </Hidden>
                  <Hidden mdUp>
                    <TableCell align="center" className={classes.root}>G</TableCell>
                  </Hidden>
                  <Hidden smDown>
                    <TableCell align="center" className={classes.root}>Groups</TableCell>
                  </Hidden>
                  <Hidden mdUp>
                    <TableCell align="center" className={classes.root}>M</TableCell>
                  </Hidden>
                  <Hidden smDown>
                    <TableCell align="center" className={classes.root}>Matches</TableCell>
                  </Hidden>

                </TableRow>

                {(LiveMatches.filter(LiveMatch => LiveMatch.Country == eachTour.Country && LiveMatch.League == eachTour.League))
                  .map(match => (
                    <TableRow hover key={match.MatchKey} >
                      <TableCell align="left" className={classes.root} style={{ width: 200 }}>
                            <b>{match.HomeTeam}</b>
                            <br />
                            <b>{match.AwayTeam}</b>
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

export default LiveMatchesTable;
