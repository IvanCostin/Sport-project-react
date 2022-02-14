import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 4,
    paddingBottom: 4,
    textAlign: "center"
  }
}));
function PlayerRatingTableForOne(props) {
  const classes = useStyles();
  const Stats1 = props.Stats1[0];

  return (
    <Paper className="mt-8 text-center">
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            <TableRow>
              <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(183, 222, 232)" }}>
                Service Games
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Total</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ServiceGames) || isNaN(Stats1.ServiceGamesWon) ? "0 / 0 (0%)" : `${((Stats1.ServiceGamesWon / Stats1.ServiceGames) * 100).toFixed(1)} % (${Stats1.ServiceGamesWon} / ${Stats1.ServiceGames})`}
              </TableCell>

            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 1 t/m 8</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ServGames18) || isNaN(Stats1.ServGames18Won) ? "0 / 0 (0%)" : `${((Stats1.ServGames18Won / Stats1.ServGames18) * 100).toFixed(1)} % (${Stats1.ServGames18Won} / ${Stats1.ServGames18})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 9 t/m 12</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ServGames912) || isNaN(Stats1.ServGames912Won) ? "0 / 0 (0%)" : `${((Stats1.ServGames912Won / Stats1.ServGames912) * 100).toFixed(1)} % (${Stats1.ServGames912Won} / ${Stats1.ServGames912})`}
              </TableCell>
            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(183, 222, 232)" }}>
                Service Points
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Total</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ServicePoints) || isNaN(Stats1.ServicePointsWon) ? "0 / 0 (0%)" : `${((Stats1.ServicePointsWon / Stats1.ServicePoints) * 100).toFixed(1)} % (${Stats1.ServicePointsWon} / ${Stats1.ServicePoints})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 1 t/m 8</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ServPoints18) || isNaN(Stats1.ServPoints18Won) ? "0 / 0 (0%)" : `${((Stats1.ServPoints18Won / Stats1.ServPoints18) * 100).toFixed(1)} % (${Stats1.ServPoints18Won} / ${Stats1.ServPoints18})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 9 t/m 12</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ServPoints912) || isNaN(Stats1.ServPoints912Won) ? "0 / 0 (0%)" : `${((Stats1.ServPoints912Won / Stats1.ServPoints912) * 100).toFixed(1)} % (${Stats1.ServPoints912Won} / ${Stats1.ServPoints912})`}
              </TableCell>
            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(183, 222, 232)" }}>
                BP's Behind
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Total</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.BpBehind) || isNaN(Stats1.BpBehindWon) ? "0 / 0 (0%)" : `${((Stats1.BpBehindWon / Stats1.BpBehind) * 100).toFixed(1)} % (${Stats1.BpBehindWon} / ${Stats1.BpBehind})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 1 t/m 8</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.BpBehind18) || isNaN(Stats1.BpBehind18Won) ? "0 / 0 (0%)" : `${((Stats1.BpBehind18Won / Stats1.BpBehind18) * 100).toFixed(1)} % (${Stats1.BpBehind18Won} / ${Stats1.BpBehind18})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 9 t/m 12</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.BpBehind912) || isNaN(Stats1.BpBehind912Won) ? "0 / 0 (0%)" : `${((Stats1.BpBehind912Won / Stats1.BpBehind912) * 100).toFixed(1)} % (${Stats1.BpBehind912Won} / ${Stats1.BpBehind912})`}
              </TableCell>
            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(183, 222, 232)" }}>
                Return Games
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Total</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ReturnGames) || isNaN(Stats1.ReturnGamesWon) ? "0 / 0 (0%)" : `${((Stats1.ReturnGamesWon / Stats1.ReturnGames) * 100).toFixed(1)} % (${Stats1.ReturnGamesWon} / ${Stats1.ReturnGames})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 1 t/m 8</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ReturnGames18) || isNaN(Stats1.ReturnGames18Won) ? "0 / 0 (0%)" : `${((Stats1.ReturnGames18Won / Stats1.ReturnGames18) * 100).toFixed(1)} % (${Stats1.ReturnGames18Won} / ${Stats1.ReturnGames18})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 9 t/m 12</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ReturnGames912) || isNaN(Stats1.ReturnGames912Won) ? "0 / 0 (0%)" : `${((Stats1.ReturnGames912Won / Stats1.ReturnGames912) * 100).toFixed(1)} % (${Stats1.ReturnGames912Won} / ${Stats1.ReturnGames912})`}
              </TableCell>
            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(183, 222, 232)" }}>
                Return Points
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Total</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ReturnPoints) || isNaN(Stats1.ReturnPointsWon) ? "0 / 0 (0%)" : `${((Stats1.ReturnPointsWon / Stats1.ReturnPoints) * 100).toFixed(1)} % (${Stats1.ReturnPointsWon} / ${Stats1.ReturnPoints})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 1 t/m 8</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ReturnPoints18) || isNaN(Stats1.ReturnPoints18Won) ? "0 / 0 (0%)" : `${((Stats1.ReturnPoints18Won / Stats1.ReturnPoints18) * 100).toFixed(1)} % (${Stats1.ReturnPoints18Won} / ${Stats1.ReturnPoints18})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 9 t/m 12</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.ReturnPoints912) || isNaN(Stats1.ReturnPoints912Won) ? "0 / 0 (0%)" : `${((Stats1.ReturnPoints912Won / Stats1.ReturnPoints912) * 100).toFixed(1)} % (${Stats1.ReturnPoints912Won} / ${Stats1.ReturnPoints912})`}
              </TableCell>
            </TableRow>

            <br />

            <TableRow>
              <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(183, 222, 232)" }}>
                BP's Ahead
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Total</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.BpAhead) || isNaN(Stats1.BpAheadWon) ? "0 / 0 (0%)" : `${((Stats1.BpAheadWon / Stats1.BpAhead) * 100).toFixed(1)} % (${Stats1.BpAheadWon} / ${Stats1.BpAhead})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 1 t/m 8</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.BpAhead18) || isNaN(Stats1.BpAhead18Won) ? "0 / 0 (0%)" : `${((Stats1.BpAhead18Won / Stats1.BpAhead18) * 100).toFixed(1)} % (${Stats1.BpAhead18Won} / ${Stats1.BpAhead18})`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Games 9 t/m 12</TableCell>

              <TableCell className={classes.root}>
                {isNaN(Stats1.BpAhead912) || isNaN(Stats1.BpAhead912Won) ? "0 / 0 (0%)" : `${((Stats1.BpAhead912Won / Stats1.BpAhead912) * 100).toFixed(1)} % (${Stats1.BpAhead912Won} / ${Stats1.BpAhead912})`}
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default PlayerRatingTableForOne;
