import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { betAction } from "../../actions/matchActions";
import SportsBaseballTwoToneIcon from '@material-ui/icons/SportsBaseballTwoTone';
import Hidden from '@material-ui/core/Hidden';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0
  },
  th: {
    paddingLeft: "2px",
    paddingRight: "2px",
  }
}));
const columns = [
  { id: 'sets', label: 'Sets', align: "center" },
  { id: 'score', label: 'Score', align: "center" },
  { id: 'server', label: 'Server', align: "center" },
  { id: 'odds', label: 'Odds', align: "center" },
  { id: 'pred', label: 'Pred', align: "center" },
  { id: 'odd1hold', label: 'OddsHold', align: "center" },
  { id: 'odd1br', label: 'OddsBreak', align: "center" },

];

function BettingTable(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { LivePrediction } = props;
  const { FlashKey } = LivePrediction[0];

  const handleClick = target => {
    dispatch(betAction({ target, FlashKey }))
  }

  return (
    <Paper className="mt-8 text-center">
      <Typography variant="h6" style={{ background: "rgb(201, 201, 199)" }}>Place Bet</Typography>
      <div className="w-full flex flex-row">
        <div className="w-1/3">
          <Typography className="text-center" style={{ background: "rgb(216, 228, 188)" }}>Player1</Typography>
          <div className="text-center p-16">
            <Button variant="contained" color="primary" onClick={() => handleClick("Player1")}>Bet</Button>
          </div>
        </div>
        <div className="w-1/3">
          <Typography className="text-center" style={{ background: "rgb(238, 252, 167)" }}>Hedge</Typography>
          <div className="text-center p-16">
            <Button variant="contained" color="primary" onClick={() => handleClick("Hedge")}>Bet</Button>
          </div>
        </div>
        <div className="w-1/3">
          <Typography className="text-center" style={{ background: "rgb(216, 228, 188)" }}>Player2</Typography>
          <div className="text-center p-16">
            <Button variant="contained" color="primary" onClick={() => handleClick("Player2")}>Bet</Button>
          </div>
        </div>
      </div>

      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            <TableRow style={{ background: "rgb(201, 201, 199)" }}>

            <Hidden mdUp>
              <TableCell align="center" className={classes.root}>S</TableCell>
            </Hidden>
            <Hidden smDown>
              <TableCell align="center" className={classes.root}>Sets</TableCell>
            </Hidden>
            <Hidden mdUp>
              <TableCell align="center" className={classes.root}>G</TableCell>
            </Hidden>
            <Hidden smDown>
              <TableCell align="center" className={classes.root}>Games</TableCell>
            </Hidden>
            <Hidden mdUp>
              <TableCell align="center" className={classes.root}>S</TableCell>
            </Hidden>
            <Hidden smDown>
              <TableCell align="center" className={classes.root}>Server</TableCell>
            </Hidden>
            <Hidden mdUp>
              <TableCell align="center" className={classes.root}>Odds</TableCell>
            </Hidden>
            <Hidden smDown>
              <TableCell align="center" className={classes.root}>Odds</TableCell>
            </Hidden>
            <Hidden mdUp>
              <TableCell align="center" className={classes.root}>Pred</TableCell>
            </Hidden>
            <Hidden smDown>
              <TableCell align="center" className={classes.root}>Break Prediction</TableCell>
            </Hidden>
            <Hidden mdUp>
              <TableCell align="center" className={classes.root}>Hold</TableCell>
            </Hidden>
            <Hidden smDown>
              <TableCell align="center" className={classes.root}>Odds Hold</TableCell>
            </Hidden>
            <Hidden mdUp>
              <TableCell align="center" className={classes.root}>Break</TableCell>
            </Hidden>
            <Hidden smDown>
              <TableCell align="center" className={classes.root}>Odds Break</TableCell>
            </Hidden>


            </TableRow>

            {LivePrediction.map(match => (
              <TableRow hover key={match.event}>

                <TableCell align="center" className={classes.root} style={{ color: "red", fontWeight: "bold", whiteSpace: "nowrap" }}>
                  {match.Sets1}<br /> {match.Sets2}
                </TableCell>

                <TableCell align="center" className={classes.root} >
                  <b>{
                    match.Set51 + match.Set52 > 0 ?
                      (` (${match.Set51})`)
                      :
                      match.Set41 + match.Set42 > 0 ?
                        (` (${match.Set41})`)
                        :
                        match.Set31 + match.Set32 > 0 ?
                          (` (${match.Set31})`)
                          :
                          match.Set21 + match.Set22 > 0 ?
                            (` (${match.Set21})`)
                            :
                            (` (${match.Set11})`)
                  }</b>
                    <br />
                  <b>{
                    match.Set51 + match.Set52 > 0 ?
                      (` (${match.Set52})`)
                      :
                      match.Set41 + match.Set42 > 0 ?
                        (` (${match.Set42})`)
                        :
                        match.Set31 + match.Set32 > 0 ?
                          (` (${match.Set32})`)
                          :
                          match.Set21 + match.Set22 > 0 ?
                            (` (${match.Set22})`)
                            :
                            (` (${match.Set12})`)
                  }</b>
                </TableCell>

                <TableCell align="center" className={classes.root} style={{ width: 10 }}>
                  {match.Server === 1 ? (<><SportsBaseballTwoToneIcon style={{ color: "#bf9a17", width: 20 }} /><p>&nbsp;</p></>) : (<><p>&nbsp;</p><SportsBaseballTwoToneIcon style={{ color: "#bf9a17", width: 20 }} /></>)}</TableCell>
                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}><span className={"px-4"}>{match.Odds1.toFixed(2)}</span><br /><span className={"px-4"}>{match.Odds2.toFixed(2)}</span></TableCell>
                {/* <TableCell>{match.Odds}</TableCell> */}
                {/* <TableCell>{match.Odds2}</TableCell> */}
                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}>{match.BreakPrediction.toFixed(2)}</TableCell>
                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}><span>{match.Odd1Hold.toFixed(2)}</span><br /><span>{match.Odd2Hold.toFixed(2)}</span></TableCell>
                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}><span>{match.Odd1Break.toFixed(2)}</span><br /><span>{match.Odd2Break.toFixed(2)}</span></TableCell>
                {/* <TableCell>{match.Odd2Hold}</TableCell> */}
                {/* <TableCell>{match.Odd1Break}</TableCell> */}
                {/* <TableCell>{match.Odd2Br}</TableCell> */}
                {/* <TableCell>{match.OddChange}</TableCell> */}
                {/* <TableCell>{match.Set21}-{match.Set22}</TableCell>
                <TableCell>{match.Set31}-{match.Set32}</TableCell>
                <TableCell>{match.Set41}-{match.Set42}</TableCell>
                <TableCell>{match.Set51}-{match.Set52}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default BettingTable;
