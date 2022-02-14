import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, AppBar, IconButton, Fab, Card, CardContent, Typography, Divider, CardMedia, Radio, RadioGroup, Checkbox, FormControl, FormGroup, FormLabel, FormControlLabel, CardActions } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { getPlayerData } from "../../actions/matchActions";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import TabPanel from "../../components/MuiComponents/TabPanel";
import GoBackButton from "../../components/MuiComponents/GoBackButton";


import OnePlayerRatingTable from "../../components/Tables/OnePlayerRatingTable";
import OneWinFigureTable from "../../components/Tables/OneWinFigureTable";
import OneTieBreakTable from "../../components/Tables/OneTieBreakTable";
import OneBreakHoldTable from "../../components/Tables/OneBreakHoldTable";
import HistoricMatchesTable from "../../components/Tables/HistoricMatchesTable";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Player(props) {
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState(0);
  const [visible, setVisible] = useState(false);

  const playerData = useSelector(state => state.tennisReducer.match.playerData);
  const { OldMatches, Stats, BreakHold } = playerData;

  const [data, setData] = useState({
    ground: [],
    odds: [],
    venue: '',
    sort: '',
    timeframe: ''
  })

  const handleClick = e => {
    setVisible(!visible);
  }

  useEffect(() => {
    dispatch(getPlayerData(props.match.params.name, data, 1));
  }, [getPlayerData, data, props.match.params])

  const handleChange = (e) => {
    if (e.target.checked) {
      var array = [...data[e.target.id]];
      array.push(e.target.name);
      setData({ ...data, [e.target.id]: array })
    } else {
      var array = [...data[e.target.id]];
      var newArray = array.filter(d => d !== e.target.name)
      setData({ ...data, [e.target.id]: newArray })
    }
  }

  const handleRadioChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (playerData.length == 0) return null;

  return (
    <div className="flex h-full relative bg-white">
      <div className="w-full">
        <div className="px-8 flex justify-between items-center flex-wrap" style={{ background: "#ffc478" }}>
          <div className="flex items-center">
            <GoBackButton />
            <Typography>Player Profile</Typography>
          </div>
        </div>
        <div className="p-8 flex justify-between items-center">
          <Fab size="small" onClick={handleClick} color="secondary" aria-label="search">
            <SearchIcon />
          </Fab>
          <div className="flex-1 text-center">
            <span className="text-2xl te sm:text-4xl sm:mr-12 leading-none">{props.match.params.name}</span>
          </div>
        </div>
        <AppBar position="static" className="w-full text-black" style={{ backgroundColor: "rgb(184, 204, 228)" }}>
          <Tabs
            value={tabValue}
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleTabChange}
            aria-label="simple tabs example">
            <Tab label="General" {...a11yProps(0)} />
            <Tab label="Player Ratings" {...a11yProps(1)} />
            <Tab label="Win Figures" {...a11yProps(2)} />
            <Tab label="Break/Hold Figures" {...a11yProps(3)} />
            <Tab label="Tiebreak Figures" {...a11yProps(4)} />
            <Tab label="Historical Matches" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        {/* <TabPanel value={tabValue} index={0}>
          <MatchInfoTable MatchInfo={matchInfo} />
          <LiveRatingTable LiveRatings={matchInfo} />
          {matchInfo.Status == "Live" && <SmallOddsTable MatchInfo={matchInfo} LivePrediction={livePrediction[0]} />}
        </TabPanel> */}

        <TabPanel value={tabValue} index={1}>
          <OnePlayerRatingTable Stats1={Stats} />
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <OneWinFigureTable BreakHold1={BreakHold} />
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <OneBreakHoldTable BreakHold1={BreakHold} />
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <OneTieBreakTable BreakHold1={BreakHold} />
        </TabPanel>

        <TabPanel value={tabValue} index={5}>
          <HistoricMatchesTable OldMatches1={OldMatches} />
        </TabPanel>
      </div>


      <Card className={visible ? 'visible fixed z-9999' : 'invisible fixed z-9999'} style={{ left: 60, top: 30 }}>
        <CardMedia
          component="img"
          alt="Tennis"
          className="h-72"
          image='/images/tennis6.jpg'
          title="Tennis"
        />
        <CardContent className="flex flex-col">
          <Typography gutterBottom variant="h5" component="h1">
            Search Field for {props.match.params.player1}
          </Typography>
          <div className="flex justify-around mb-8">
            <FormControl component="fieldset">
              <FormLabel component="legend">Ground</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox id="ground" onChange={handleChange} name="Grass" />}
                  label="Grass"
                />
                <FormControlLabel
                  control={<Checkbox id="ground" onChange={handleChange} name="Clay" />}
                  label="Clay"
                />
                <FormControlLabel
                  control={<Checkbox id="ground" onChange={handleChange} name="Hard" />}
                  label="Hard"
                />
              </FormGroup>
            </FormControl>

            <Divider orientation="vertical" flexItem />

            <FormControl component="fieldset">
              <FormLabel component="legend">Odds</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox id="odds" onChange={handleChange} name="bigfav" />}
                  label="BigFav"
                />
                <FormControlLabel
                  control={<Checkbox id="odds" onChange={handleChange} name="fav" />}
                  label="Fav"
                />
                <FormControlLabel
                  control={<Checkbox id="odds" onChange={handleChange} name="dog" />}
                  label="Dog"
                />
                <FormControlLabel
                  control={<Checkbox id="odds" onChange={handleChange} name="bigdog" />}
                  label="BigDog"
                />
              </FormGroup>
            </FormControl>

          </div>

          <Divider variant="middle" />

          <div className="flex justify-around mt-8">
            <FormControl component="fieldset">
              <FormLabel component="legend">Venue</FormLabel>
              <RadioGroup aria-label="gender" name="venue" onChange={handleRadioChange}>
                <FormControlLabel value="Outdoor" control={<Radio />} label="Outdoor" />
                <FormControlLabel value="Indoor" control={<Radio />} label="Indoor" />
                <FormControlLabel value="" control={<Radio />} label="All" />
              </RadioGroup>
            </FormControl>

            <Divider orientation="vertical" flexItem className="mx-4" />

            <FormControl component="fieldset">
              <FormLabel component="legend">Sort</FormLabel>
              <RadioGroup aria-label="gender" name="sort" onChange={handleRadioChange}>
                <FormControlLabel value="ATP/WTA" control={<Radio />} label="ATP/WTA" />
                <FormControlLabel value="Chal/ITF" control={<Radio />} label="Chal/ITF" />
                <FormControlLabel value="" control={<Radio />} label="All" />
              </RadioGroup>
            </FormControl>

            <Divider orientation="vertical" flexItem />

            <FormControl component="fieldset">
              <FormLabel component="legend">TimeFrame</FormLabel>
              <RadioGroup aria-label="gender" name="timeframe" onChange={handleRadioChange}>
                <FormControlLabel value="3month" control={<Radio />} label="3 months" />
                <FormControlLabel value="6month" control={<Radio />} label="6 months" />
                <FormControlLabel value="12month" control={<Radio />} label="12 months" />
                <FormControlLabel value="" control={<Radio />} label="All" />
              </RadioGroup>
            </FormControl>

          </div>

        </CardContent>

      </Card>

    </div>
  );
}

export default Player;
