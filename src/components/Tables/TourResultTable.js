import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function TourResultTable(props) {
  const TournamentData = props.TournamentData;
  //console.log("Tour:", TournamentData)
  const generateUniqueTour = (matchArray) => {
    var uniqueTours = [];
    for (let i of matchArray) {
      var number = 0
      switch (i.Round.trim()) {
        case "Final":
          if (i.Stage.trim() == "Main") number = 1;
          else number = 8;
          break;
        case "Semi-finals":
          if (i.Stage.trim() == "Main") number = 2;
          else number = 9;
          break;
        case "Quarter-finals":
          if (i.Stage.trim() == "Main") number = 3;
          else number = 10;
          break;
        case "1/8-finals":
          number = 4;
          break;
        case "1/16-finals":
          number = 5;
          break;
        case "1/32-finals":
          number = 6;
          break;
        case "1/64-finals":
          number = 7;
          break;
        default:
          number = 0;
      }
      var tourInfo = {
        Number: number,
        Round: i.Round,
        Stage: i.Stage,
      }
      var temp = uniqueTours.find(tour => tour.Round == tourInfo.Round && tour.Stage == tourInfo.Stage)
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
    <>
      {/* <Paper className="text-center">
        <Typography variant="h4">Results</Typography>
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
            <TableBody>
              {TournamentData.map(match => (
                <>
                  <TableRow hover key={match.Date}>
                    <TableCell>{`${(new Date(match.Date)).getDate()}-${(new Date(match.Date)).getMonth() + 1}-${(new Date(match.Date)).getFullYear()}`}</TableCell>
                    <TableCell>{match.Round}</TableCell>
                    <TableCell>{match.Ground}</TableCell>
                    <TableCell>{match.Player1}</TableCell>
                    <TableCell>{match.Player2}</TableCell>
                    <TableCell>{`${match.Odds1}-${match.Odds2}`}</TableCell>
                    <TableCell>{`${match.Sets1}-${match.Sets2}`}</TableCell>
                    <TableCell className={match.G1_1 < match.G1_2 && match.R1_1 > match.R1_2 || match.G1_1 > match.G1_2 && match.R1_1 < match.R1_2 ? "active" : ""}>{`${match.G1_1}-${match.G1_2}(${match.R1_1}-${match.R1_2} | ${match.Mom1})`}</TableCell>
                    {match.G2_1 + match.G2_2 > 0 ? (
                      <TableCell className={match.G2_1 < match.G2_2 && match.R2_1 > match.R2_2 || match.G2_1 > match.G2_2 && match.R2_1 < match.R2_2 ? "active" : ""}>{`${match.G2_1}-${match.G2_2}(${match.R2_1}-${match.R2_2} | ${match.Mom2})`}</TableCell>
                    ) : (
                      <TableCell></TableCell>
                    )}
                    {match.G3_1 + match.G3_2 > 0 ? (
                      <TableCell className={match.G3_1 < match.G3_2 && match.R3_1 > match.R3_2 || match.G3_1 > match.G3_2 && match.R3_1 < match.R3_2 ? "active" : ""}>{`${match.G3_1}-${match.G3_2}(${match.R3_1}-${match.R3_2} | ${match.Mom3})`}</TableCell>
                    ) : (
                      <TableCell></TableCell>
                    )}
                  </TableRow>
                </>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </Paper>
       */}

      <Paper className="mt-8 text-center">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableBody>
              {/* <TableRow>
                <TableCell colSpan={11} style={{ background: "rgb(83, 122, 132)", textAlign: "center" }}>
                  {OldMatches1.length != 0 && OldMatches1[0].Player1}
                </TableCell>
              </TableRow> */}

              {generateUniqueTour(TournamentData).map(eachTour => (
                <>
                  <TableRow hover key={eachTour.Location} style={{ background: "#ffc478" }} >
                    <TableCell colSpan={2} style={{ background: "rgb(183, 222, 232)" }}>{eachTour.Stage}: {eachTour.Round}</TableCell>
                    <TableCell style={{ background: "rgb(183, 222, 232)" }}>Player1</TableCell>
                    <TableCell style={{ background: "rgb(183, 222, 232)" }}>Player2</TableCell>
                    <TableCell style={{ background: "rgb(183, 222, 232)" }}>odds</TableCell>
                    <TableCell style={{ background: "rgb(183, 222, 232)" }}>Sets</TableCell>
                    <TableCell style={{ background: "rgb(183, 222, 232)" }}>Set1</TableCell>
                    <TableCell style={{ background: "rgb(183, 222, 232)" }}>Set2</TableCell>
                    <TableCell style={{ background: "rgb(183, 222, 232)" }}>Set3</TableCell>

                  </TableRow>
                  {(TournamentData.filter(tournament => tournament.Round == eachTour.Round && tournament.Stage == eachTour.Stage))
                    .map(match => (
                      <TableRow hover key={match.EventKey} onClick={() => handleRowClick(match)} className="cursor-pointer">
                        <TableCell>{`${(new Date(match.Date)).getDate()}-${(new Date(match.Date)).getMonth() + 1}-${(new Date(match.Date)).getFullYear()}`}</TableCell>
                        <TableCell>{match.Ground}</TableCell>
                        <TableCell>{match.Player1}</TableCell>
                        <TableCell>{match.Player2}</TableCell>
                        <TableCell>{`${match.Odds1}-${match.Odds2}`}</TableCell>
                        <TableCell>{`${match.Sets1}-${match.Sets2}`}</TableCell>
                        <TableCell className={match.G1_1 < match.G1_2 && match.R1_1 > match.R1_2 || match.G1_1 > match.G1_2 && match.R1_1 < match.R1_2 ? "active" : ""}>{`${match.G1_1}-${match.G1_2}(${match.R1_1}-${match.R1_2} | ${match.Mom1})`}</TableCell>
                        {match.G2_1 + match.G2_2 > 0 ? (
                          <TableCell className={match.G2_1 < match.G2_2 && match.R2_1 > match.R2_2 || match.G2_1 > match.G2_2 && match.R2_1 < match.R2_2 ? "active" : ""}>{`${match.G2_1}-${match.G2_2}(${match.R2_1}-${match.R2_2} | ${match.Mom2})`}</TableCell>
                        ) : (
                          <TableCell></TableCell>
                        )}
                        {match.G3_1 + match.G3_2 > 0 ? (
                          <TableCell className={match.G3_1 < match.G3_2 && match.R3_1 > match.R3_2 || match.G3_1 > match.G3_2 && match.R3_1 < match.R3_2 ? "active" : ""}>{`${match.G3_1}-${match.G3_2}(${match.R3_1}-${match.R3_2} | ${match.Mom3})`}</TableCell>
                        ) : (
                          <TableCell></TableCell>
                        )}
                      </TableRow>
                    ))}
                </>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </Paper >
    </>
  );
}

export default TourResultTable;
