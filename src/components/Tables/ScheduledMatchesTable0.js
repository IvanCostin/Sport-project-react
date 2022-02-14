import React from 'react';
import { useDispatch } from "react-redux";
import 'date-fns';
import clsx from 'clsx';
import { Link, useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import SportsBaseballTwoToneIcon from '@material-ui/icons/SportsBaseballTwoTone';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { setLoading } from "../../actions/matchActions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 8px"
  },
  th: {
    paddingLeft: "2px",
    paddingRight: "2px",
  }
}));

function ScheduledMatchesTable(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { HomeTeam, AwayTeam, MatchKey } = props;
  const { LiveMatches } = props;

  const handleRowClick = (match) => {
    dispatch(setLoading());



    if (match.HomeTeam && match.AwayTeam && match.MatchKey) {
      // dispatch()
      history.push(`/matchesh2h/${match.HomeTeam}/${match.AwayTeam}/${match.MatchKey}`);
    }
  }

  if (LiveMatches.length == 0) {
    return (
      <p className="text-3xl text-center mt-20 font-black">There are no scheduled matches now!</p>
    )
  };


  return (
    <Paper className="mt-8 text-center">
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>

            <TableRow style={{ background: "rgb(201, 201, 199)" }}>


              <Hidden mdUp>
                <TableCell align="center" className={classes.root}>C</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>Country</TableCell>
              </Hidden>
              <Hidden mdUp>
                <TableCell align="center" className={classes.root}>L</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>League</TableCell>
              </Hidden>
              <Hidden mdUp>
                <TableCell align="center" className={classes.root}>Teams</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>Teams</TableCell>
              </Hidden>
              <Hidden mdUp>
                <TableCell align="center" className={classes.root}>O</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>Odds</TableCell>
              </Hidden>
							<Hidden mdUp>
                <TableCell align="center" className={classes.root}>Old</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>Odds_Old</TableCell>
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

            {LiveMatches.map(match => (
              <TableRow hover key={match.MatchKey} >
                <Hidden smDown>
                  <TableCell align="center" className={classes.root} style={{ width: 60 }}>{match.Country}</TableCell>
                </Hidden>
                <Hidden smDown>
                  <TableCell align="center" className={classes.root} style={{ width: 60 }}>{match.League}</TableCell>
                </Hidden>
                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}>
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
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ScheduledMatchesTable;
