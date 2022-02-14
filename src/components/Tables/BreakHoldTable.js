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
import Hidden from '@material-ui/core/Hidden';


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

function BreakHoldTable(props) {
  const BreakHold1 = props.BreakHold1[0];
  const BreakHold2 = props.BreakHold2[0];
  const classes = useStyles();
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
                Early Break Ahead
              </TableCell>
              <TableCell className={classes.root}>
                #{TotalMatch2}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>{(BreakHold1.EarlBrAhead1Set1 + BreakHold1.EarlBrAhead1Set2_won1 + BreakHold1.EarlBrAhead1Set2_lost1 + BreakHold1.EarlBrAhead1Set3_lost2 + BreakHold1.EarlBrAhead1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold1.EarlBrAhead1Set1Restored + BreakHold1.EarlBrAhead1Set2_won1Restored + BreakHold1.EarlBrAhead1Set2_lost1Restored + BreakHold1.EarlBrAhead1Set3_won2Restored + BreakHold1.EarlBrAhead1Set3_lost2Restored) / (BreakHold1.EarlBrAhead1Set1 + BreakHold1.EarlBrAhead1Set2_won1 + BreakHold1.EarlBrAhead1Set2_lost1 + BreakHold1.EarlBrAhead1Set3_won2 + BreakHold1.EarlBrAhead1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set1Restored + BreakHold1.EarlBrAhead1Set2_won1Restored + BreakHold1.EarlBrAhead1Set2_lost1Restored + BreakHold1.EarlBrAhead1Set3_won2Restored + BreakHold1.EarlBrAhead1Set3_lost2Restored} / ${BreakHold1.EarlBrAhead1Set1 + BreakHold1.EarlBrAhead1Set2_won1 + BreakHold1.EarlBrAhead1Set2_lost1 + BreakHold1.EarlBrAhead1Set3_won2 + BreakHold1.EarlBrAhead1Set3_lost2})`}</TableCell>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <TableCell className={classes.root}>{(BreakHold2.EarlBrAhead1Set1 + BreakHold2.EarlBrAhead1Set2_won1 + BreakHold2.EarlBrAhead1Set2_lost1 + BreakHold2.EarlBrAhead1Set3_lost2 + BreakHold2.EarlBrAhead1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold2.EarlBrAhead1Set1Restored + BreakHold2.EarlBrAhead1Set2_won1Restored + BreakHold2.EarlBrAhead1Set2_lost1Restored + BreakHold2.EarlBrAhead1Set3_won2Restored + BreakHold2.EarlBrAhead1Set3_lost2Restored) / (BreakHold2.EarlBrAhead1Set1 + BreakHold2.EarlBrAhead1Set2_won1 + BreakHold2.EarlBrAhead1Set2_lost1 + BreakHold2.EarlBrAhead1Set3_won2 + BreakHold2.EarlBrAhead1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold2.EarlBrAhead1Set1Restored + BreakHold2.EarlBrAhead1Set2_won1Restored + BreakHold2.EarlBrAhead1Set2_lost1Restored + BreakHold2.EarlBrAhead1Set3_won2Restored + BreakHold2.EarlBrAhead1Set3_lost2Restored} / ${BreakHold2.EarlBrAhead1Set1 + BreakHold2.EarlBrAhead1Set2_won1 + BreakHold2.EarlBrAhead1Set2_lost1 + BreakHold2.EarlBrAhead1Set3_won2 + BreakHold2.EarlBrAhead1Set3_lost2})`}</TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrAhead1Set1 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set1Restored / BreakHold1.EarlBrAhead1Set1) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set1Restored} / ${BreakHold1.EarlBrAhead1Set1})`}
              </TableCell>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 1</TableCell>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrAhead1Set1 == 0 ? "No Data" : `${((BreakHold2.EarlBrAhead1Set1Restored / BreakHold2.EarlBrAhead1Set1) * 100).toFixed(1)} % (${BreakHold2.EarlBrAhead1Set1Restored} / ${BreakHold2.EarlBrAhead1Set1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrAhead1Set2_won1 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set2_won1Restored / BreakHold1.EarlBrAhead1Set2_won1) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set2_won1Restored} / ${BreakHold1.EarlBrAhead1Set2_won1})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (Won 1)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (If Won Set 1)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrAhead1Set2_won1 == 0 ? "No Data" : `${((BreakHold2.EarlBrAhead1Set2_won1Restored / BreakHold2.EarlBrAhead1Set2_won1) * 100).toFixed(1)} % (${BreakHold2.EarlBrAhead1Set2_won1Restored} / ${BreakHold2.EarlBrAhead1Set2_won1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrAhead1Set2_lost1 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set2_lost1Restored / BreakHold1.EarlBrAhead1Set2_lost1) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set2_lost1Restored} / ${BreakHold1.EarlBrAhead1Set2_lost1})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (Lost 1)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (If Lost Set 1)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrAhead1Set2_lost1 == 0 ? "No Data" : `${((BreakHold2.EarlBrAhead1Set2_lost1Restored / BreakHold2.EarlBrAhead1Set2_lost1) * 100).toFixed(1)} % (${BreakHold2.EarlBrAhead1Set2_lost1Restored} / ${BreakHold2.EarlBrAhead1Set2_lost1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrAhead1Set3_won2 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set3_won2Restored / BreakHold1.EarlBrAhead1Set3_won2) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set3_won2Restored} / ${BreakHold1.EarlBrAhead1Set3_won2})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (Won 2)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (If Won Set 2)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrAhead1Set3_won2 == 0 ? "No Data" : `${((BreakHold2.EarlBrAhead1Set3_won2Restored / BreakHold2.EarlBrAhead1Set3_won2) * 100).toFixed(1)} % (${BreakHold2.EarlBrAhead1Set3_won2Restored} / ${BreakHold2.EarlBrAhead1Set3_won2})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrAhead1Set3_lost2 == 0 ? "No Data" : `${((BreakHold1.EarlBrAhead1Set3_lost2Restored / BreakHold1.EarlBrAhead1Set3_lost2) * 100).toFixed(1)} % (${BreakHold1.EarlBrAhead1Set3_lost2Restored} / ${BreakHold1.EarlBrAhead1Set3_lost2})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (Lost 2)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (If Lost Set 2)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrAhead1Set3_lost2 == 0 ? "No Data" : `${((BreakHold2.EarlBrAhead1Set3_lost2Restored / BreakHold2.EarlBrAhead1Set3_lost2) * 100).toFixed(1)} % (${BreakHold2.EarlBrAhead1Set3_lost2Restored} / ${BreakHold2.EarlBrAhead1Set3_lost2})`}
              </TableCell>

            </TableRow>

            <br/>

            <TableRow>

              <TableCell className={classes.root} colSpan={3} style={{ background: "rgb(201, 201, 199)" }}>
                Early Break Behind
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {(BreakHold1.EarlBrBehind1Set1 + BreakHold1.EarlBrBehind1Set2_won1 + BreakHold1.EarlBrBehind1Set2_lost1 + BreakHold1.EarlBrBehind1Set3_lost2 + BreakHold1.EarlBrBehind1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold1.EarlBrBehind1Set1Restored + BreakHold1.EarlBrBehind1Set2_won1Restored + BreakHold1.EarlBrBehind1Set2_lost1Restored + BreakHold1.EarlBrBehind1Set3_won2Restored + BreakHold1.EarlBrBehind1Set3_lost2Restored) / (BreakHold1.EarlBrBehind1Set1 + BreakHold1.EarlBrBehind1Set2_won1 + BreakHold1.EarlBrBehind1Set2_lost1 + BreakHold1.EarlBrBehind1Set3_won2 + BreakHold1.EarlBrBehind1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set1Restored + BreakHold1.EarlBrBehind1Set2_won1Restored + BreakHold1.EarlBrBehind1Set2_lost1Restored + BreakHold1.EarlBrBehind1Set3_won2Restored + BreakHold1.EarlBrBehind1Set3_lost2Restored} / ${BreakHold1.EarlBrBehind1Set1 + BreakHold1.EarlBrBehind1Set2_won1 + BreakHold1.EarlBrBehind1Set2_lost1 + BreakHold1.EarlBrBehind1Set3_won2 + BreakHold1.EarlBrBehind1Set3_lost2})`}
              </TableCell>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <TableCell className={classes.root}>
                {(BreakHold2.EarlBrBehind1Set1 + BreakHold2.EarlBrBehind1Set2_won1 + BreakHold2.EarlBrBehind1Set2_lost1 + BreakHold2.EarlBrBehind1Set3_lost2 + BreakHold2.EarlBrBehind1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold2.EarlBrBehind1Set1Restored + BreakHold2.EarlBrBehind1Set2_won1Restored + BreakHold2.EarlBrBehind1Set2_lost1Restored + BreakHold2.EarlBrBehind1Set3_won2Restored + BreakHold2.EarlBrBehind1Set3_lost2Restored) / (BreakHold2.EarlBrBehind1Set1 + BreakHold2.EarlBrBehind1Set2_won1 + BreakHold2.EarlBrBehind1Set2_lost1 + BreakHold2.EarlBrBehind1Set3_won2 + BreakHold2.EarlBrBehind1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold2.EarlBrBehind1Set1Restored + BreakHold2.EarlBrBehind1Set2_won1Restored + BreakHold2.EarlBrBehind1Set2_lost1Restored + BreakHold2.EarlBrBehind1Set3_won2Restored + BreakHold2.EarlBrBehind1Set3_lost2Restored} / ${BreakHold2.EarlBrBehind1Set1 + BreakHold2.EarlBrBehind1Set2_won1 + BreakHold2.EarlBrBehind1Set2_lost1 + BreakHold2.EarlBrBehind1Set3_won2 + BreakHold2.EarlBrBehind1Set3_lost2})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrBehind1Set1 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set1Restored / BreakHold1.EarlBrBehind1Set1) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set1Restored} / ${BreakHold1.EarlBrBehind1Set1})`}
              </TableCell>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 1</TableCell>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrBehind1Set1 == 0 ? "No Data" : `${((BreakHold2.EarlBrBehind1Set1Restored / BreakHold2.EarlBrBehind1Set1) * 100).toFixed(1)} % (${BreakHold2.EarlBrBehind1Set1Restored} / ${BreakHold2.EarlBrBehind1Set1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrBehind1Set2_won1 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set2_won1Restored / BreakHold1.EarlBrBehind1Set2_won1) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set2_won1Restored} / ${BreakHold1.EarlBrBehind1Set2_won1})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (Won 1)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (If Won Set 1)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrBehind1Set2_won1 == 0 ? "No Data" : `${((BreakHold2.EarlBrBehind1Set2_won1Restored / BreakHold2.EarlBrBehind1Set2_won1) * 100).toFixed(1)} % (${BreakHold2.EarlBrBehind1Set2_won1Restored} / ${BreakHold2.EarlBrBehind1Set2_won1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrBehind1Set2_lost1 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set2_lost1Restored / BreakHold1.EarlBrBehind1Set2_lost1) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set2_lost1Restored} / ${BreakHold1.EarlBrBehind1Set2_lost1})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (Lost 1)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (If Lost Set 1)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrBehind1Set2_lost1 == 0 ? "No Data" : `${((BreakHold2.EarlBrBehind1Set2_lost1Restored / BreakHold2.EarlBrBehind1Set2_lost1) * 100).toFixed(1)} % (${BreakHold2.EarlBrBehind1Set2_lost1Restored} / ${BreakHold2.EarlBrBehind1Set2_lost1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrBehind1Set3_won2 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set3_won2Restored / BreakHold1.EarlBrBehind1Set3_won2) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set3_won2Restored} / ${BreakHold1.EarlBrBehind1Set3_won2})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (Won 2)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (If Won Set 2)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrBehind1Set3_won2 == 0 ? "No Data" : `${((BreakHold2.EarlBrBehind1Set3_won2Restored / BreakHold2.EarlBrBehind1Set3_won2) * 100).toFixed(1)} % (${BreakHold2.EarlBrBehind1Set3_won2Restored} / ${BreakHold2.EarlBrBehind1Set3_won2})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.EarlBrBehind1Set3_lost2 == 0 ? "No Data" : `${((BreakHold1.EarlBrBehind1Set3_lost2Restored / BreakHold1.EarlBrBehind1Set3_lost2) * 100).toFixed(1)} % (${BreakHold1.EarlBrBehind1Set3_lost2Restored} / ${BreakHold1.EarlBrBehind1Set3_lost2})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (Lost 2)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (If Lost Set 2)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.EarlBrBehind1Set3_lost2 == 0 ? "No Data" : `${((BreakHold2.EarlBrBehind1Set3_lost2Restored / BreakHold2.EarlBrBehind1Set3_lost2) * 100).toFixed(1)} % (${BreakHold2.EarlBrBehind1Set3_lost2Restored} / ${BreakHold2.EarlBrBehind1Set3_lost2})`}
              </TableCell>

            </TableRow>

            <br/>

            <TableRow>
              <TableCell className={classes.root} colSpan={3} style={{ background: "rgb(201, 201, 199)" }}>
                Late Break Ahead
              </TableCell>
            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {(BreakHold1.LateBrAhead1Set1 + BreakHold1.LateBrAhead1Set2_won1 + BreakHold1.LateBrAhead1Set2_lost1 + BreakHold1.LateBrAhead1Set3_lost2 + BreakHold1.LateBrAhead1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold1.LateBrAhead1Set1Restored + BreakHold1.LateBrAhead1Set2_won1Restored + BreakHold1.LateBrAhead1Set2_lost1Restored + BreakHold1.LateBrAhead1Set3_won2Restored + BreakHold1.LateBrAhead1Set3_lost2Restored) / (BreakHold1.LateBrAhead1Set1 + BreakHold1.LateBrAhead1Set2_won1 + BreakHold1.LateBrAhead1Set2_lost1 + BreakHold1.LateBrAhead1Set3_won2 + BreakHold1.LateBrAhead1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set1Restored + BreakHold1.LateBrAhead1Set2_won1Restored + BreakHold1.LateBrAhead1Set2_lost1Restored + BreakHold1.LateBrAhead1Set3_won2Restored + BreakHold1.LateBrAhead1Set3_lost2Restored} / ${BreakHold1.LateBrAhead1Set1 + BreakHold1.LateBrAhead1Set2_won1 + BreakHold1.LateBrAhead1Set2_lost1 + BreakHold1.LateBrAhead1Set3_won2 + BreakHold1.LateBrAhead1Set3_lost2})`}
              </TableCell>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <TableCell className={classes.root}>
                {(BreakHold2.LateBrAhead1Set1 + BreakHold2.LateBrAhead1Set2_won1 + BreakHold2.LateBrAhead1Set2_lost1 + BreakHold2.LateBrAhead1Set3_lost2 + BreakHold2.LateBrAhead1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold2.LateBrAhead1Set1Restored + BreakHold2.LateBrAhead1Set2_won1Restored + BreakHold2.LateBrAhead1Set2_lost1Restored + BreakHold2.LateBrAhead1Set3_won2Restored + BreakHold2.LateBrAhead1Set3_lost2Restored) / (BreakHold2.LateBrAhead1Set1 + BreakHold2.LateBrAhead1Set2_won1 + BreakHold2.LateBrAhead1Set2_lost1 + BreakHold2.LateBrAhead1Set3_won2 + BreakHold2.LateBrAhead1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold2.LateBrAhead1Set1Restored + BreakHold2.LateBrAhead1Set2_won1Restored + BreakHold2.LateBrAhead1Set2_lost1Restored + BreakHold2.LateBrAhead1Set3_won2Restored + BreakHold2.LateBrAhead1Set3_lost2Restored} / ${BreakHold2.LateBrAhead1Set1 + BreakHold2.LateBrAhead1Set2_won1 + BreakHold2.LateBrAhead1Set2_lost1 + BreakHold2.LateBrAhead1Set3_won2 + BreakHold2.LateBrAhead1Set3_lost2})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrAhead1Set1 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set1Restored / BreakHold1.LateBrAhead1Set1) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set1Restored} / ${BreakHold1.LateBrAhead1Set1})`}
              </TableCell>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 1</TableCell>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrAhead1Set1 == 0 ? "No Data" : `${((BreakHold2.LateBrAhead1Set1Restored / BreakHold2.LateBrAhead1Set1) * 100).toFixed(1)} % (${BreakHold2.LateBrAhead1Set1Restored} / ${BreakHold2.LateBrAhead1Set1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrAhead1Set2_won1 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set2_won1Restored / BreakHold1.LateBrAhead1Set2_won1) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set2_won1Restored} / ${BreakHold1.LateBrAhead1Set2_won1})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (Won 1)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (If Won Set 1)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrAhead1Set2_won1 == 0 ? "No Data" : `${((BreakHold2.LateBrAhead1Set2_won1Restored / BreakHold2.LateBrAhead1Set2_won1) * 100).toFixed(1)} % (${BreakHold2.LateBrAhead1Set2_won1Restored} / ${BreakHold2.LateBrAhead1Set2_won1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrAhead1Set2_lost1 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set2_lost1Restored / BreakHold1.LateBrAhead1Set2_lost1) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set2_lost1Restored} / ${BreakHold1.LateBrAhead1Set2_lost1})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (Lost 1)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (If Lost Set 1)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrAhead1Set2_lost1 == 0 ? "No Data" : `${((BreakHold2.LateBrAhead1Set2_lost1Restored / BreakHold2.LateBrAhead1Set2_lost1) * 100).toFixed(1)} % (${BreakHold2.LateBrAhead1Set2_lost1Restored} / ${BreakHold2.LateBrAhead1Set2_lost1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrAhead1Set3_won2 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set3_won2Restored / BreakHold1.LateBrAhead1Set3_won2) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set3_won2Restored} / ${BreakHold1.LateBrAhead1Set3_won2})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (Won 2)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (If Won Set 2)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrAhead1Set3_won2 == 0 ? "No Data" : `${((BreakHold2.LateBrAhead1Set3_won2Restored / BreakHold2.LateBrAhead1Set3_won2) * 100).toFixed(1)} % (${BreakHold2.LateBrAhead1Set3_won2Restored} / ${BreakHold2.LateBrAhead1Set3_won2})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrAhead1Set3_lost2 == 0 ? "No Data" : `${((BreakHold1.LateBrAhead1Set3_lost2Restored / BreakHold1.LateBrAhead1Set3_lost2) * 100).toFixed(1)} % (${BreakHold1.LateBrAhead1Set3_lost2Restored} / ${BreakHold1.LateBrAhead1Set3_lost2})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (Lost 2)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (If Lost Set 2)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrAhead1Set3_lost2 == 0 ? "No Data" : `${((BreakHold2.LateBrAhead1Set3_lost2Restored / BreakHold2.LateBrAhead1Set3_lost2) * 100).toFixed(1)} % (${BreakHold2.LateBrAhead1Set3_lost2Restored} / ${BreakHold2.LateBrAhead1Set3_lost2})`}
              </TableCell>

            </TableRow>

            <br/>

            <TableRow>
              <TableCell className={classes.root} colSpan={3} style={{ background: "rgb(201, 201, 199)" }}>
                Late Break Behind
              </TableCell>
            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {(BreakHold1.LateBrBehind1Set1 + BreakHold1.LateBrBehind1Set2_won1 + BreakHold1.LateBrBehind1Set2_lost1 + BreakHold1.LateBrBehind1Set3_lost2 + BreakHold1.LateBrBehind1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold1.LateBrBehind1Set1Restored + BreakHold1.LateBrBehind1Set2_won1Restored + BreakHold1.LateBrBehind1Set2_lost1Restored + BreakHold1.LateBrBehind1Set3_won2Restored + BreakHold1.LateBrBehind1Set3_lost2Restored) / (BreakHold1.LateBrBehind1Set1 + BreakHold1.LateBrBehind1Set2_won1 + BreakHold1.LateBrBehind1Set2_lost1 + BreakHold1.LateBrBehind1Set3_won2 + BreakHold1.LateBrBehind1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set1Restored + BreakHold1.LateBrBehind1Set2_won1Restored + BreakHold1.LateBrBehind1Set2_lost1Restored + BreakHold1.LateBrBehind1Set3_won2Restored + BreakHold1.LateBrBehind1Set3_lost2Restored} / ${BreakHold1.LateBrBehind1Set1 + BreakHold1.LateBrBehind1Set2_won1 + BreakHold1.LateBrBehind1Set2_lost1 + BreakHold1.LateBrBehind1Set3_won2 + BreakHold1.LateBrBehind1Set3_lost2})`}
              </TableCell>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Total</TableCell>

              <TableCell className={classes.root}>
                {(BreakHold2.LateBrBehind1Set1 + BreakHold2.LateBrBehind1Set2_won1 + BreakHold2.LateBrBehind1Set2_lost1 + BreakHold2.LateBrBehind1Set3_lost2 + BreakHold2.LateBrBehind1Set3_lost2) == 0 ? "No Data" : `${(((BreakHold2.LateBrBehind1Set1Restored + BreakHold2.LateBrBehind1Set2_won1Restored + BreakHold2.LateBrBehind1Set2_lost1Restored + BreakHold2.LateBrBehind1Set3_won2Restored + BreakHold2.LateBrBehind1Set3_lost2Restored) / (BreakHold2.LateBrBehind1Set1 + BreakHold2.LateBrBehind1Set2_won1 + BreakHold2.LateBrBehind1Set2_lost1 + BreakHold2.LateBrBehind1Set3_won2 + BreakHold2.LateBrBehind1Set3_lost2)) * 100).toFixed(1)} % (${BreakHold2.LateBrBehind1Set1Restored + BreakHold2.LateBrBehind1Set2_won1Restored + BreakHold2.LateBrBehind1Set2_lost1Restored + BreakHold2.LateBrBehind1Set3_won2Restored + BreakHold2.LateBrBehind1Set3_lost2Restored} / ${BreakHold2.LateBrBehind1Set1 + BreakHold2.LateBrBehind1Set2_won1 + BreakHold2.LateBrBehind1Set2_lost1 + BreakHold2.LateBrBehind1Set3_won2 + BreakHold2.LateBrBehind1Set3_lost2})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrBehind1Set1 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set1Restored / BreakHold1.LateBrBehind1Set1) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set1Restored} / ${BreakHold1.LateBrBehind1Set1})`}
              </TableCell>

              <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 1</TableCell>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrBehind1Set1 == 0 ? "No Data" : `${((BreakHold2.LateBrBehind1Set1Restored / BreakHold2.LateBrBehind1Set1) * 100).toFixed(1)} % (${BreakHold2.LateBrBehind1Set1Restored} / ${BreakHold2.LateBrBehind1Set1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrBehind1Set2_won1 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set2_won1Restored / BreakHold1.LateBrBehind1Set2_won1) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set2_won1Restored} / ${BreakHold1.LateBrBehind1Set2_won1})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (Won 1)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (If Won Set 1)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrBehind1Set2_won1 == 0 ? "No Data" : `${((BreakHold2.LateBrBehind1Set2_won1Restored / BreakHold2.LateBrBehind1Set2_won1) * 100).toFixed(1)} % (${BreakHold2.LateBrBehind1Set2_won1Restored} / ${BreakHold2.LateBrBehind1Set2_won1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrBehind1Set2_lost1 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set2_lost1Restored / BreakHold1.LateBrBehind1Set2_lost1) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set2_lost1Restored} / ${BreakHold1.LateBrBehind1Set2_lost1})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (Lost 1)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 2 (If Lost Set 1)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrBehind1Set2_lost1 == 0 ? "No Data" : `${((BreakHold2.LateBrBehind1Set2_lost1Restored / BreakHold2.LateBrBehind1Set2_lost1) * 100).toFixed(1)} % (${BreakHold2.LateBrBehind1Set2_lost1Restored} / ${BreakHold2.LateBrBehind1Set2_lost1})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrBehind1Set3_won2 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set3_won2Restored / BreakHold1.LateBrBehind1Set3_won2) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set3_won2Restored} / ${BreakHold1.LateBrBehind1Set3_won2})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (Won 2)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (If Won Set 2)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrBehind1Set3_won2 == 0 ? "No Data" : `${((BreakHold2.LateBrBehind1Set3_won2Restored / BreakHold2.LateBrBehind1Set3_won2) * 100).toFixed(1)} % (${BreakHold2.LateBrBehind1Set3_won2Restored} / ${BreakHold2.LateBrBehind1Set3_won2})`}
              </TableCell>

            </TableRow>

            <TableRow>

              <TableCell className={classes.root}>
                {BreakHold1.LateBrBehind1Set3_lost2 == 0 ? "No Data" : `${((BreakHold1.LateBrBehind1Set3_lost2Restored / BreakHold1.LateBrBehind1Set3_lost2) * 100).toFixed(1)} % (${BreakHold1.LateBrBehind1Set3_lost2Restored} / ${BreakHold1.LateBrBehind1Set3_lost2})`}
              </TableCell>

              <Hidden mdUp>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (Lost 2)</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Set 3 (If Lost Set 2)</TableCell>
              </Hidden>

              <TableCell className={classes.root}>
                {BreakHold2.LateBrBehind1Set3_lost2 == 0 ? "No Data" : `${((BreakHold2.LateBrBehind1Set3_lost2Restored / BreakHold2.LateBrBehind1Set3_lost2) * 100).toFixed(1)} % (${BreakHold2.LateBrBehind1Set3_lost2Restored} / ${BreakHold2.LateBrBehind1Set3_lost2})`}
              </TableCell>

            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default BreakHoldTable;
