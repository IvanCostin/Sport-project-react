import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const columns = [
  { id: 'cat', label: 'Cat', minWidth: 100 },
  { id: 'total_amount', label: 'Total Amount', minWidth: 100 },
  { id: 'won_amount', label: 'Won Amount', minWidth: 100 },
  { id: 'percentage', label: 'Percentage', minWidth: 100 },

];

function TourRatingTable(props) {

  return (
      <Paper className="text-center">
        <Typography variant="h4">Tournament Ratings: <b>{props.Location}</b></Typography>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
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
            </TableHead>
            {/* <TableBody>
              {TournamentData.map(tour => (
                <>
                  <TableRow hover>
                    <TableCell>ServiceGames</TableCell>
                    <TableCell>{isNaN(tour.ServiceGames) || isNaN(tour.ServiceGamesWon) ? "0 / 0 (0%)" : `${((tour.ServiceGamesWon / tour.ServiceGames) * 100).toFixed(1)} % (${tour.ServiceGamesWon} / ${tour.ServiceGames})`}</TableCell>
                    <TableCell>{isNaN(tour.ServGames18) || isNaN(tour.ServGames18Won) ? "0 / 0 (0%)" : `${((tour.ServGames18Won / tour.ServGames18) * 100).toFixed(1)} % (${tour.ServGames18Won} / ${tour.ServGames18})`}</TableCell>
                    <TableCell>{isNaN(tour.ServGames912) || isNaN(tour.ServGames912Won) ? "0 / 0 (0%)" : `${((tour.ServGames912Won / tour.ServGames912) * 100).toFixed(1)} % (${tour.ServGames912Won} / ${tour.ServGames912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>Service Points</TableCell>
                    <TableCell>{isNaN(tour.ServicePoints) || isNaN(tour.ServicePointsWon) ? "0 / 0 (0%)" : `${((tour.ServicePointsWon / tour.ServicePoints) * 100).toFixed(1)} % (${tour.ServicePointsWon} / ${tour.ServicePoints})`}</TableCell>
                    <TableCell>{isNaN(tour.ServPoints18) || isNaN(tour.ServPoints18Won) ? "0 / 0 (0%)" : `${((tour.ServPoints18Won / tour.ServPoints18) * 100).toFixed(1)} % (${tour.ServPoints18Won} / ${tour.ServPoints18})`}</TableCell>
                    <TableCell>{isNaN(tour.ServPoints912) || isNaN(tour.ServPoints912Won) ? "0 / 0 (0%)" : `${((tour.ServPoints912Won / tour.ServPoints912) * 100).toFixed(1)} % (${tour.ServPoints912Won} / ${tour.ServPoints912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>BP's Behind</TableCell>
                    <TableCell>{isNaN(tour.BpBehind) || isNaN(tour.BpBehindWon) ? "0 / 0 (0%)" : `${((tour.BpBehindWon / tour.BpBehind) * 100).toFixed(1)} % (${tour.BpBehindWon} / ${tour.BpBehind})`}</TableCell>
                    <TableCell>{isNaN(tour.BpBehind18) || isNaN(tour.BpBehind18Won) ? "0 / 0 (0%)" : `${((tour.BpBehind18Won / tour.BpBehind18) * 100).toFixed(1)} % (${tour.BpBehind18Won} / ${tour.BpBehind18})`}</TableCell>
                    <TableCell>{isNaN(tour.BpBehind912) || isNaN(tour.BpBehind912Won) ? "0 / 0 (0%)" : `${((tour.BpBehind912Won / tour.BpBehind912) * 100).toFixed(1)} % (${tour.BpBehind912Won} / ${tour.BpBehind912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>Return Games</TableCell>
                    <TableCell>{isNaN(tour.ReturnGames) || isNaN(tour.ReturnGamesWon) ? "0 / 0 (0%)" : `${((tour.ReturnGamesWon / tour.ReturnGames) * 100).toFixed(1)} % (${tour.ReturnGamesWon} / ${tour.ReturnGames})`}</TableCell>
                    <TableCell>{isNaN(tour.ReturnGames18) || isNaN(tour.ReturnGames18Won) ? "0 / 0 (0%)" : `${((tour.ReturnGames18Won / tour.ReturnGames18) * 100).toFixed(1)} % (${tour.ReturnGames18Won} / ${tour.ReturnGames18})`}</TableCell>
                    <TableCell>{isNaN(tour.ReturnGames912) || isNaN(tour.ReturnGames912Won) ? "0 / 0 (0%)" : `${((tour.ReturnGames912Won / tour.ReturnGames912) * 100).toFixed(1)} % (${tour.ReturnGames912Won} / ${tour.ReturnGames912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>Return Points</TableCell>
                    <TableCell>{isNaN(tour.ReturnPoints) || isNaN(tour.ReturnPointsWon) ? "0 / 0 (0%)" : `${((tour.ReturnPointsWon / tour.ReturnPoints) * 100).toFixed(1)} % (${tour.ReturnPointsWon} / ${tour.ReturnPoints})`}</TableCell>
                    <TableCell>{isNaN(tour.ReturnPoints18) || isNaN(tour.ReturnPoints18Won) ? "0 / 0 (0%)" : `${((tour.ReturnPoints18Won / tour.ReturnPoints18) * 100).toFixed(1)} % (${tour.ReturnPoints18Won} / ${tour.ReturnPoints18})`}</TableCell>
                    <TableCell>{isNaN(tour.ReturnPoints912) || isNaN(tour.ReturnPoints912Won) ? "0 / 0 (0%)" : `${((tour.ReturnPoints912Won / tour.ReturnPoints912) * 100).toFixed(1)} % (${tour.ReturnPoints912Won} / ${tour.ReturnPoints912})`}</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>BP's Ahead</TableCell>
                    <TableCell>{isNaN(tour.BpAhead) || isNaN(tour.BpAheadWon) ? "0 / 0 (0%)" : `${((tour.BpAheadWon / tour.BpAhead) * 100).toFixed(1)} % (${tour.BpAheadWon} / ${tour.BpAhead})`}</TableCell>
                    <TableCell>{isNaN(tour.BpAhead18) || isNaN(tour.BpAhead18Won) ? "0 / 0 (0%)" : `${((tour.BpAhead18Won / tour.BpAhead18) * 100).toFixed(1)} % (${tour.BpAhead18Won} / ${tour.BpAhead18})`}</TableCell>
                    <TableCell>{isNaN(tour.BpAhead912) || isNaN(tour.BpAhead912Won) ? "0 / 0 (0%)" : `${((tour.BpAhead912Won / tour.BpAhead912) * 100).toFixed(1)} % (${tour.BpAhead912Won} / ${tour.BpAhead912})`}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
           */}
          </Table>
        </TableContainer>
      </Paper>
  );
}

export default TourRatingTable;
