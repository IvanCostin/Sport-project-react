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

function WinFigureTable(props) {
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
                <TableCell className={classes.root}>{(BreakHold1.TotalWin + BreakHold1.TotalLost) == 0 ? "No Data" : `${(((BreakHold1.TotalWin) / (BreakHold1.TotalWin + BreakHold1.TotalLost))* 100).toFixed(1)} % (${BreakHold1.TotalWin} / ${BreakHold1.TotalWin + BreakHold1.TotalLost})`}</TableCell>
                <TableCell className={classes.root}>{(BreakHold2.TotalWin + BreakHold2.TotalLost) == 0 ? "No Data" : `${(((BreakHold2.TotalWin) / (BreakHold2.TotalWin + BreakHold2.TotalLost))* 100).toFixed(1)} % (${BreakHold2.TotalWin} / ${BreakHold2.TotalWin + BreakHold2.TotalLost})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set1
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{(BreakHold1.TotalWinSet1 + BreakHold1.TotalLostSet1) == 0 ? "No Data" : `${(((BreakHold1.TotalWinSet1) / (BreakHold1.TotalWinSet1 + BreakHold1.TotalLostSet1))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet1} / ${BreakHold1.TotalWinSet1 + BreakHold1.TotalLostSet1})`}</TableCell>
                <TableCell className={classes.root}>{(BreakHold2.TotalWinSet1 + BreakHold2.TotalLostSet1) == 0 ? "No Data" : `${(((BreakHold2.TotalWinSet1) / (BreakHold2.TotalWinSet1 + BreakHold2.TotalLostSet1))* 100).toFixed(1)} % (${BreakHold2.TotalWinSet1} / ${BreakHold2.TotalWinSet1 + BreakHold2.TotalLostSet1})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set 2 (If Won Set 1)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TotalWinSet2_won1 + BreakHold1.TotalLostSet2_won1 == 0 ? "No Data" : `${((BreakHold1.TotalWinSet2_won1 / (BreakHold1.TotalWinSet2_won1 + BreakHold1.TotalLostSet2_won1))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet2_won1} / ${BreakHold1.TotalWinSet2_won1 + BreakHold1.TotalLostSet2_won1})`}</TableCell>
                <TableCell className={classes.root}>{BreakHold2.TotalWinSet2_won1 + BreakHold2.TotalLostSet2_won1 == 0 ? "No Data" : `${((BreakHold2.TotalWinSet2_won1 / (BreakHold2.TotalWinSet2_won1 + BreakHold2.TotalLostSet2_won1))* 100).toFixed(1)} % (${BreakHold2.TotalWinSet2_won1} / ${BreakHold2.TotalWinSet2_won1 + BreakHold2.TotalLostSet2_won1})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set 2 (If Lost Set 1)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TotalWinSet2_lost1 + BreakHold1.TotalLostSet2_lost1 == 0 ? "No Data" : `${((BreakHold1.TotalWinSet2_lost1 / (BreakHold1.TotalWinSet2_lost1 + BreakHold1.TotalLostSet2_lost1))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet2_lost1} / ${BreakHold1.TotalWinSet2_lost1 + BreakHold1.TotalLostSet2_lost1})`}</TableCell>
                <TableCell className={classes.root}>{BreakHold2.TotalWinSet2_lost1 + BreakHold2.TotalLostSet2_lost1 == 0 ? "No Data" : `${((BreakHold2.TotalWinSet2_lost1 / (BreakHold2.TotalWinSet2_lost1 + BreakHold2.TotalLostSet2_lost1))* 100).toFixed(1)} % (${BreakHold2.TotalWinSet2_lost1} / ${BreakHold2.TotalWinSet2_lost1 + BreakHold2.TotalLostSet2_lost1})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set 3 (If Won Set 2)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TotalWinSet3_won2 + BreakHold1.TotalLostSet3_won2 == 0 ? "No Data" : `${((BreakHold1.TotalWinSet3_won2 / (BreakHold1.TotalWinSet3_won2 + BreakHold1.TotalLostSet3_won2))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet3_won2} / ${BreakHold1.TotalWinSet3_won2 + BreakHold1.TotalLostSet3_won2})`}</TableCell>
                <TableCell className={classes.root}>{BreakHold2.TotalWinSet3_won2 + BreakHold2.TotalLostSet3_won2 == 0 ? "No Data" : `${((BreakHold2.TotalWinSet3_won2 / (BreakHold2.TotalWinSet3_won2 + BreakHold2.TotalLostSet3_won2))* 100).toFixed(1)} % (${BreakHold2.TotalWinSet3_won2} / ${BreakHold2.TotalWinSet3_won2 + BreakHold2.TotalLostSet3_won2})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>
                  Total Win Set 3 (If Lost Set 2)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TotalWinSet3_lost2 + BreakHold1.TotalLostSet3_lost2 == 0 ? "No Data" : `${((BreakHold1.TotalWinSet3_lost2 / (BreakHold1.TotalWinSet3_lost2 + BreakHold1.TotalLostSet3_lost2))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet3_lost2} / ${BreakHold1.TotalWinSet3_lost2 + BreakHold1.TotalLostSet3_lost2})`}</TableCell>
                <TableCell className={classes.root}>{BreakHold2.TotalWinSet3_lost2 + BreakHold2.TotalLostSet3_lost2 == 0 ? "No Data" : `${((BreakHold2.TotalWinSet3_lost2 / (BreakHold2.TotalWinSet3_lost2 + BreakHold2.TotalLostSet3_lost2))* 100).toFixed(1)} % (${BreakHold2.TotalWinSet3_lost2} / ${BreakHold2.TotalWinSet3_lost2 + BreakHold2.TotalLostSet3_lost2})`}</TableCell>
              </TableRow>

              {/* {BreakHold.map(stat => (
                  <TableRow hover key={stat.TotalWin}>
                    <TableCell>Wins</TableCell>
                    <TableCell>{(stat.TotalWin + stat.TotalLost) == 0 ? "No Data" : `${(((stat.TotalWin) / (stat.TotalWin + stat.TotalLost))* 100).toFixed(1)} % (${stat.TotalWin} / ${stat.TotalWin + stat.TotalLost})`}</TableCell>
                    <TableCell>{(stat.TotalWinSet1 + stat.TotalLostSet1) == 0 ? "No Data" : `${(((stat.TotalWinSet1) / (stat.TotalWinSet1 + stat.TotalLostSet1))* 100).toFixed(1)} % (${stat.TotalWinSet1} / ${stat.TotalWinSet1 + stat.TotalLostSet1})`}</TableCell>
                    <TableCell>{stat.TotalWinSet2_won1 + stat.TotalLostSet2_won1 == 0 ? "No Data" : `${((stat.TotalWinSet2_won1 / (stat.TotalWinSet2_won1 + stat.TotalLostSet2_won1))* 100).toFixed(1)} % (${stat.TotalWinSet2_won1} / ${stat.TotalWinSet2_won1 + stat.TotalLostSet2_won1})`}</TableCell>
                    <TableCell>{stat.TotalWinSet2_lost1 + stat.TotalLostSet2_lost1 == 0 ? "No Data" : `${((stat.TotalWinSet2_lost1 / (stat.TotalWinSet2_lost1 + stat.TotalLostSet2_lost1))* 100).toFixed(1)} % (${stat.TotalWinSet2_lost1} / ${stat.TotalWinSet2_lost1 + stat.TotalLostSet2_lost1})`}</TableCell>
                    <TableCell>{stat.TotalWinSet3_won2 + stat.TotalLostSet3_won2 == 0 ? "No Data" : `${((stat.TotalWinSet3_won2 / (stat.TotalWinSet3_won2 + stat.TotalLostSet3_won2))* 100).toFixed(1)} % (${stat.TotalWinSet3_won2} / ${stat.TotalWinSet3_won2 + stat.TotalLostSet3_won2})`}</TableCell>
                    <TableCell>{stat.TotalWinSet3_lost2 + stat.TotalLostSet3_lost2 == 0 ? "No Data" : `${((stat.TotalWinSet3_lost2 / (stat.TotalWinSet3_lost2 + stat.TotalLostSet3_lost2))* 100).toFixed(1)} % (${stat.TotalWinSet3_lost2} / ${stat.TotalWinSet3_lost2 + stat.TotalLostSet3_lost2})`}</TableCell>
                  </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
  );
}

export default WinFigureTable;
