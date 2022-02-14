import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, CardContent, Typography, CardMedia, TextField, AppBar, Tabs, Tab } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getDistinctPlayers, getDistinctTournaments } from "../../actions/matchActions"


const useStyles = makeStyles((theme) => ({
	tabs: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "rgb(184, 204, 228)",
		color: "black",
		width: "100%"
  },
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	option: {
		fontSize: 30,
		'& > span': {
			marginRight: 10,
			fontSize: 20,
		},
	},
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function MatchCenterSearch(props) {
	const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

	const [currentPlayer, setCurrentPlayer] = useState({ DISTINCT: '' });
	const [currentPlayer1, setCurrentPlayer1] = useState({ player1: '' });
	const [currentPlayer2, setCurrentPlayer2] = useState({ player1: '' });
	const [currentLocation, setCurrentLocation] = useState({ DISTINCT: '' });
	const dispatch = useDispatch();
	const { distinctPlayers: players , distinctTournaments: tournaments } = useSelector(state => state.tennisReducer.match);
	useEffect(() => {
		dispatch(getDistinctPlayers());
		dispatch(getDistinctTournaments());
	}, [getDistinctPlayers, getDistinctTournaments])

	//console.log("Player & Tourna", players, tournaments)

	if (players.length == 0 || tournaments.length == 0) return null;


	const handlePlayerChange = (newValue) => {
		if (newValue === null) {
			setCurrentPlayer({ DISTINCT: '' })
		} else {
			setCurrentPlayer(newValue);
		}
	}

	const handlePlayer1Change = (newValue) => {
		if (newValue === null) {
			setCurrentPlayer1({ HomeTeam: '' })
		} else {
			setCurrentPlayer1(newValue);
		}
	}

	const handlePlayer2Change = (newValue) => {
		if (newValue === null) {
			setCurrentPlayer2({ HomeTeam: '' })
		} else {
			setCurrentPlayer2(newValue);
		}
	}

	const handleLocationChange = (newValue) => {
		if (newValue === null) {
			setCurrentLocation({ DISTINCT: '' })
		} else {
			setCurrentLocation(newValue);
		}
	}


  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };


	return (


		<Typography variant="h3" className="text-center"><p>Under construction</p></Typography>

	);
}

export default MatchCenterSearch;
