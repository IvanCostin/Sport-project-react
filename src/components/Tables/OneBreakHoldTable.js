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

function BreakHoldTableForOne(props) {
  const BreakHold1 = props.BreakHold1[0];
  const classes = useStyles();

  return (
    <Paper className="mt-8 text-center">
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableRow>
            <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(146, 208, 80)" }}>
              Early Break Ahead
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Total</TableCell>

            <TableCell className={classes.root}>{(BreakHold1.EarlBrAhead1Set1 + BreakHold1.EarlBrAhead1Set2_won1 + BreakHold1.EarlBrAhead1Set2_lost1 + BreakHold1.EarlBrAhead1Set3_lost2 + BreakHold1.EarlBrAhead1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold1.EarlBrAhead1Set1Restored + BreakHold1.EarlBrAhead1Set2_won1Restored + BreakHold1.EarlBrAhead1Set2_lost1Restored + BreakHold1.EarlBrAhead1Set3_won2Restored + BreakHold1.EarlBrAhead1Set3_lost2Restored) / (BreakHold1.EarlBrAhead1Set1 + BreakHold1.EarlBrAhead1Set2_won1 + BreakHold1.EarlBrAhead1Set2_lost1 + BreakHold1.EarlBrAhead1Set3_won2 + BreakHold1.EarlBrAhead1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set1Restored + BreakHold1.EarlBrAhead1Set2_won1Restored + BreakHold1.EarlBrAhead1Set2_lost1Restored + BreakHold1.EarlBrAhead1Set3_won2Restored + BreakHold1.EarlBrAhead1Set3_lost2Restored} / ${BreakHold1.EarlBrAhead1Set1 + BreakHold1.EarlBrAhead1Set2_won1 + BreakHold1.EarlBrAhead1Set2_lost1 + BreakHold1.EarlBrAhead1Set3_won2 + BreakHold1.EarlBrAhead1Set3_lost2})`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 1</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrAhead1Set1 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set1Restored / BreakHold1.EarlBrAhead1Set1) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set1Restored} / ${BreakHold1.EarlBrAhead1Set1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 2 (If Won Set 1)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrAhead1Set2_won1 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set2_won1Restored / BreakHold1.EarlBrAhead1Set2_won1) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set2_won1Restored} / ${BreakHold1.EarlBrAhead1Set2_won1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 2 (If Lost Set 1)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrAhead1Set2_lost1 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set2_lost1Restored / BreakHold1.EarlBrAhead1Set2_lost1) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set2_lost1Restored} / ${BreakHold1.EarlBrAhead1Set2_lost1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 3 (If Won Set 2)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrAhead1Set3_won2 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set3_won2Restored / BreakHold1.EarlBrAhead1Set3_won2) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set3_won2Restored} / ${BreakHold1.EarlBrAhead1Set3_won2})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 3 (If Lost Set 2)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrAhead1Set3_lost2 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set3_lost2Restored / BreakHold1.EarlBrAhead1Set3_lost2) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set3_lost2Restored} / ${BreakHold1.EarlBrAhead1Set3_lost2})`}
            </TableCell>
          </TableRow>

          <br />

          <TableRow>
            <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(245, 105, 77)" }}>
              Early Break Behind
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Total</TableCell>

            <TableCell className={classes.root}>
              {(BreakHold1.EarlBrBehind1Set1 + BreakHold1.EarlBrBehind1Set2_won1 + BreakHold1.EarlBrBehind1Set2_lost1 + BreakHold1.EarlBrBehind1Set3_lost2 + BreakHold1.EarlBrBehind1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold1.EarlBrBehind1Set1Restored + BreakHold1.EarlBrBehind1Set2_won1Restored + BreakHold1.EarlBrBehind1Set2_lost1Restored + BreakHold1.EarlBrBehind1Set3_won2Restored + BreakHold1.EarlBrBehind1Set3_lost2Restored) / (BreakHold1.EarlBrBehind1Set1 + BreakHold1.EarlBrBehind1Set2_won1 + BreakHold1.EarlBrBehind1Set2_lost1 + BreakHold1.EarlBrBehind1Set3_won2 + BreakHold1.EarlBrBehind1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set1Restored + BreakHold1.EarlBrBehind1Set2_won1Restored + BreakHold1.EarlBrBehind1Set2_lost1Restored + BreakHold1.EarlBrBehind1Set3_won2Restored + BreakHold1.EarlBrBehind1Set3_lost2Restored} / ${BreakHold1.EarlBrBehind1Set1 + BreakHold1.EarlBrBehind1Set2_won1 + BreakHold1.EarlBrBehind1Set2_lost1 + BreakHold1.EarlBrBehind1Set3_won2 + BreakHold1.EarlBrBehind1Set3_lost2})`}
            </TableCell>

          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 1</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrBehind1Set1 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set1Restored / BreakHold1.EarlBrBehind1Set1) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set1Restored} / ${BreakHold1.EarlBrBehind1Set1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 2 (If Won Set 1)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrBehind1Set2_won1 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set2_won1Restored / BreakHold1.EarlBrBehind1Set2_won1) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set2_won1Restored} / ${BreakHold1.EarlBrBehind1Set2_won1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 2 (If Lost Set 1)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrBehind1Set2_lost1 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set2_lost1Restored / BreakHold1.EarlBrBehind1Set2_lost1) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set2_lost1Restored} / ${BreakHold1.EarlBrBehind1Set2_lost1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 3 (If Won Set 2)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrBehind1Set3_won2 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set3_won2Restored / BreakHold1.EarlBrBehind1Set3_won2) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set3_won2Restored} / ${BreakHold1.EarlBrBehind1Set3_won2})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 3 (If Lost Set 2)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.EarlBrBehind1Set3_lost2 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set3_lost2Restored / BreakHold1.EarlBrBehind1Set3_lost2) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set3_lost2Restored} / ${BreakHold1.EarlBrBehind1Set3_lost2})`}
            </TableCell>
          </TableRow>

          <br />

          <TableRow>
            <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(146, 208, 80)" }}>
              Late Break Ahead
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Total</TableCell>

            <TableCell className={classes.root}>
              {(BreakHold1.LateBrAhead1Set1 + BreakHold1.LateBrAhead1Set2_won1 + BreakHold1.LateBrAhead1Set2_lost1 + BreakHold1.LateBrAhead1Set3_lost2 + BreakHold1.LateBrAhead1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold1.LateBrAhead1Set1Restored + BreakHold1.LateBrAhead1Set2_won1Restored + BreakHold1.LateBrAhead1Set2_lost1Restored + BreakHold1.LateBrAhead1Set3_won2Restored + BreakHold1.LateBrAhead1Set3_lost2Restored) / (BreakHold1.LateBrAhead1Set1 + BreakHold1.LateBrAhead1Set2_won1 + BreakHold1.LateBrAhead1Set2_lost1 + BreakHold1.LateBrAhead1Set3_won2 + BreakHold1.LateBrAhead1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set1Restored + BreakHold1.LateBrAhead1Set2_won1Restored + BreakHold1.LateBrAhead1Set2_lost1Restored + BreakHold1.LateBrAhead1Set3_won2Restored + BreakHold1.LateBrAhead1Set3_lost2Restored} / ${BreakHold1.LateBrAhead1Set1 + BreakHold1.LateBrAhead1Set2_won1 + BreakHold1.LateBrAhead1Set2_lost1 + BreakHold1.LateBrAhead1Set3_won2 + BreakHold1.LateBrAhead1Set3_lost2})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 1</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrAhead1Set1 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set1Restored / BreakHold1.LateBrAhead1Set1) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set1Restored} / ${BreakHold1.LateBrAhead1Set1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 2 (If Won Set 1)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrAhead1Set2_won1 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set2_won1Restored / BreakHold1.LateBrAhead1Set2_won1) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set2_won1Restored} / ${BreakHold1.LateBrAhead1Set2_won1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 2 (If Lost Set 1)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrAhead1Set2_lost1 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set2_lost1Restored / BreakHold1.LateBrAhead1Set2_lost1) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set2_lost1Restored} / ${BreakHold1.LateBrAhead1Set2_lost1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 3 (If Won Set 2)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrAhead1Set3_won2 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set3_won2Restored / BreakHold1.LateBrAhead1Set3_won2) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set3_won2Restored} / ${BreakHold1.LateBrAhead1Set3_won2})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(216, 228, 188)" }}>Set 3 (If Lost Set 2)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrAhead1Set3_lost2 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set3_lost2Restored / BreakHold1.LateBrAhead1Set3_lost2) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set3_lost2Restored} / ${BreakHold1.LateBrAhead1Set3_lost2})`}
            </TableCell>
          </TableRow>

          <br />

          <TableRow>
            <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(245, 105, 77)" }}>
              Late Break Behind
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Total</TableCell>

            <TableCell className={classes.root}>
              {(BreakHold1.LateBrBehind1Set1 + BreakHold1.LateBrBehind1Set2_won1 + BreakHold1.LateBrBehind1Set2_lost1 + BreakHold1.LateBrBehind1Set3_lost2 + BreakHold1.LateBrBehind1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold1.LateBrBehind1Set1Restored + BreakHold1.LateBrBehind1Set2_won1Restored + BreakHold1.LateBrBehind1Set2_lost1Restored + BreakHold1.LateBrBehind1Set3_won2Restored + BreakHold1.LateBrBehind1Set3_lost2Restored) / (BreakHold1.LateBrBehind1Set1 + BreakHold1.LateBrBehind1Set2_won1 + BreakHold1.LateBrBehind1Set2_lost1 + BreakHold1.LateBrBehind1Set3_won2 + BreakHold1.LateBrBehind1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set1Restored + BreakHold1.LateBrBehind1Set2_won1Restored + BreakHold1.LateBrBehind1Set2_lost1Restored + BreakHold1.LateBrBehind1Set3_won2Restored + BreakHold1.LateBrBehind1Set3_lost2Restored} / ${BreakHold1.LateBrBehind1Set1 + BreakHold1.LateBrBehind1Set2_won1 + BreakHold1.LateBrBehind1Set2_lost1 + BreakHold1.LateBrBehind1Set3_won2 + BreakHold1.LateBrBehind1Set3_lost2})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 1</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrBehind1Set1 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set1Restored / BreakHold1.LateBrBehind1Set1) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set1Restored} / ${BreakHold1.LateBrBehind1Set1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 2 (If Won Set 1)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrBehind1Set2_won1 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set2_won1Restored / BreakHold1.LateBrBehind1Set2_won1) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set2_won1Restored} / ${BreakHold1.LateBrBehind1Set2_won1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 2 (If Lost Set 1)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrBehind1Set2_lost1 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set2_lost1Restored / BreakHold1.LateBrBehind1Set2_lost1) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set2_lost1Restored} / ${BreakHold1.LateBrBehind1Set2_lost1})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 3 (If Won Set 2)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrBehind1Set3_won2 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set3_won2Restored / BreakHold1.LateBrBehind1Set3_won2) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set3_won2Restored} / ${BreakHold1.LateBrBehind1Set3_won2})`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.root} style={{ background: "rgb(252, 206, 192)" }}>Set 3 (If Lost Set 2)</TableCell>

            <TableCell className={classes.root}>
              {BreakHold1.LateBrBehind1Set3_lost2 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set3_lost2Restored / BreakHold1.LateBrBehind1Set3_lost2) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set3_lost2Restored} / ${BreakHold1.LateBrBehind1Set3_lost2})`}
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default BreakHoldTableForOne;
