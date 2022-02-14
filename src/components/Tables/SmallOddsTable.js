import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledTableContainer = withStyles((theme) => ({
  root: {
    width: "max-content"
  }
}))(TableContainer);


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 4,
    paddingBottom: 4
  }
}));

function SmallOddsTable(props) {
  const classes = useStyles();
  const { LivePrediction, MatchInfo } = props;
  return (
    <Paper style={{ width: "max-content", right: 50, bottom: 50 }} className="m-auto mt-8">
      <StyledTableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableBody>

            <TableCell className={classes.root} colSpan={3} style={{ background: "rgb(238, 252, 167)", fontSize: "14px", textAlign: "center" }}>
              Odds
            </TableCell>

            <TableRow hover>
              <TableCell></TableCell>
              <TableCell>{MatchInfo.Player1}</TableCell>
              <TableCell>{MatchInfo.Player2}</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Start</TableCell>
              <TableCell align="center">{MatchInfo.Odds1}</TableCell>
              <TableCell align="center">{MatchInfo.Odds2}</TableCell>
            </TableRow>
            {LivePrediction &&
              (
                <TableRow hover>
                  <TableCell>Last</TableCell>
                  <TableCell align="center">{LivePrediction.Odds1}</TableCell>
                  <TableCell align="center">{LivePrediction.Odds2}</TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
}

export default SmallOddsTable;
