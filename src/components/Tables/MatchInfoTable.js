import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { getMatchInfo } from "../../actions/matchActions"

const useStyles = makeStyles((theme) => ({
	root: {
    paddingTop: 0,
    paddingBottom: 0
  }
}));

const columns = [
  { id: 'sort', label: 'Sort', minWidth: 100 },
  { id: 'gender', label: 'Gender', minWidth: 100 },
  { id: 'location', label: 'Location', minWidth: 100 },
  { id: 'stage', label: 'Stage', minWidth: 100 },
  { id: 'round', label: 'Round', minWidth: 100 },
  { id: 'surface', label: 'Surface', minWidth: 100 },
  { id: 'venue', label: 'Venue', minWidth: 100 },
];

function MatchInfoTable(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { MatchInfo } = props;

  return (
    <Paper className="mt-8 text-center">
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            <TableRow style={{ background: "rgb(238, 252, 167)" }}>

						<TableCell className={classes.root} colSpan={8} style={{ background: "rgb(238, 252, 167)", fontSize: "14px", textAlign: "center" }}>
	            Match Info
	          </TableCell>

            </TableRow>

            <TableRow hover>
              <TableCell className={classes.root}>Date: {MatchInfo.TimeStamp}</TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell className={classes.root}>Round: {MatchInfo.Round}</TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell className={classes.root}>Ground: {MatchInfo.Ground}</TableCell>
            </TableRow>

						<TableRow hover>
              <TableCell className={classes.root}>Status: {MatchInfo.Status}</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default MatchInfoTable;
