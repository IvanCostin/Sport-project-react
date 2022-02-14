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
import { makeStyles } from '@material-ui/core/styles';
import SportsBaseballTwoToneIcon from '@material-ui/icons/SportsBaseballTwoTone';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: 4,
    // paddingBottom: 4
    padding: "0 4px"

  }
}));

function LiveRatingTable(props) {
  const classes = useStyles();
  const match = props.LiveRatings;
  if (match.Odds1 == undefined) return null;
  return (
    <Paper className="mt-8 text-center">
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            <TableRow style={{ background: "rgb(201, 201, 199)" }}>

              <TableCell className={classes.root} colSpan={9} style={{fontSize: "14px", textAlign: "center" }}>
                Match Rating
              </TableCell>

            </TableRow>

            <TableRow style={{ background: "rgb(238, 252, 167)" }}>

              <Hidden mdUp>
              <TableCell className={classes.root} style={{textAlign: "center" }}></TableCell>
              <TableCell className={classes.root}></TableCell>
              <TableCell className={classes.root}></TableCell>
              <TableCell className={classes.root} style={{textAlign: "center" }}>S</TableCell>
              <TableCell className={classes.root} style={{textAlign: "center" }}>1</TableCell>
              <TableCell className={classes.root} style={{textAlign: "center" }}>2</TableCell>
              <TableCell className={classes.root} style={{textAlign: "center" }}>3</TableCell>
              <TableCell className={classes.root} style={{textAlign: "center" }}>4</TableCell>
              <TableCell className={classes.root} style={{textAlign: "center" }}>5</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root} style={{textAlign: "center" }}>Odds</TableCell>
                <TableCell className={classes.root}>Players</TableCell>
                <TableCell className={classes.root}></TableCell>
                <TableCell className={classes.root} style={{textAlign: "center" }}>Sets</TableCell>
                <TableCell className={classes.root} style={{textAlign: "center" }}>Set 1</TableCell>
                <TableCell className={classes.root} style={{textAlign: "center" }}>Set 2</TableCell>
                <TableCell className={classes.root} style={{textAlign: "center" }}>Set 3</TableCell>
                <TableCell className={classes.root} style={{textAlign: "center" }}>Set 4</TableCell>
                <TableCell className={classes.root} style={{textAlign: "center" }}>Set 5</TableCell>
              </Hidden>
            </TableRow>

            <TableRow hover>

              <TableCell className={classes.root} style={{textAlign: "center" },{ width: 10 }}>
                {match.Odds1.toFixed(2)}<br />{match.Odds2.toFixed(2)}
              </TableCell>

              <TableCell className={classes.root} style={{ whiteSpace: "nowrap" }}>
                {match.Player1}<br />{match.Player2}
              </TableCell>

              <TableCell className={classes.root} style={{ width: 10 }}>
                {
                match.Status != "Finished" && match.Server === 1 ?
                (<><SportsBaseballTwoToneIcon style={{ color: "#bf9a17", width: 20 }} /><p>&nbsp;</p></>)
                :
                  match.Status != "Finished" && match.Server === 2 ?
                  (<><p>&nbsp;</p><SportsBaseballTwoToneIcon style={{ color: "#bf9a17", width: 20 }} /></>)
                  :
                  (<><p>&nbsp;</p><p>&nbsp;</p></>)
                }
              </TableCell>
              <TableCell className={classes.root} style={{textAlign: "center", color: "red", fontWeight: "bold", whiteSpace: "nowrap" }}>{match.Sets1}<br /> {match.Sets2}</TableCell>

              {/* {match.Status != "Finished" && (<TableCell className={classes.root} style={{ width: 10 }}>{match.Server === 1 ? (<><SportsBaseballTwoToneIcon style={{ color: "#bf9a17", width: 20 }} /><p>&nbsp;</p></>) : (<><p>&nbsp;</p><SportsBaseballTwoToneIcon style={{ color: "#bf9a17", width: 20 }} /></>)}</TableCell>)} */}
              {/* <TableCell className={classes.root} style={{ color: "red", fontWeight: "bold" }}>{match.Sets1}<br /> {match.Sets2}</TableCell> */}
              {(match.Set11 + match.Set12 > 0) && (
                <TableCell className={classes.root} style={{textAlign: "center",  whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 0 && (<><b>{match.Set11}</b> <span className={((match.Set11 > match.Set12 && match.Rating1_1 < match.Rating1_2) || (match.Set11 < match.Set12 && match.Rating1_1 > match.Rating1_2)) ? "bg-green-200" : ""}>({match.Rating1_1})</span><br /><b>{match.Set12}</b> <span className={((match.Set11 > match.Set12 && match.Rating1_1 < match.Rating1_2) || (match.Set11 < match.Set12 && match.Rating1_1 > match.Rating1_2)) ? "bg-green-200" : ""}>({match.Rating1_2})</span></>)}</TableCell>
              )}
              {(match.Set21 + match.Set22 > 0) && (
                <TableCell className={classes.root} style={{textAlign: "center",  whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 1 && (<><b>{match.Set21}</b> <span className={((match.Set21 > match.Set22 && match.Rating2_1 < match.Rating2_2) || (match.Set21 < match.Set22 && match.Rating2_1 > match.Rating2_2)) ? "bg-green-200" : ""}>({match.Rating2_1})</span><br /><b>{match.Set22}</b> <span className={((match.Set21 > match.Set22 && match.Rating2_1 < match.Rating2_2) || (match.Set21 < match.Set22 && match.Rating2_1 > match.Rating2_2)) ? "bg-green-200" : ""}>({match.Rating2_2})</span></>)}</TableCell>
              )}
              {(match.Set31 + match.Set32 > 0) && (
                <TableCell className={classes.root} style={{textAlign: "center",  whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 2 && (<><b>{match.Set31}</b> <span className={((match.Set31 > match.Set32 && match.Rating3_1 < match.Rating3_2) || (match.Set31 < match.Set32 && match.Rating3_1 > match.Rating3_2)) ? "bg-green-200" : ""}>({match.Rating3_1})</span><br /><b>{match.Set32}</b> <span className={((match.Set31 > match.Set32 && match.Rating3_1 < match.Rating3_2) || (match.Set31 < match.Set32 && match.Rating3_1 > match.Rating3_2)) ? "bg-green-200" : ""}>({match.Rating3_2})</span></>)}</TableCell>
              )}
              {(match.Set41 + match.Set42 > 0) && (
                <TableCell className={classes.root} style={{textAlign: "center",  whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 3 && (<><b>{match.Set41}</b> <span className={((match.Set41 > match.Set42 && match.Rating4_1 < match.Rating4_2) || (match.Set41 < match.Set42 && match.Rating4_1 > match.Rating4_2)) ? "bg-green-200" : ""}>({match.Rating4_1})</span><br /><b>{match.Set42}</b> <span className={((match.Set41 > match.Set42 && match.Rating4_1 < match.Rating4_2) || (match.Set41 < match.Set42 && match.Rating4_1 > match.Rating4_2)) ? "bg-green-200" : ""}>({match.Rating4_2})</span></>)}</TableCell>
              )}
              {(match.Set51 + match.Set52 > 0) && (
                <TableCell className={classes.root} style={{textAlign: "center",  whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 4 && (<><b>{match.Set51}</b> <span className={((match.Set51 > match.Set52 && match.Rating5_1 < match.Rating5_2) || (match.Set51 < match.Set52 && match.Rating5_1 > match.Rating5_2)) ? "bg-green-200" : ""}>({match.Rating5_1})</span><br /><b>{match.Set52}</b> <span className={((match.Set51 > match.Set52 && match.Rating5_1 < match.Rating5_2) || (match.Set51 < match.Set52 && match.Rating5_1 > match.Rating5_2)) ? "bg-green-200" : ""}>({match.Rating5_2})</span></>)}</TableCell>
              )}

            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Paper >
  );
}

export default LiveRatingTable;
