import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 4,
    paddingBottom: 4,
    textAlign: "center"
  }
}));
// const columns = [
//   { id: 'cat', label: 'Cat', minWidth: 170 },
//   { id: 'total', label: 'Total', minWidth: 100 },
//   { id: 'games18', label: 'Games 1 t/m 8', minWidth: 100 },
//   { id: 'games912', label: 'Games 9 t/m 12', minWidth: 100 },

// ];

function PlayerRatingTable(props) {
  const classes = useStyles();
  const Stats1 = props.Stats1[0];
  const Stats2 = props.Stats2[0];
  const { TotalMatch1, TotalMatch2 } = props;

  return (
    <Paper className="mt-8 text-center">
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>

            <TableRow style={{ background: "rgb(201, 201, 199)" }}>
              <TableCell className={classes.root}>
                #{TotalMatch1}
              </TableCell>
              <TableCell className={classes.root}>
                Service Games
              </TableCell>
              <TableCell className={classes.root}>
                #{TotalMatch2}
              </TableCell>
            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServiceGames) || isNaN(Stats1.ServiceGamesWon) ? "None" : `${((Stats1.ServiceGamesWon / Stats1.ServiceGames) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServiceGames) || isNaN(Stats1.ServiceGamesWon) ? "0 / 0 (0%)" : `${((Stats1.ServiceGamesWon / Stats1.ServiceGames) * 100).toFixed(1)} % (${Stats1.ServiceGamesWon} / ${Stats1.ServiceGames})`}
                </TableCell>
              </Hidden>


              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServiceGames) || isNaN(Stats2.ServiceGamesWon) ? "None" : `${((Stats2.ServiceGamesWon / Stats2.ServiceGames) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServiceGames) || isNaN(Stats2.ServiceGamesWon) ? "0 / 0 (0%)" : `${((Stats2.ServiceGamesWon / Stats2.ServiceGames) * 100).toFixed(1)} % (${Stats2.ServiceGamesWon} / ${Stats2.ServiceGames})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServGames18) || isNaN(Stats1.ServGames18Won) ? "None" : `${((Stats1.ServGames18Won / Stats1.ServGames18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServGames18) || isNaN(Stats1.ServGames18Won) ? "0 / 0 (0%)" : `${((Stats1.ServGames18Won / Stats1.ServGames18) * 100).toFixed(1)} % (${Stats1.ServGames18Won} / ${Stats1.ServGames18})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>First 8</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 1 t/m 8</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServGames18) || isNaN(Stats2.ServGames18Won) ? "None" : `${((Stats2.ServGames18Won / Stats2.ServGames18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServGames18) || isNaN(Stats2.ServGames18Won) ? "0 / 0 (0%)" : `${((Stats2.ServGames18Won / Stats2.ServGames18) * 100).toFixed(1)} % (${Stats2.ServGames18Won} / ${Stats2.ServGames18})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServGames912) || isNaN(Stats1.ServGames912Won) ? "None" : `${((Stats1.ServGames912Won / Stats1.ServGames912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServGames912) || isNaN(Stats1.ServGames912Won) ? "0 / 0 (0%)" : `${((Stats1.ServGames912Won / Stats1.ServGames912) * 100).toFixed(1)} % (${Stats1.ServGames912Won} / ${Stats1.ServGames912})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Key Games</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 9 t/m 12</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServGames912) || isNaN(Stats2.ServGames912Won) ? "None" : `${((Stats2.ServGames912Won / Stats2.ServGames912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServGames912) || isNaN(Stats2.ServGames912Won) ? "0 / 0 (0%)" : `${((Stats2.ServGames912Won / Stats2.ServGames912) * 100).toFixed(1)} % (${Stats2.ServGames912Won} / ${Stats2.ServGames912})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={3} style={{ background: "rgb(201, 201, 199)" }}>
                Service Points
              </TableCell>
            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServicePoints) || isNaN(Stats1.ServicePointsWon) ? "None" : `${((Stats1.ServicePointsWon / Stats1.ServicePoints) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServicePoints) || isNaN(Stats1.ServicePointsWon) ? "0 / 0 (0%)" : `${((Stats1.ServicePointsWon / Stats1.ServicePoints) * 100).toFixed(1)} % (${Stats1.ServicePointsWon} / ${Stats1.ServicePoints})`}
                </TableCell>
              </Hidden>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServicePoints) || isNaN(Stats2.ServicePointsWon) ? "None" : `${((Stats2.ServicePointsWon / Stats2.ServicePoints) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServicePoints) || isNaN(Stats2.ServicePointsWon) ? "0 / 0 (0%)" : `${((Stats2.ServicePointsWon / Stats2.ServicePoints) * 100).toFixed(1)} % (${Stats2.ServicePointsWon} / ${Stats2.ServicePoints})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServPoints18) || isNaN(Stats1.ServPoints18Won) ? "None" : `${((Stats1.ServPoints18Won / Stats1.ServPoints18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServPoints18) || isNaN(Stats1.ServPoints18Won) ? "0 / 0 (0%)" : `${((Stats1.ServPoints18Won / Stats1.ServPoints18) * 100).toFixed(1)} % (${Stats1.ServPoints18Won} / ${Stats1.ServPoints18})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>First 8</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 1 t/m 8</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServPoints18) || isNaN(Stats2.ServPoints18Won) ? "None" : `${((Stats2.ServPoints18Won / Stats2.ServPoints18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServPoints18) || isNaN(Stats2.ServPoints18Won) ? "0 / 0 (0%)" : `${((Stats2.ServPoints18Won / Stats2.ServPoints18) * 100).toFixed(1)} % (${Stats2.ServPoints18Won} / ${Stats2.ServPoints18})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServPoints912) || isNaN(Stats1.ServPoints912Won) ? "None" : `${((Stats1.ServPoints912Won / Stats1.ServPoints912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ServPoints912) || isNaN(Stats1.ServPoints912Won) ? "0 / 0 (0%)" : `${((Stats1.ServPoints912Won / Stats1.ServPoints912) * 100).toFixed(1)} % (${Stats1.ServPoints912Won} / ${Stats1.ServPoints912})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Key Games</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 9 t/m 12</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServPoints912) || isNaN(Stats2.ServPoints912Won) ? "None" : `${((Stats2.ServPoints912Won / Stats2.ServPoints912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ServPoints912) || isNaN(Stats2.ServPoints912Won) ? "0 / 0 (0%)" : `${((Stats2.ServPoints912Won / Stats2.ServPoints912) * 100).toFixed(1)} % (${Stats2.ServPoints912Won} / ${Stats2.ServPoints912})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={3} style={{ background: "rgb(201, 201, 199)" }}>
                BP's Behind
              </TableCell>
            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpBehind) || isNaN(Stats1.BpBehindWon) ? "None" : `${((Stats1.BpBehindWon / Stats1.BpBehind) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpBehind) || isNaN(Stats1.BpBehindWon) ? "0 / 0 (0%)" : `${((Stats1.BpBehindWon / Stats1.BpBehind) * 100).toFixed(1)} % (${Stats1.BpBehindWon} / ${Stats1.BpBehind})`}
                </TableCell>
              </Hidden>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpBehind) || isNaN(Stats2.BpBehindWon) ? "None" : `${((Stats2.BpBehindWon / Stats2.BpBehind) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpBehind) || isNaN(Stats2.BpBehindWon) ? "0 / 0 (0%)" : `${((Stats2.BpBehindWon / Stats2.BpBehind) * 100).toFixed(1)} % (${Stats2.BpBehindWon} / ${Stats2.BpBehind})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpBehind18) || isNaN(Stats1.BpBehind18Won) ? "None" : `${((Stats1.BpBehind18Won / Stats1.BpBehind18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpBehind18) || isNaN(Stats1.BpBehind18Won) ? "0 / 0 (0%)" : `${((Stats1.BpBehind18Won / Stats1.BpBehind18) * 100).toFixed(1)} % (${Stats1.BpBehind18Won} / ${Stats1.BpBehind18})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>First 8</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 1 t/m 8</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpBehind18) || isNaN(Stats2.BpBehind18Won) ? "None" : `${((Stats2.BpBehind18Won / Stats2.BpBehind18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpBehind18) || isNaN(Stats2.BpBehind18Won) ? "0 / 0 (0%)" : `${((Stats2.BpBehind18Won / Stats2.BpBehind18) * 100).toFixed(1)} % (${Stats2.BpBehind18Won} / ${Stats2.BpBehind18})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpBehind912) || isNaN(Stats1.BpBehind912Won) ? "None" : `${((Stats1.BpBehind912Won / Stats1.BpBehind912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpBehind912) || isNaN(Stats1.BpBehind912Won) ? "0 / 0 (0%)" : `${((Stats1.BpBehind912Won / Stats1.BpBehind912) * 100).toFixed(1)} % (${Stats1.BpBehind912Won} / ${Stats1.BpBehind912})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Key Games</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 9 t/m 12</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpBehind912) || isNaN(Stats2.BpBehind912Won) ? "None" : `${((Stats2.BpBehind912Won / Stats2.BpBehind912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpBehind912) || isNaN(Stats2.BpBehind912Won) ? "0 / 0 (0%)" : `${((Stats2.BpBehind912Won / Stats2.BpBehind912) * 100).toFixed(1)} % (${Stats2.BpBehind912Won} / ${Stats2.BpBehind912})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={3} style={{ background: "rgb(201, 201, 199)" }}>
                Return Games
              </TableCell>
            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnGames) || isNaN(Stats1.ReturnGamesWon) ? "None" : `${((Stats1.ReturnGamesWon / Stats1.ReturnGames) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnGames) || isNaN(Stats1.ReturnGamesWon) ? "0 / 0 (0%)" : `${((Stats1.ReturnGamesWon / Stats1.ReturnGames) * 100).toFixed(1)} % (${Stats1.ReturnGamesWon} / ${Stats1.ReturnGames})`}
                </TableCell>
              </Hidden>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnGames) || isNaN(Stats2.ReturnGamesWon) ? "None" : `${((Stats2.ReturnGamesWon / Stats2.ReturnGames) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnGames) || isNaN(Stats2.ReturnGamesWon) ? "0 / 0 (0%)" : `${((Stats2.ReturnGamesWon / Stats2.ReturnGames) * 100).toFixed(1)} % (${Stats2.ReturnGamesWon} / ${Stats2.ReturnGames})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnGames18) || isNaN(Stats1.ReturnGames18Won) ? "None" : `${((Stats1.ReturnGames18Won / Stats1.ReturnGames18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnGames18) || isNaN(Stats1.ReturnGames18Won) ? "0 / 0 (0%)" : `${((Stats1.ReturnGames18Won / Stats1.ReturnGames18) * 100).toFixed(1)} % (${Stats1.ReturnGames18Won} / ${Stats1.ReturnGames18})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>First 8</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 1 t/m 8</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnGames18) || isNaN(Stats2.ReturnGames18Won) ? "None" : `${((Stats2.ReturnGames18Won / Stats2.ReturnGames18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnGames18) || isNaN(Stats2.ReturnGames18Won) ? "0 / 0 (0%)" : `${((Stats2.ReturnGames18Won / Stats2.ReturnGames18) * 100).toFixed(1)} % (${Stats2.ReturnGames18Won} / ${Stats2.ReturnGames18})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnGames912) || isNaN(Stats1.ReturnGames912Won) ? "None" : `${((Stats1.ReturnGames912Won / Stats1.ReturnGames912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnGames912) || isNaN(Stats1.ReturnGames912Won) ? "0 / 0 (0%)" : `${((Stats1.ReturnGames912Won / Stats1.ReturnGames912) * 100).toFixed(1)} % (${Stats1.ReturnGames912Won} / ${Stats1.ReturnGames912})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Key Games</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 9 t/m 12</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnGames912) || isNaN(Stats2.ReturnGames912Won) ? "None" : `${((Stats2.ReturnGames912Won / Stats2.ReturnGames912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnGames912) || isNaN(Stats2.ReturnGames912Won) ? "0 / 0 (0%)" : `${((Stats2.ReturnGames912Won / Stats2.ReturnGames912) * 100).toFixed(1)} % (${Stats2.ReturnGames912Won} / ${Stats2.ReturnGames912})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={3} style={{ background: "rgb(201, 201, 199)" }}>
                Return Points
              </TableCell>
            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnPoints) || isNaN(Stats1.ReturnPointsWon) ? "None" : `${((Stats1.ReturnPointsWon / Stats1.ReturnPoints) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnPoints) || isNaN(Stats1.ReturnPointsWon) ? "0 / 0 (0%)" : `${((Stats1.ReturnPointsWon / Stats1.ReturnPoints) * 100).toFixed(1)} % (${Stats1.ReturnPointsWon} / ${Stats1.ReturnPoints})`}
                </TableCell>
              </Hidden>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnPoints) || isNaN(Stats2.ReturnPointsWon) ? "None" : `${((Stats2.ReturnPointsWon / Stats2.ReturnPoints) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnPoints) || isNaN(Stats2.ReturnPointsWon) ? "0 / 0 (0%)" : `${((Stats2.ReturnPointsWon / Stats2.ReturnPoints) * 100).toFixed(1)} % (${Stats2.ReturnPointsWon} / ${Stats2.ReturnPoints})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnPoints18) || isNaN(Stats1.ReturnPoints18Won) ? "None" : `${((Stats1.ReturnPoints18Won / Stats1.ReturnPoints18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnPoints18) || isNaN(Stats1.ReturnPoints18Won) ? "0 / 0 (0%)" : `${((Stats1.ReturnPoints18Won / Stats1.ReturnPoints18) * 100).toFixed(1)} % (${Stats1.ReturnPoints18Won} / ${Stats1.ReturnPoints18})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>First 8</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 1 t/m 8</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnPoints18) || isNaN(Stats2.ReturnPoints18Won) ? "None" : `${((Stats2.ReturnPoints18Won / Stats2.ReturnPoints18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnPoints18) || isNaN(Stats2.ReturnPoints18Won) ? "0 / 0 (0%)" : `${((Stats2.ReturnPoints18Won / Stats2.ReturnPoints18) * 100).toFixed(1)} % (${Stats2.ReturnPoints18Won} / ${Stats2.ReturnPoints18})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnPoints912) || isNaN(Stats1.ReturnPoints912Won) ? "None" : `${((Stats1.ReturnPoints912Won / Stats1.ReturnPoints912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.ReturnPoints912) || isNaN(Stats1.ReturnPoints912Won) ? "0 / 0 (0%)" : `${((Stats1.ReturnPoints912Won / Stats1.ReturnPoints912) * 100).toFixed(1)} % (${Stats1.ReturnPoints912Won} / ${Stats1.ReturnPoints912})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Key Games</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 9 t/m 12</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnPoints912) || isNaN(Stats2.ReturnPoints912Won) ? "None" : `${((Stats2.ReturnPoints912Won / Stats2.ReturnPoints912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.ReturnPoints912) || isNaN(Stats2.ReturnPoints912Won) ? "0 / 0 (0%)" : `${((Stats2.ReturnPoints912Won / Stats2.ReturnPoints912) * 100).toFixed(1)} % (${Stats2.ReturnPoints912Won} / ${Stats2.ReturnPoints912})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={3} style={{ background: "rgb(201, 201, 199)" }}>
                BP's Ahead
              </TableCell>
            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpAhead) || isNaN(Stats1.BpAheadWon) ? "None" : `${((Stats1.BpAheadWon / Stats1.BpAhead) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpAhead) || isNaN(Stats1.BpAheadWon) ? "0 / 0 (0%)" : `${((Stats1.BpAheadWon / Stats1.BpAhead) * 100).toFixed(1)} % (${Stats1.BpAheadWon} / ${Stats1.BpAhead})`}
                </TableCell>
              </Hidden>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpAhead) || isNaN(Stats2.BpAheadWon) ? "None" : `${((Stats2.BpAheadWon / Stats2.BpAhead) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpAhead) || isNaN(Stats2.BpAheadWon) ? "0 / 0 (0%)" : `${((Stats2.BpAheadWon / Stats2.BpAhead) * 100).toFixed(1)} % (${Stats2.BpAheadWon} / ${Stats2.BpAhead})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpAhead18) || isNaN(Stats1.BpAhead18Won) ? "None" : `${((Stats1.BpAhead18Won / Stats1.BpAhead18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpAhead18) || isNaN(Stats1.BpAhead18Won) ? "0 / 0 (0%)" : `${((Stats1.BpAhead18Won / Stats1.BpAhead18) * 100).toFixed(1)} % (${Stats1.BpAhead18Won} / ${Stats1.BpAhead18})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>First 8</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 1 t/m 8</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpAhead18) || isNaN(Stats2.BpAhead18Won) ? "None" : `${((Stats2.BpAhead18Won / Stats2.BpAhead18) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpAhead18) || isNaN(Stats2.BpAhead18Won) ? "0 / 0 (0%)" : `${((Stats2.BpAhead18Won / Stats2.BpAhead18) * 100).toFixed(1)} % (${Stats2.BpAhead18Won} / ${Stats2.BpAhead18})`}
                </TableCell>
              </Hidden>

            </TableRow>

            <TableRow>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpAhead912) || isNaN(Stats1.BpAhead912Won) ? "None" : `${((Stats1.BpAhead912Won / Stats1.BpAhead912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats1.BpAhead912) || isNaN(Stats1.BpAhead912Won) ? "0 / 0 (0%)" : `${((Stats1.BpAhead912Won / Stats1.BpAhead912) * 100).toFixed(1)} % (${Stats1.BpAhead912Won} / ${Stats1.BpAhead912})`}
                </TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Key Games</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Games 9 t/m 12</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpAhead912) || isNaN(Stats2.BpAhead912Won) ? "None" : `${((Stats2.BpAhead912Won / Stats2.BpAhead912) * 100).toFixed(1)} % `}
                </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>
                  {isNaN(Stats2.BpAhead912) || isNaN(Stats2.BpAhead912Won) ? "0 / 0 (0%)" : `${((Stats2.BpAhead912Won / Stats2.BpAhead912) * 100).toFixed(1)} % (${Stats2.BpAhead912Won} / ${Stats2.BpAhead912})`}
                </TableCell>
              </Hidden>

            </TableRow>

            {/* {Stats1s.map(stat => (
                <>
                  <TableRow hover>
                    <TableCell>ServiceGames</TableCell>
                    <TableCell>{isNaN(stat.ServiceGames) || isNaN(stat.ServiceGamesWon) ? "0 / 0 (0%)" : `${((stat.ServiceGamesWon / stat.ServiceGames) * 100).toFixed(1)} % (${stat.ServiceGamesWon} / ${stat.ServiceGames})`}</TableCell>
                    <TableCell>{isNaN(stat.ServGames18) || isNaN(stat.ServGames18Won) ? "0 / 0 (0%)" : `${((stat.ServGames18Won / stat.ServGames18) * 100).toFixed(1)} % (${stat.ServGames18Won} / ${stat.ServGames18})`}</TableCell>
                    <TableCell>{isNaN(stat.ServGames912) || isNaN(stat.ServGames912Won) ? "0 / 0 (0%)" : `${((stat.ServGames912Won / stat.ServGames912) * 100).toFixed(1)} % (${stat.ServGames912Won} / ${stat.ServGames912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>Service Points</TableCell>
                    <TableCell>{isNaN(stat.ServicePoints) || isNaN(stat.ServicePointsWon) ? "0 / 0 (0%)" : `${((stat.ServicePointsWon / stat.ServicePoints) * 100).toFixed(1)} % (${stat.ServicePointsWon} / ${stat.ServicePoints})`}</TableCell>
                    <TableCell>{isNaN(stat.ServPoints18) || isNaN(stat.ServPoints18Won) ? "0 / 0 (0%)" : `${((stat.ServPoints18Won / stat.ServPoints18) * 100).toFixed(1)} % (${stat.ServPoints18Won} / ${stat.ServPoints18})`}</TableCell>
                    <TableCell>{isNaN(stat.ServPoints912) || isNaN(stat.ServPoints912Won) ? "0 / 0 (0%)" : `${((stat.ServPoints912Won / stat.ServPoints912) * 100).toFixed(1)} % (${stat.ServPoints912Won} / ${stat.ServPoints912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>BP's Behind</TableCell>
                    <TableCell>{isNaN(stat.BpBehind) || isNaN(stat.BpBehindWon) ? "0 / 0 (0%)" : `${((stat.BpBehindWon / stat.BpBehind) * 100).toFixed(1)} % (${stat.BpBehindWon} / ${stat.BpBehind})`}</TableCell>
                    <TableCell>{isNaN(stat.BpBehind18) || isNaN(stat.BpBehind18Won) ? "0 / 0 (0%)" : `${((stat.BpBehind18Won / stat.BpBehind18) * 100).toFixed(1)} % (${stat.BpBehind18Won} / ${stat.BpBehind18})`}</TableCell>
                    <TableCell>{isNaN(stat.BpBehind912) || isNaN(stat.BpBehind912Won) ? "0 / 0 (0%)" : `${((stat.BpBehind912Won / stat.BpBehind912) * 100).toFixed(1)} % (${stat.BpBehind912Won} / ${stat.BpBehind912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>Return Games</TableCell>
                    <TableCell>{isNaN(stat.ReturnGames) || isNaN(stat.ReturnGamesWon) ? "0 / 0 (0%)" : `${((stat.ReturnGamesWon / stat.ReturnGames) * 100).toFixed(1)} % (${stat.ReturnGamesWon} / ${stat.ReturnGames})`}</TableCell>
                    <TableCell>{isNaN(stat.ReturnGames18) || isNaN(stat.ReturnGames18Won) ? "0 / 0 (0%)" : `${((stat.ReturnGames18Won / stat.ReturnGames18) * 100).toFixed(1)} % (${stat.ReturnGames18Won} / ${stat.ReturnGames18})`}</TableCell>
                    <TableCell>{isNaN(stat.ReturnGames912) || isNaN(stat.ReturnGames912Won) ? "0 / 0 (0%)" : `${((stat.ReturnGames912Won / stat.ReturnGames912) * 100).toFixed(1)} % (${stat.ReturnGames912Won} / ${stat.ReturnGames912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>Return Points</TableCell>
                    <TableCell>{isNaN(stat.ReturnPoints) || isNaN(stat.ReturnPointsWon) ? "0 / 0 (0%)" : `${((stat.ReturnPointsWon / stat.ReturnPoints) * 100).toFixed(1)} % (${stat.ReturnPointsWon} / ${stat.ReturnPoints})`}</TableCell>
                    <TableCell>{isNaN(stat.ReturnPoints18) || isNaN(stat.ReturnPoints18Won) ? "0 / 0 (0%)" : `${((stat.ReturnPoints18Won / stat.ReturnPoints18) * 100).toFixed(1)} % (${stat.ReturnPoints18Won} / ${stat.ReturnPoints18})`}</TableCell>
                    <TableCell>{isNaN(stat.ReturnPoints912) || isNaN(stat.ReturnPoints912Won) ? "0 / 0 (0%)" : `${((stat.ReturnPoints912Won / stat.ReturnPoints912) * 100).toFixed(1)} % (${stat.ReturnPoints912Won} / ${stat.ReturnPoints912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>BP's Ahead</TableCell>
                    <TableCell>{isNaN(stat.BpAhead) || isNaN(stat.BpAheadWon) ? "0 / 0 (0%)" : `${((stat.BpAheadWon / stat.BpAhead) * 100).toFixed(1)} % (${stat.BpAheadWon} / ${stat.BpAhead})`}</TableCell>
                    <TableCell>{isNaN(stat.BpAhead18) || isNaN(stat.BpAhead18Won) ? "0 / 0 (0%)" : `${((stat.BpAhead18Won / stat.BpAhead18) * 100).toFixed(1)} % (${stat.BpAhead18Won} / ${stat.BpAhead18})`}</TableCell>
                    <TableCell>{isNaN(stat.BpAhead912) || isNaN(stat.BpAhead912Won) ? "0 / 0 (0%)" : `${((stat.BpAhead912Won / stat.BpAhead912) * 100).toFixed(1)} % (${stat.BpAhead912Won} / ${stat.BpAhead912})`}</TableCell>
                  </TableRow>
                </>
              ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default PlayerRatingTable;
