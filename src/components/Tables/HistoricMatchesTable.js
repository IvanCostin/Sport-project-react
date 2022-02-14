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
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  tableRow: {
    cursor: "pointer"
  }
}));

function HistoricMatchesTable(props) {
  const OldMatches1 = props.OldMatches1;
  let OldMatches2 = [];
  if (props.OldMatches2) OldMatches2 = props.OldMatches2;

  const classes = useStyles();
  const history = useHistory();

  const generateUniqueTour = (matchArray) => {
    var uniqueTours = [];
    for (let i of matchArray) {
      var number = 0
      switch (i.Sort) {
        case "ATP":
          number = 1
          break;
        case "WTA":
          number = 2
          break;
        case "CHALLENGER":
          if (i.Gender == 'Men') number = 3;
          else number = 4;
          break;
        case "ITF":
          number = 5;
          break;
        default:
          number = 5;
      }
      var tourInfo = {
        Number: number,
        Sort: i.Sort,
        Location: i.Location,
        Ground: i.Ground,
        Gender: i.Gender
      }
      var temp = uniqueTours.find(tour => tour.Sort == tourInfo.Sort && tour.Location == tourInfo.Location && tour.Ground == tourInfo.Ground)
      if (temp === undefined) uniqueTours.push(tourInfo);
    }

    uniqueTours.sort((a, b) => { return a.Number - b.Number });
    return uniqueTours;
  }

  const handleRowClick = (match) => {
    // dispatch(setLoading());
    if (match.Player1 && match.Player2 && match.EventKey) {

      // history.push(`/matchesh2h/${match.Player1}/${match.Player2}/${match.EventKey}`);
      window.location.href = `/matchesh2h/${match.Player1}/${match.Player2}/${match.EventKey}`

      // history.push(`/matchcenter`);
    }
  }

  return (
    <Paper className="mt-8 text-center">
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            <TableRow>
              <TableCell className={classes.root} colSpan={11} style={{ background: "rgb(201, 201, 199)", textAlign: "center" }}>
                {OldMatches1.length != 0 && OldMatches1[0].Player1}
              </TableCell>
            </TableRow>

            {generateUniqueTour(OldMatches1).map(eachTour => (
              <>
                <TableRow hover key={eachTour.Location} style={{ background: "#ffc478" }} >
                  <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>{eachTour.Sort}, {eachTour.Location}, {eachTour.Ground}</TableCell>
                  <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Stage</TableCell>
                  <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Round</TableCell>
                  <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Sets</TableCell>
                  <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S1</TableCell>
                  <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S2</TableCell>
                  <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S3</TableCell>
                  <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S4</TableCell>
                  <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S5</TableCell>
                  <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Odds</TableCell>

                </TableRow>
                {(OldMatches1.filter(oldMatch => oldMatch.Sort == eachTour.Sort && oldMatch.Location == eachTour.Location && oldMatch.Ground == eachTour.Ground))
                  .map(match => (
                    <TableRow className={classes.tableRow} hover key={match.EventKey} onClick={() => handleRowClick(match)}>
                      <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Date.split('T')[0]}</TableCell>
                      <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Player1}<br />{match.Player2}</TableCell>
                      <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Stage}</TableCell>
                      <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Round}</TableCell>
                      <TableCell className={classes.root} style={{ color: "red", fontWeight: "bold" }}>{match.Sets1}<br /> {match.Sets2}</TableCell>
                      <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 > 0 && (<><b>{match.G1_1}</b> ({match.R1_1})<br /><b>{match.G1_2}</b> ({match.R1_2})</>)}</TableCell>
                      <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 > 1 && (<><b>{match.G2_1}</b> ({match.R2_1})<br /><b>{match.G2_2}</b> ({match.R2_2})</>)}</TableCell>
                      <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 > 2 && (<><b>{match.G3_1}</b> ({match.R3_1})<br /><b>{match.G3_2}</b> ({match.R3_2})</>)}</TableCell>
                      <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 > 3 && (<><b>{match.G4_1}</b> ({match.R4_1})<br /><b>{match.G4_2}</b> ({match.R4_2})</>)}</TableCell>
                      <TableCell className={classes.root} style={{ width: 50 }}>{match.Sets1 + match.Sets2 > 4 && (<><b>{match.G5_1}</b> ({match.R5_1})<br /><b>{match.G5_2}</b> ({match.R5_2})</>)}</TableCell>
                      <TableCell className={classes.root} style={{ width: 10 }}>{match.Odds1.toFixed(2)}<br />{match.Odds2.toFixed(2)}</TableCell>

                    </TableRow>
                  ))}
              </>
            ))}

            <br />

            {OldMatches2 && (
              <>
                <TableRow>
                  <TableCell className={classes.root} colSpan={11} style={{ background: "rgb(201, 201, 199)", textAlign: "center" }}>
                    {OldMatches2.length != 0 && OldMatches2[0].Player1}
                  </TableCell>
                </TableRow>

                {generateUniqueTour(OldMatches2).map(eachTour => (
                  <>
                    <TableRow hover key={eachTour.Location} style={{ background: "#ffc478" }}>
                      <TableCell className={classes.root} colSpan={2} style={{ background: "rgb(238, 252, 167)" }}>{eachTour.Sort}, {eachTour.Location}, {eachTour.Ground}</TableCell>
                      <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Stage</TableCell>
                      <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Round</TableCell>
                      <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Sets</TableCell>
                      <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S1</TableCell>
                      <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S2</TableCell>
                      <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S3</TableCell>
                      <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S4</TableCell>
                      <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>S5</TableCell>
                      <TableCell className={classes.root} style={{ background: "rgb(238, 252, 167)" }}>Odds</TableCell>

                    </TableRow>
                    {(OldMatches2.filter(oldMatch => oldMatch.Sort == eachTour.Sort && oldMatch.Location == eachTour.Location && oldMatch.Ground == eachTour.Ground))
                      .map(match => (
                        <TableRow className={classes.tableRow} hover key={match.EventKey} onClick={() => handleRowClick(match)}>
                          <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Date.split('T')[0]}</TableCell>
                          <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Player1}<br />{match.Player2}</TableCell>
                          <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Stage}</TableCell>
                          <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Round}</TableCell>
                          <TableCell className={classes.root} style={{ color: "red", fontWeight: "bold" }}>{match.Sets1}<br /> {match.Sets2}</TableCell>
                          <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 > 0 && (<><b>{match.G1_1}</b> ({match.R1_1})<br /><b>{match.G1_2}</b> ({match.R1_2})</>)}</TableCell>
                          <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 > 1 && (<><b>{match.G2_1}</b> ({match.R2_1})<br /><b>{match.G2_2}</b> ({match.R2_2})</>)}</TableCell>
                          <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 > 2 && (<><b>{match.G3_1}</b> ({match.R3_1})<br /><b>{match.G3_2}</b> ({match.R3_2})</>)}</TableCell>
                          <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 > 3 && (<><b>{match.G4_1}</b> ({match.R4_1})<br /><b>{match.G4_2}</b> ({match.R4_2})</>)}</TableCell>
                          <TableCell className={classes.root} style={{ width: 50 }}>{match.Sets1 + match.Sets2 > 4 && (<><b>{match.G5_1}</b> ({match.R5_1})<br /><b>{match.G5_2}</b> ({match.R5_2})</>)}</TableCell>
                          <TableCell className={classes.root} style={{ width: 10 }}>{match.Odds1.toFixed(2)}<br />{match.Odds2.toFixed(2)}</TableCell>

                        </TableRow>
                      ))}
                  </>
                ))}
              </>
            )}

          </TableBody>
        </Table>
      </TableContainer>
    </Paper >
  );
}

export default HistoricMatchesTable;
