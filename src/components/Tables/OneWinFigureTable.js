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

function WinFigureTableForOne(props) {
  const BreakHold1 = props.BreakHold1[0];
  const classes = useStyles();

  return (
      <Paper className="mt-8 text-center">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableBody>
              <TableRow>
                <TableCell className={classes.root} style={{ background: "rgb(183, 222, 232)" }}>
                  Total Wins
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{(BreakHold1.TotalWin + BreakHold1.TotalLost) == 0 ? "No Data" : `${(((BreakHold1.TotalWin) / (BreakHold1.TotalWin + BreakHold1.TotalLost))* 100).toFixed(1)} % (${BreakHold1.TotalWin} / ${BreakHold1.TotalWin + BreakHold1.TotalLost})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} style={{ background: "rgb(183, 222, 232)" }}>
                  Total Win Set1
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{(BreakHold1.TotalWinSet1 + BreakHold1.TotalLostSet1) == 0 ? "No Data" : `${(((BreakHold1.TotalWinSet1) / (BreakHold1.TotalWinSet1 + BreakHold1.TotalLostSet1))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet1} / ${BreakHold1.TotalWinSet1 + BreakHold1.TotalLostSet1})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} style={{ background: "rgb(183, 222, 232)" }}>
                  Total Win Set 2 (If Won Set 1)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TotalWinSet2_won1 + BreakHold1.TotalLostSet2_won1 == 0 ? "No Data" : `${((BreakHold1.TotalWinSet2_won1 / (BreakHold1.TotalWinSet2_won1 + BreakHold1.TotalLostSet2_won1))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet2_won1} / ${BreakHold1.TotalWinSet2_won1 + BreakHold1.TotalLostSet2_won1})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} style={{ background: "rgb(183, 222, 232)" }}>
                  Total Win Set 2 (If Lost Set 1)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TotalWinSet2_lost1 + BreakHold1.TotalLostSet2_lost1 == 0 ? "No Data" : `${((BreakHold1.TotalWinSet2_lost1 / (BreakHold1.TotalWinSet2_lost1 + BreakHold1.TotalLostSet2_lost1))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet2_lost1} / ${BreakHold1.TotalWinSet2_lost1 + BreakHold1.TotalLostSet2_lost1})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} style={{ background: "rgb(183, 222, 232)" }}>
                  Total Win Set 3 (If Won Set 2)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TotalWinSet3_won2 + BreakHold1.TotalLostSet3_won2 == 0 ? "No Data" : `${((BreakHold1.TotalWinSet3_won2 / (BreakHold1.TotalWinSet3_won2 + BreakHold1.TotalLostSet3_won2))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet3_won2} / ${BreakHold1.TotalWinSet3_won2 + BreakHold1.TotalLostSet3_won2})`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.root} style={{ background: "rgb(183, 222, 232)" }}>
                  Total Win Set 3 (If Lost Set 2)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.root}>{BreakHold1.TotalWinSet3_lost2 + BreakHold1.TotalLostSet3_lost2 == 0 ? "No Data" : `${((BreakHold1.TotalWinSet3_lost2 / (BreakHold1.TotalWinSet3_lost2 + BreakHold1.TotalLostSet3_lost2))* 100).toFixed(1)} % (${BreakHold1.TotalWinSet3_lost2} / ${BreakHold1.TotalWinSet3_lost2 + BreakHold1.TotalLostSet3_lost2})`}</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
  );
}

export default WinFigureTableForOne;
