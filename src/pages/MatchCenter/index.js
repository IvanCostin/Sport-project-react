import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Hidden } from '@material-ui/core';
import LiveMatchesTable from "../../components/Tables/LiveMatchesTable";
import ScheduledMatchesTable from "../../components/Tables/ScheduledMatchesTable";
import FinishedMatchesTable from "../../components/Tables/FinishedMatchesTable";
import { setCurrentTab, getLiveMatches, getScheduledMatches } from "../../actions/matchActions"
import TabPanel from "../../components/MuiComponents/TabPanel";
import MatchCenterSearch from "./MatchCenterSearch";

const StyledTabs = withStyles({
	root: {
		border: "1px solid #121212"
	},
	indicator: {
		backgroundColor: 'transparent',
	},
})(Tabs);

const StyledTab = withStyles((theme) => ({
	root: {
		// backgroundColor: '#B4FE98',
		backgroundColor: '#9FE6A0',
		borderRight: '1px solid black',
	},
	selected: {
		backgroundColor: '#9FE6A0',
		// backgroundColor: '#49FF00',
	},
}))(Tab);


function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function MatchCenter(props) {
	const dispatch = useDispatch();

	const { currentTab, liveMatches, scheduledMatches } = useSelector(state => state.tennisReducer.match);

	useEffect(() => {
		dispatch(getLiveMatches());
		dispatch(getScheduledMatches());
		setInterval(() => {
			dispatch(getLiveMatches());
			dispatch(getScheduledMatches());
		}, 5000);
	}, [getLiveMatches, getScheduledMatches])

	if (liveMatches.length == 0 && scheduledMatches.length == 0) {
		return (
			<p className="text-3xl text-center mt-20 font-black">There are no datas</p>
		)
	};

	const handleTabChange = (event, newValue) => {
		dispatch(setCurrentTab(newValue));
	};

	return (
		<div className="flex bg-white min-h-screen">

			<div className="w-full">
			<Hidden mdUp>
				<AppBar position="static">
					<StyledTabs value={currentTab} variant="fullWidth" onChange={handleTabChange} aria-label="simple tabs example">
						<StyledTab label="Live" {...a11yProps(0)} className="font-black text-xs" />
						<StyledTab label="Scheduled" {...a11yProps(1)} className="font-black text-xs"/>
						<StyledTab label="Finished" {...a11yProps(2)} className="font-black text-xs" />
						<StyledTab label="Search" {...a11yProps(3)} className="font-black text-xs"/>
					</StyledTabs>
				</AppBar>
			</Hidden>
			<Hidden smDown>
				<AppBar position="static">
					<StyledTabs value={currentTab} variant="fullWidth" onChange={handleTabChange} aria-label="simple tabs example">
						<StyledTab label="Live Matches" {...a11yProps(0)} />
						<StyledTab label="Scheduled Matches" {...a11yProps(1)} />
						<StyledTab label="Finished Matches" {...a11yProps(2)} />
						<StyledTab label="Search" {...a11yProps(3)} />
					</StyledTabs>
				</AppBar>
			</Hidden>
				<TabPanel value={currentTab} index={0}>
					<LiveMatchesTable LiveMatches={liveMatches} history={props.history} />
				</TabPanel>
				<TabPanel value={currentTab} index={1}>
					<ScheduledMatchesTable LiveMatches={scheduledMatches} history={props.history} />
				</TabPanel>
				<TabPanel value={currentTab} index={2}>
					<FinishedMatchesTable history={props.history} />
				</TabPanel>
				<TabPanel value={currentTab} index={3}>
					<MatchCenterSearch />
				</TabPanel>
			</div>
		</div >
	);
}

export default MatchCenter;
