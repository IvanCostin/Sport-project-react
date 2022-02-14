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
import { makeStyles } from '@material-ui/core/styles';
import SportsBaseballTwoToneIcon from '@material-ui/icons/SportsBaseballTwoTone';
import Hidden from '@material-ui/core/Hidden';


const columns = [
  { id: 'server', label: 'Server', align: "center" },
  { id: 'sets', label: 'Sets', align: 'center' },
  { id: 'set1', label: 'Set1', align: 'center' },
  { id: 'set2', label: 'Set2', align: 'center' },
  { id: 'set3', label: 'Set3', align: 'center' },
  { id: 'set4', label: 'Set4', align: 'center' },
  { id: 'set5', label: 'Set5', align: 'center' },
  { id: 'odd1', label: 'Odd1', align: 'center' },
  { id: 'odd2', label: 'Odd2', align: 'center' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 8px"
  },
  th: {
    paddingLeft: "2px",
    paddingRight: "2px",
  }
}));

function GamesWithOddsTable(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { Player1, Player2, MatchKey } = props;
  const { matchInfo } = useSelector(state => state.tennisReducer.match);
  const { LivePrediction } = props;
  return (
    <Paper className="mt-8 text-center">
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>

            <TableRow style={{ background: "rgb(201, 201, 199)" }}>

              <Hidden mdUp>
                <TableCell className={classes.root}></TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}></TableCell>
              </Hidden>
              <Hidden mdUp>
                <TableCell className={classes.root}>S</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>Sets</TableCell>
              </Hidden>
              <Hidden mdUp>
                <TableCell align="center" className={classes.root}>1</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>Set1</TableCell>
              </Hidden>
              <Hidden mdUp>
                <TableCell align="center" className={classes.root}>2</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>Set2</TableCell>
              </Hidden>
              <Hidden mdUp>
                <TableCell align="center" className={classes.root}>
		              {LivePrediction.Set31 + LivePrediction.Set32 > 0 &&
                    (<>
			                   3
                    </>)
                  }
		            </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>
            			Set3
            		</TableCell>
              </Hidden>
              <Hidden mdUp>
                <TableCell align="center" className={classes.root}>
		              {LivePrediction.Set41 + LivePrediction.Set42 > 0 &&
                    (<>
			                   4
                    </>)
                  }
		            </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>
            			Set4
            		</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell align="center" className={classes.root}>
		              {LivePrediction.Set51 + LivePrediction.Set52 > 0 &&
                    (<>
			                   5
                    </>)
                  }
		            </TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell align="center" className={classes.root}>
            			Set5
            		</TableCell>
              </Hidden>

              <Hidden mdUp>
                <TableCell className={classes.root}>Odd1</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>Odd1</TableCell>
              </Hidden>
              <Hidden mdUp>
                <TableCell className={classes.root}>Odd2</TableCell>
              </Hidden>
              <Hidden smDown>
                <TableCell className={classes.root}>Odd2</TableCell>
              </Hidden>

            </TableRow>

            {LivePrediction.map(match => (
              <TableRow hover key={match.event}>
                <TableCell align="center" className={classes.root} style={{ width: 30 }}>{match.Server === 1 ? (<><SportsBaseballTwoToneIcon style={{ color: "#bf9a17", width: 20 }} /><p>&nbsp;</p></>) : (<><p>&nbsp;</p><SportsBaseballTwoToneIcon style={{ color: "#bf9a17", width: 20 }} /></>)}</TableCell>

                <TableCell align="center" className={classes.root} style={{ color: "red", fontWeight: "bold", width: 10 }}>{match.Sets1}<br /> {match.Sets2}</TableCell>

                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}>
                  {match.Set11 + match.Set12 >= 0 &&
                    (<>
                      <b>{match.Set11}</b>
                      <span className={(match.Set11 > match.Set12 && match.Rating1 < match.Rating2) ? "bg-green-200" : ""}>
                        {match.Set21 + match.Set22 > 0 ? (` (${match.match.Rating1_1})`) : (` (${match.Rating1})`)}
                      </span>
                      <br />
                      <b>{match.Set12}</b>
                      <span className={(match.Set11 > match.Set12 && match.Rating1 < match.Rating2) ? "bg-green-200" : ""}>
                        {match.Set21 + match.Set22 > 0 ? (` (${match.match.Rating1_2})`) : (` (${match.Rating2})`)}
                      </span>
                    </>)
                  }
                </TableCell>

                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}>
                  {match.Set21 + match.Set22 > 0 &&
                    (<>
                      <b>{match.Set21}</b>
                      <span className={(match.Set21 > match.Set22 && match.match.Rating2_1 < match.match.Rating2_2) ? "bg-green-200" : ""}>
                        {match.Set31 + match.Set32 > 0 ? (` (${match.match.Rating2_1})`) : (` (${match.Rating1})`)}
                      </span>
                      <br />
                      <b>{match.Set22}</b>
                      <span className={(match.Set21 > match.Set22 && match.match.Rating2_1 < match.match.Rating2_2) ? "bg-green-200" : ""}>
                        {match.Set31 + match.Set32 > 0 ? (` (${match.match.Rating2_2})`) : (` (${match.Rating2})`)}
                      </span>
                    </>)
                  }
                </TableCell>

                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}>
                  {match.Set31 + match.Set32 > 0 &&
                    (<><b>{match.Set31}</b>
                      <span className={(match.Set31 > match.Set32 && match.match.Rating3_1 < match.match.Rating3_2) ? "bg-green-200" : ""}>
                        {match.Set41 + match.Set42 > 0 ? (` (${match.match.Rating3_1})`) : (` (${match.Rating1})`)}
                      </span>
                      <br />
                      <b>{match.Set32}</b>
                      <span className={(match.Set31 > match.Set32 && match.match.Rating3_1 < match.match.Rating3_2) ? "bg-green-200" : ""}>
                        {match.Set41 + match.Set42 > 0 ? (` (${match.match.Rating3_2})`) : (` (${match.Rating2})`)}
                      </span>
                    </>)
                  }
                </TableCell>

                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}>
                  {match.Set41 + match.Set42 > 0 &&
                    (<>
                      <b>{match.Set41}</b>
                      <span className={(match.Set41 > match.Set42 && match.match.Rating4_1 < match.match.Rating4_2) ? "bg-green-200" : ""}>
                        {match.Set51 + match.Set52 > 0 ? (` (${match.match.Rating4_1})`) : (` (${match.Rating1})`)}
                      </span>
                      <br />
                      <b>{match.Set42}</b>
                      <span className={(match.Set41 > match.Set42 && match.match.Rating4_1 < match.match.Rating4_2) ? "bg-green-200" : ""}>
                        {match.Set51 + match.Set52 > 0 ? (` (${match.match.Rating4_2})`) : (` (${match.Rating2})`)}
                      </span>
                    </>)
                  }
                </TableCell>

                <TableCell align="center" className={classes.root} style={{ whiteSpace: "nowrap" }}>
                  {match.Set51 + match.Set52 > 0 &&
                    (<>
                      <b>{match.Set51}</b>
                      <span className={(match.Set51 > match.Set52 && match.match.Rating5_1 < match.match.Rating5_2) ? "bg-green-200" : ""}>
                        {match.Set51 + match.Set52 > 0 ? (` (${match.Rating1})`) : (` (${match.Rating1})`)}
                      </span>
                      <br />
                      <b>{match.Set52}</b>
                      <span className={(match.Set51 > match.Set52 && match.match.Rating5_1 < match.match.Rating5_2) ? "bg-green-200" : ""}>
                        {match.Set51 + match.Set52 > 0 ? (` (${match.Rating2})`) : (` (${match.Rating2})`)}
                      </span>
                    </>)
                  }
                </TableCell>
                <TableCell align="center" className={classes.root} style={{ width: 10 }}><span>{match.Odds1.toFixed(2)}</span></TableCell>
                <TableCell align="center" className={classes.root} style={{ width: 10 }}><span>{match.Odds2.toFixed(2)}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default GamesWithOddsTable;
