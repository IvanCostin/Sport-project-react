import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, AppBar, Fab, Hidden, Card, CardContent, Typography, Divider, CardMedia, Radio, RadioGroup, FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox, CardActions } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import MatchInfoTable from "../../components/Tables/MatchInfoTable";
import PlayerRatingTable from "../../components/Tables/PlayerRatingTable";
import WinFigureTable from "../../components/Tables/WinFigureTable";
import TieBreakTable from "../../components/Tables/TieBreakTable";
import BreakHoldTable from "../../components/Tables/BreakHoldTable";
import HistoricMatchesTable from "../../components/Tables/HistoricMatchesTable";
import LiveRatingTable from '../../components/Tables/LiveRatingTable';
import GamesWithOddsTable from '../../components/Tables/GamesWithOddsTable';
import SmallOddsTable from '../../components/Tables/SmallOddsTable';
import BettingTable from '../../components/Tables/BettingTable';
import TabPanel from "../../components/MuiComponents/TabPanel";
import GoBackButton from "../../components/MuiComponents/GoBackButton";
import Loading from '../../components/Loading';
import Popover from '@material-ui/core/Popover';

import { getPlayerData, getMatchInfo, getLivePrediction, setLoading } from "../../actions/matchActions";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Matchesh2h(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('player1')

  const handleClick = (event, player) => {
    setAnchorEl(event.currentTarget);
    setCurrentPlayer(player)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentPlayer('HomeTeam')
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [tabValue, setTabValue] = useState(0);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const playerData = useSelector(state => state.tennisReducer.match.playerData);
  const OldMatches = playerData.OldMatches;
  const Stats = playerData.Stats;
  const BreakHold = playerData.BreakHold;
  const TotalMatch1 = BreakHold && BreakHold[0]?.TotalWin + BreakHold[0]?.TotalLost

  const playerData2 = useSelector(state => state.tennisReducer.match.playerData2);
  const OldMatches2 = playerData2.OldMatches;
  const Stats2 = playerData2.Stats;
  const BreakHold2 = playerData2.BreakHold;
  const TotalMatch2 = BreakHold2 && BreakHold2[0]?.TotalWin + BreakHold2[0]?.TotalLost

  //console.log(TotalMatch1, TotalMatch2)


  const { matchInfo, livePrediction, loading } = useSelector(state => state.tennisReducer.match);

  const [data1, setData1] = useState({
    ground: [],
    odds: [],
    venue: '',
    sort: '',
    timeframe: ''
  })

  const [data2, setData2] = useState({
    ground: [],
    odds: [],
    venue: '',
    sort: '',
    timeframe: ''
  })

  const handleClick1 = e => {
    setVisible1(!visible1);
    if (visible2 === true) setVisible2(false);
  }
  const handleClick2 = e => {
    setVisible2(!visible2);
    if (visible1 === true) setVisible1(false);
  }
  var intervalID;

  useEffect(() => {
    dispatch(getPlayerData(props.match.params.player1, data1, 1));
    dispatch(getPlayerData(props.match.params.player2, data2, 2));
    dispatch(getMatchInfo(props.match.params.matchKey));
    dispatch(getLivePrediction(props.match.params.matchKey));
    intervalID = setInterval(() => {
      dispatch(getPlayerData(props.match.params.player1, data1, 1));
      dispatch(getPlayerData(props.match.params.player2, data2, 2));
      dispatch(getMatchInfo(props.match.params.matchKey));
      dispatch(getLivePrediction(props.match.params.matchKey));

    }, 5000);

    return () => {
      clearInterval(intervalID);
      // dispatch(setLoading());
    }
  }, [getPlayerData, getMatchInfo, getLivePrediction, data1, data2, props.match.params])

  const handleChange1 = (e) => {
    if (e.target.checked) {
      var array = [...data1[e.target.id]];
      array.push(e.target.name);
      setData1({ ...data1, [e.target.id]: array })
    } else {
      var array = [...data1[e.target.id]];
      var newArray = array.filter(d => d !== e.target.name)
      setData1({ ...data1, [e.target.id]: newArray })
    }
  }

  const handleChange2 = (e) => {
    if (e.target.checked) {
      var array = [...data2[e.target.id]];
      array.push(e.target.name);
      setData2({ ...data2, [e.target.id]: array })
    } else {
      var array = [...data2[e.target.id]];
      var newArray = array.filter(d => d !== e.target.name)
      setData2({ ...data2, [e.target.id]: newArray })
    }
  }

  const handleRadioChange1 = e => {
    setData1({ ...data1, [e.target.name]: e.target.value })
  }

  const handleRadioChange2 = e => {
    setData2({ ...data2, [e.target.name]: e.target.value })
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (playerData.length === 0 || playerData2.length === 0) return null;

  if (matchInfo === null) {
    return (
      <p className="text-3xl text-center mt-20 font-black text-white">There are no datas</p>
    )
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen relative bg-white">
      <div className="w-full">
        <div className="px-1 flex justify-between items-center flex-wrap" style={{ background: "#B8E4F0" }}>
          <div className="flex items-center">
            {/* <IconButton onClick={GotoPrevious}><ArrowBackIcon /></IconButton> */}
            <GoBackButton />
            <Typography>{matchInfo.Sort} {(matchInfo.Sort === "CHALLENGER") && `(${matchInfo.Gender})`}: {matchInfo.Location}</Typography>
          </div>
          {/* <Typography>{matchInfo.TimeStamp ? matchInfo.TimeStamp : ""}</Typography> */}
        </div>

        <div className="flex items-center justify-between px-5">
        <span className="text-sm sm:text-4xl leading-none"></span>
          <span className="text-sm sm:text-4xl mr-10 leading-none">{matchInfo.HomeTeam}</span>
          <span className="text-sm sm:text-4xl leading-none">vs</span>
          <span className="text-sm sm:text-4xl ml-10 leading-none">{matchInfo.AwayTeam}</span>
          <span className="text-sm sm:text-4xl leading-none"></span>
        </div>


        <AppBar position="static" className="w-full text-black" style={{ backgroundColor: "#E1E8EB" }}>
          <Tabs
            value={tabValue}
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleTabChange}
            aria-label="simple tabs example">
            <Tab label="General" {...a11yProps(0)} />
            {matchInfo.Status == "Scheduledtest" && (<Tab label="Player Ratings" {...a11yProps(1)} />)}
            {matchInfo.Status == "Scheduledtest" && (<Tab label="Win Figures" {...a11yProps(2)} />)}
            {matchInfo.Status == "Scheduledtest" && (<Tab label="Break/Hold Figures" {...a11yProps(3)} />)}
            {matchInfo.Status == "Scheduledtest" && (<Tab label="Tiebreak Figures" {...a11yProps(4)} />)}
            {matchInfo.Status == "Scheduledtest" && (<Tab label="Historical Matches" {...a11yProps(5)} />)}
            {matchInfo.Status == "Scheduledtest" && (<Tab label="End of Game Odds" {...a11yProps(6)} />)}
            {matchInfo.Status == "Scheduledtest" && (<Tab label="Betting" {...a11yProps(7)} />)}
          </Tabs>
        </AppBar>

        <TabPanel value={tabValue} index={0}>
          <MatchInfoTable MatchInfo={matchInfo} />
          <LiveRatingTable LiveRatings={matchInfo} />
          {matchInfo.Status == "Live" && <SmallOddsTable MatchInfo={matchInfo} LivePrediction={livePrediction[0]} />}
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <PlayerRatingTable Stats1={Stats} Stats2={Stats2} TotalMatch1={TotalMatch1} TotalMatch2={TotalMatch2} />
          {/* <PlayerRatingTable Stats={Stats2} PlayerName={props.match.params.player2} /> */}
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <WinFigureTable BreakHold1={BreakHold} BreakHold2={BreakHold2} />
          {/* <WinFigureTable BreakHold={BreakHold2} PlayerName={props.match.params.player2} /> */}
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <BreakHoldTable BreakHold1={BreakHold} BreakHold2={BreakHold2} />
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <TieBreakTable BreakHold1={BreakHold} BreakHold2={BreakHold2} />
        </TabPanel>

        <TabPanel value={tabValue} index={5}>
          <HistoricMatchesTable OldMatches1={OldMatches} OldMatches2={OldMatches2} />
        </TabPanel>

        <TabPanel value={tabValue} index={6}>
          <GamesWithOddsTable LivePrediction={livePrediction} />
        </TabPanel>

        <TabPanel value={tabValue} index={7}>
          <BettingTable LivePrediction={livePrediction} />
        </TabPanel>
      </div>


      <Popover
        // id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      // anchorOrigin={{
      //   vertical: 'bottom',
      //   horizontal: 'center',
      // }}
      // transformOrigin={{
      //   vertical: 'top',
      //   horizontal: 'center',
      // }}
      >
        {currentPlayer === "HomeTeam" ? (
          <Card>
            {/* <CardMedia
            component="img"
            alt="Tennis"
            className="h-72"
            image='/images/tennis6.jpg'
            title="Tennis"
          /> */}
            <CardContent className="flex flex-col">
              <Typography gutterBottom variant="h5" component="h1">
                Search for {props.match.params.player1}
              </Typography>
              <div className="flex justify-around mb-8">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Ground</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox id="ground" onChange={handleChange1} name="Grass" />}
                      label="Grass"
                    />
                    <FormControlLabel
                      control={<Checkbox id="ground" onChange={handleChange1} name="Clay" />}
                      label="Clay"
                    />
                    <FormControlLabel
                      control={<Checkbox id="ground" onChange={handleChange1} name="Hard" />}
                      label="Hard"
                    />
                  </FormGroup>
                </FormControl>

                <Divider orientation="vertical" flexItem />

                <FormControl component="fieldset">
                  <FormLabel component="legend">Odds</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox id="odds" onChange={handleChange1} name="bigfav" />}
                      label="BigFav"
                    />
                    <FormControlLabel
                      control={<Checkbox id="odds" onChange={handleChange1} name="fav" />}
                      label="Fav"
                    />
                    <FormControlLabel
                      control={<Checkbox id="odds" onChange={handleChange1} name="dog" />}
                      label="Dog"
                    />
                    <FormControlLabel
                      control={<Checkbox id="odds" onChange={handleChange1} name="bigdog" />}
                      label="BigDog"
                    />
                  </FormGroup>
                </FormControl>

              </div>

              <Divider variant="middle" />

              <div className="flex mt-8">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Venue</FormLabel>
                  <RadioGroup aria-label="gender" name="venue" onChange={handleRadioChange1}>
                    <FormControlLabel value="Outdoor" control={<Radio />} label="Outdoor" />
                    <FormControlLabel value="Indoor" control={<Radio />} label="Indoor" />
                    <FormControlLabel value="" control={<Radio />} label="All" />
                  </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormLabel component="legend">Sort</FormLabel>
                  <RadioGroup aria-label="gender" name="sort" onChange={handleRadioChange1}>
                    <FormControlLabel value="ATP/WTA" control={<Radio />} label="ATP/WTA" />
                    <FormControlLabel value="Chal/ITF" control={<Radio />} label="Chal/ITF" />
                    <FormControlLabel value="" control={<Radio />} label="All" />
                  </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormLabel component="legend">TimeFrame</FormLabel>
                  <RadioGroup aria-label="gender" name="timeframe" onChange={handleRadioChange1}>
                    <FormControlLabel value="3month" control={<Radio />} label="3 month" />
                    <FormControlLabel value="6month" control={<Radio />} label="6 month" />
                    <FormControlLabel value="12month" control={<Radio />} label="12 month" />
                    <FormControlLabel value="" control={<Radio />} label="All" />
                  </RadioGroup>
                </FormControl>

              </div>

            </CardContent>

          </Card>

        ) : (
          <Card>
            {/* <CardMedia
            component="img"
            alt="Tennis"
            className="h-72"
            image='/images/tennis8.jpg'
            title="Tennis"
          /> */}
            <CardContent className="flex flex-col">
              <Typography gutterBottom variant="h5" component="h1">
                Search Field for {props.match.params.player2}
              </Typography>
              <div className="flex justify-around mb-8">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Ground</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox id="ground" color="primary" onChange={handleChange2} name="Grass" />}
                      label="Grass"
                    />
                    <FormControlLabel
                      control={<Checkbox id="ground" color="primary" onChange={handleChange2} name="Clay" />}
                      label="Clay"
                    />
                    <FormControlLabel
                      control={<Checkbox id="ground" color="primary" onChange={handleChange2} name="Hard" />}
                      label="Hard"
                    />
                  </FormGroup>
                </FormControl>

                <Divider orientation="vertical" flexItem />

                <FormControl component="fieldset">
                  <FormLabel component="legend">Odds</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox id="odds" color="primary" onChange={handleChange2} name="bigfav" />}
                      label="BigFav"
                    />
                    <FormControlLabel
                      control={<Checkbox id="odds" color="primary" onChange={handleChange2} name="fav" />}
                      label="Fav"
                    />
                    <FormControlLabel
                      control={<Checkbox id="odds" color="primary" onChange={handleChange2} name="dog" />}
                      label="Dog"
                    />
                    <FormControlLabel
                      control={<Checkbox id="odds" color="primary" onChange={handleChange2} name="bigdog" />}
                      label="BigDog"
                    />
                  </FormGroup>
                </FormControl>

              </div>

              <Divider variant="middle" />

              <div className="flex justify-around mt-8">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Venue</FormLabel>
                  <RadioGroup aria-label="gender" name="venue" onChange={handleRadioChange2}>
                    <FormControlLabel value="outdoor" control={<Radio color="primary" />} label="Outdoor" />
                    <FormControlLabel value="indoor" control={<Radio color="primary" />} label="Indoor" />
                    <FormControlLabel value="" control={<Radio color="primary" />} label="All" />
                  </RadioGroup>
                </FormControl>

                <Divider orientation="vertical" flexItem className="mx-4" />

                <FormControl component="fieldset">
                  <FormLabel component="legend">Sort</FormLabel>
                  <RadioGroup aria-label="gender" name="sort" onChange={handleRadioChange2}>
                    <FormControlLabel value="ATP/WTA" control={<Radio color="primary" />} label="ATP/WTA" />
                    <FormControlLabel value="Chal/ITF" control={<Radio color="primary" />} label="Chal/ITF" />
                    <FormControlLabel value="" control={<Radio color="primary" />} label="All" />
                  </RadioGroup>
                </FormControl>

                <Divider orientation="vertical" flexItem />

                <FormControl component="fieldset">
                  <FormLabel component="legend">TimeFrame</FormLabel>
                  <RadioGroup aria-label="gender" name="timeframe" onChange={handleRadioChange2}>
                    <FormControlLabel value="3month" control={<Radio color="primary" />} label="3 months" />
                    <FormControlLabel value="6month" control={<Radio color="primary" />} label="6 months" />
                    <FormControlLabel value="12month" control={<Radio color="primary" />} label="12 months" />
                    <FormControlLabel value="" control={<Radio color="primary" />} label="All" />
                  </RadioGroup>
                </FormControl>

              </div>

            </CardContent>

          </Card>

        )}

      </Popover>



      {/* <div className="w-full ml-8">
        {isLive && (
          <>
            <MatchInfoTable Player1={props.match.params.player1} Player2={props.match.params.player2} MatchKey={props.match.params.matchKey} />

            <LiveRatingTable LiveRatings={[matchInfo]} />

            <GamesWithOddsTable LivePrediction={livePrediction} />
          </>
        )}


        <WinFigureTable BreakHold={BreakHold} PlayerName={props.match.params.player1} />

        <WinFigureTable BreakHold={BreakHold2} PlayerName={props.match.params.player2} />

        <PlayerRatingTable Stats={Stats} PlayerName={props.match.params.player1} />

        <PlayerRatingTable Stats={Stats2} PlayerName={props.match.params.player2} />

        <TieBreakTable BreakHold={BreakHold} PlayerName={props.match.params.player1} />

        <TieBreakTable BreakHold={BreakHold2} PlayerName={props.match.params.player2} />

        <BreakHoldTable BreakHold={BreakHold} PlayerName={props.match.params.player1} />

        <BreakHoldTable BreakHold={BreakHold2} PlayerName={props.match.params.player2} />

        <HistoricMatchesTable OldMatches={OldMatches} PlayerName={props.match.params.player1} />

        <HistoricMatchesTable OldMatches={OldMatches2} PlayerName={props.match.params.player2} />
      </div> */}
    </div>
  );
}

export default Matchesh2h;
