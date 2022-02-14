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


// const columns = [
//   { id: 'description', label: 'Description', minWidth: 170 },
//   { id: 'total', label: 'Total', minWidth: 100 },
//   { id: 'set1', label: 'Set1', minWidth: 100 },
//   { id: 'set2_1won', label: 'Set2 (1st Won)', minWidth: 100 },
//   { id: 'set2_1lost', label: 'Set2 (1st Lost)', minWidth: 100 },
//   { id: 'set3_2won', label: 'Set3 (2nd Won)', minWidth: 100 },
//   { id: 'set3_2lost', label: 'Set3 (2nd Lost)', minWidth: 100 },
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 4,
    paddingBottom: 4,
    textAlign: "center"
  }
}));

function TieBreakTable(props) {
  const BreakHold1 = props.BreakHold1[0];
  const BreakHold2 = props.BreakHold2[0];
  const classes = useStyles();

  return (
      <Paper className="mt-8 text-center">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            {/* <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead> */}
            <TableBody>
              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Wins
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{(BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2 + BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2) == 0 ? "No Data" : `${(((BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Won_lost2) / (BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2 + BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Won_lost2} / ${BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2 + BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2})`}</TableCell>
                <TableCell className={classes.root}>{(BreakHold2.TiebreakSet1Won + BreakHold2.TiebreakSet1Lost + BreakHold2.TiebreakSet2Won_win1 + BreakHold2.TiebreakSet2Lost_win1 + BreakHold2.TiebreakSet2Won_lost1 + BreakHold2.TiebreakSet2Lost_lost1 + BreakHold2.TiebreakSet3Won_win2 + BreakHold2.TiebreakSet3Lost_win2 + BreakHold2.TiebreakSet3Won_lost2 + BreakHold2.TiebreakSet3Lost_lost2) == 0 ? "No Data" : `${(((BreakHold2.TiebreakSet1Won + BreakHold2.TiebreakSet2Won_win1 + BreakHold2.TiebreakSet2Won_lost1 + BreakHold2.TiebreakSet3Won_win2 + BreakHold2.TiebreakSet3Won_lost2) / (BreakHold2.TiebreakSet1Won + BreakHold2.TiebreakSet1Lost + BreakHold2.TiebreakSet2Won_win1 + BreakHold2.TiebreakSet2Lost_win1 + BreakHold2.TiebreakSet2Won_lost1 + BreakHold2.TiebreakSet2Lost_lost1 + BreakHold2.TiebreakSet3Won_win2 + BreakHold2.TiebreakSet3Lost_win2 + BreakHold2.TiebreakSet3Won_lost2 + BreakHold2.TiebreakSet3Lost_lost2))* 100).toFixed(1)} % (${BreakHold2.TiebreakSet1Won + BreakHold2.TiebreakSet2Won_win1 + BreakHold2.TiebreakSet2Won_lost1 + BreakHold2.TiebreakSet3Won_win2 + BreakHold2.TiebreakSet3Won_lost2} / ${BreakHold2.TiebreakSet1Won + BreakHold2.TiebreakSet1Lost + BreakHold2.TiebreakSet2Won_win1 + BreakHold2.TiebreakSet2Lost_win1 + BreakHold2.TiebreakSet2Won_lost1 + BreakHold2.TiebreakSet2Lost_lost1 + BreakHold2.TiebreakSet3Won_win2 + BreakHold2.TiebreakSet3Lost_win2 + BreakHold2.TiebreakSet3Won_lost2 + BreakHold2.TiebreakSet3Lost_lost2})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set1
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost == 0 ? "No Data" : `${((BreakHold1.TiebreakSet1Won / (BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet1Won} / ${BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost})`}</TableCell>
                <TableCell className={classes.root}>{BreakHold2.TiebreakSet1Won + BreakHold2.TiebreakSet1Lost == 0 ? "No Data" : `${((BreakHold2.TiebreakSet1Won / (BreakHold2.TiebreakSet1Won + BreakHold2.TiebreakSet1Lost))* 100).toFixed(1)} % (${BreakHold2.TiebreakSet1Won} / ${BreakHold2.TiebreakSet1Won + BreakHold2.TiebreakSet1Lost})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set 2 (If Won Set 1)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1 == 0 ? "No Data" : `${((BreakHold1.TiebreakSet2Won_win1 / (BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet2Won_win1} / ${BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1})`}</TableCell>
                <TableCell className={classes.root}>{BreakHold2.TiebreakSet2Won_win1 + BreakHold2.TiebreakSet2Lost_win1 == 0 ? "No Data" : `${((BreakHold2.TiebreakSet2Won_win1 / (BreakHold2.TiebreakSet2Won_win1 + BreakHold2.TiebreakSet2Lost_win1))* 100).toFixed(1)} % (${BreakHold2.TiebreakSet2Won_win1} / ${BreakHold2.TiebreakSet2Won_win1 + BreakHold2.TiebreakSet2Lost_win1})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set 2 (If Lost Set 1)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1 == 0 ? "No Data" : `${((BreakHold1.TiebreakSet2Won_lost1 / (BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet2Won_lost1} / ${BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1})`}</TableCell>
                <TableCell className={classes.root}>{BreakHold2.TiebreakSet2Won_lost1 + BreakHold2.TiebreakSet2Lost_lost1 == 0 ? "No Data" : `${((BreakHold2.TiebreakSet2Won_lost1 / (BreakHold2.TiebreakSet2Won_lost1 + BreakHold2.TiebreakSet2Lost_lost1))* 100).toFixed(1)} % (${BreakHold2.TiebreakSet2Won_lost1} / ${BreakHold2.TiebreakSet2Won_lost1 + BreakHold2.TiebreakSet2Lost_lost1})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set 3 (If Won Set 2)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2 == 0 ? "No Data" : `${((BreakHold1.TiebreakSet3Won_win2 / (BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet3Won_win2} / ${BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2})`}</TableCell>
                <TableCell className={classes.root}>{BreakHold2.TiebreakSet3Won_win2 + BreakHold2.TiebreakSet3Lost_win2 == 0 ? "No Data" : `${((BreakHold2.TiebreakSet3Won_win2 / (BreakHold2.TiebreakSet3Won_win2 + BreakHold2.TiebreakSet3Lost_win2))* 100).toFixed(1)} % (${BreakHold2.TiebreakSet3Won_win2} / ${BreakHold2.TiebreakSet3Won_win2 + BreakHold2.TiebreakSet3Lost_win2})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set 3 (If Lost Set 2)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2 == 0 ? "No Data" : `${((BreakHold1.TiebreakSet3Won_lost2 / (BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet3Won_lost2} / ${BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2})`}</TableCell>
                <TableCell className={classes.root}>{BreakHold2.TiebreakSet3Won_lost2 + BreakHold2.TiebreakSet3Lost_lost2 == 0 ? "No Data" : `${((BreakHold2.TiebreakSet3Won_lost2 / (BreakHold2.TiebreakSet3Won_lost2 + BreakHold2.TiebreakSet3Lost_lost2))* 100).toFixed(1)} % (${BreakHold2.TiebreakSet3Won_lost2} / ${BreakHold2.TiebreakSet3Won_lost2 + BreakHold2.TiebreakSet3Lost_lost2})`}</TableCell>
              </TableRow>

              {/* {BreakHold.map(BreakHold1 => (
                  <TableRow hover key={BreakHold1.TotalWin}>
                    <TableCell>Tiebreak's</TableCell>
                    <TableCell>{(BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2 + BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2) == 0 ? "No Data" : `${(((BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Won_lost2) / (BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2 + BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Won_lost2} / ${BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost + BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1 + BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1 + BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2 + BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2})`}</TableCell>
                    <TableCell>{BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost == 0 ? "No Data" : `${((BreakHold1.TiebreakSet1Won / (BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet1Won} / ${BreakHold1.TiebreakSet1Won + BreakHold1.TiebreakSet1Lost})`}</TableCell>
                    <TableCell>{BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1 == 0 ? "No Data" : `${((BreakHold1.TiebreakSet2Won_win1 / (BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet2Won_win1} / ${BreakHold1.TiebreakSet2Won_win1 + BreakHold1.TiebreakSet2Lost_win1})`}</TableCell>
                    <TableCell>{BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1 == 0 ? "No Data" : `${((BreakHold1.TiebreakSet2Won_lost1 / (BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet2Won_lost1} / ${BreakHold1.TiebreakSet2Won_lost1 + BreakHold1.TiebreakSet2Lost_lost1})`}</TableCell>
                    <TableCell>{BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2 == 0 ? "No Data" : `${((BreakHold1.TiebreakSet3Won_win2 / (BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet3Won_win2} / ${BreakHold1.TiebreakSet3Won_win2 + BreakHold1.TiebreakSet3Lost_win2})`}</TableCell>
                    <TableCell>{BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2 == 0 ? "No Data" : `${((BreakHold1.TiebreakSet3Won_lost2 / (BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2))* 100).toFixed(1)} % (${BreakHold1.TiebreakSet3Won_lost2} / ${BreakHold1.TiebreakSet3Won_lost2 + BreakHold1.TiebreakSet3Lost_lost2})`}</TableCell>
                  </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
  );
}

export default TieBreakTable;
