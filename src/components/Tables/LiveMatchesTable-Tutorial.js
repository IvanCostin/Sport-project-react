import React from 'react';
import { useDispatch } from "react-redux";
import 'date-fns';
import clsx from 'clsx';
import { Link, useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';
import SportsBaseballTwoToneIcon from '@material-ui/icons/SportsBaseballTwoTone';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { setLoading } from "../../actions/matchActions";

function LiveMatchesTable(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const LiveMatches = props.LiveMatches;
  var uniqueTours = [];
  for (let i of LiveMatches) {
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
      Gender: i.Gender,
      Stage: i.Stage,
      Round: i.Round
    }
    var temp = uniqueTours.find(tour => tour.Sort == tourInfo.Sort && tour.Location == tourInfo.Location && tour.Ground == tourInfo.Ground)
    if (temp === undefined) uniqueTours.push(tourInfo);
  }

  uniqueTours.sort((a, b) => { return a.Number - b.Number })


  const handleRowClick = (match) => {
    dispatch(setLoading());

    if (match.Player1 && match.Player2 && match.MatchKey) {
      // dispatch()
      history.push(`/matchesh2h/${match.Player1}/${match.Player2}/${match.MatchKey}`);
    }
  }

  if (LiveMatches.length == 0) {
    return (
      <p className="text-3xl text-center mt-20 font-black">There are no live matches now!</p>
    )
  };


  return (
    <>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {uniqueTours.map(eachTour => (
              <>
                <TableRow hover key={eachTour.Location} style={{ background: "#e4e4e3" }} >

                  <TableCell className="mr-4 py-0 px-1" colSpan={2}>
                    <b>{eachTour.Sort} :  {eachTour.Location} ({eachTour.Ground}{eachTour.Venue == "Indoor" && ` - Indoor`})</b>
                  </TableCell>

                  <TableCell className="py-0 px-1"></TableCell>

                  <Hidden mdUp>
                    <TableCell className="py-0 px-1 text-center" style={{fontFamily: "...font you want"}}></TableCell>
                  </Hidden>
                  <Hidden mdDown>
                    <TableCell className="py-0 px-1 text-center" style={{fontFamily: "another font"}}>SETS</TableCell>
                  </Hidden>
                  Can you understand?
                  Yes, but rgiht now I think you already had somewhere defined what font, size, width, etc for the
                  class: py-0 px-1
                  Where can I see/change what the settings are for those classes in the mdDown and mdUp?
                  I also used module for this named tailwindcss.
                  You can see about this
                  Can you understand?
                  Yes, I understand. But for example, you made the font sizes of the players smaller when there
                  large names. Where did you code that?



                  This part is for top row that containing matchinfo such as location..
                  I understand that totally, thanx! If the screen is bigger then a certain amount of
                  pixels then you show the mdDown part with "SETS". if mdUp then not. Right?
                  Yeah, great
                  Never mind, go further. I like to see where you do the css for both parts
                  Its just come from node modules named @material-ui. Its supports this system.
                  will show you
                  here, you can see aboutthe responsive system clearly.
                  Ah, ok. And then you set your own setting somewhere in codefiles?
                  What do you mean/
                  Or did you made a breakpoint on md? And that is with 960 pixels?
                  I just used functions that they provide not setting about that anywhere.
                  But what is the exact breakpoint (in pixels) that we are using right now?
                  value         |0px     600px    960px    1280px   1920px
                  Using this.
                  So for smaller then 600px, between 600-960, between 960-1280, etc?
                  Yeah, Right
                  And can we set special settings in each category?
                  Like if < 600 pixels I want size 1.5 and font material.
                  if between 600-960: size 2 and font verdana
                  ???
                  Yes of course
                  Great. Can you show me how you did that?
                  ok
                  There are several ways to do this but will show you simple on way, ok?
                  for now.
                  Ok


                  <Hidden mdUp>
                    <TableCell className="py-0 px-1 text-center"></TableCell>
                    <TableCell className="py-0 px-1 text-center"></TableCell>
                    <TableCell className="py-0 px-1 text-center"></TableCell>
                    <TableCell className="py-0 px-1 text-center"></TableCell>
                    <TableCell className="py-0 px-1 text-center"></TableCell>
                  </Hidden>
                  <Hidden mdDown>
                    <TableCell className="py-0 px-1 text-center">SET 1</TableCell>
                    <TableCell className="py-0 px-1 text-center">SET 2</TableCell>
                    <TableCell className="py-0 px-1 text-center">SET 3</TableCell>
                    <TableCell className="py-0 px-1 text-center">SET 4</TableCell>
                    <TableCell className="py-0 px-1 text-center">SET 5</TableCell>
                  </Hidden>
                </TableRow>
                {(LiveMatches.filter(liveMatch => liveMatch.Sort == eachTour.Sort && liveMatch.Location == eachTour.Location && liveMatch.Ground == eachTour.Ground))
                  .map(match => (
                    <TableRow hover key={match.MatchKey} onClick={() => handleRowClick(match)}>
                      <TableCell className="py-0 px-1" style={{ width: 10 }}><span className={match.Odds1 > 1 && match.Odds1 <= 1.4 ? "px-4 bg-yellow-500" : "px-4"}>{match.Odds1.toFixed(2)}</span><br /><span className={match.Odds2 > 1 && match.Odds2 <= 1.4 ? "px-4 bg-yellow-500" : "px-4"}>{match.Odds2.toFixed(2)}</span></TableCell>
                      <TableCell className="py-0 px-1 text-xs sm:text-base md:text-xl" style={{ whiteSpace: "nowrap" }}>{match.Player1}<br />{match.Player2}</TableCell>
                      <TableCell className="py-0 px-1" style={{ width: 10 }}>{match.Server === 1 ? (<><div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: "#c4dc4d" }} /><p>&nbsp;</p></>) : (<><p>&nbsp;</p><div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: "#c4dc4d" }} /></>)}</TableCell>
                      <TableCell className="py-0 px-1 text-center" style={{ color: "red", fontWeight: "bold", whiteSpace: "nowrap" }}>{match.Sets1}<br /> {match.Sets2}</TableCell>

                      The tailwindcss is also provide responsive system so I used this for this tablecell.
                      so, for me to understand:
                      if big screen it will show normal, if small screen then text-xs?
                      Yeah absolutely correct!
                      Can you show me what options there are for sizes in tailwind?
                      Can you see?
                      Yes, so in this case u used that smallest?
                      styles
                      Yes
                      How would you code it when I want this:
                      < 960: text-xs, font verdana
                      >=960 - 1280: text-base, font material
                      > 1280: text-xl, font helvetica

                      ?
                      Its more complex to show you here now.
                      Do you want this system now?
                      No, but I was a example to understand better.
                      You can know about this well from the tailwindcss.com.
                      Can you show the different breakpoint in tailwind?
                      ok
                      Great, thanx.
                      And then for me to understand total:
                      "py-0 px-1 text-xs sm:text-base md:text-xl"

                      py-0 is standard tailwindcss
                      px-1 is standard tailwindcss
                      sm:text-base: if screen < '639px', then text-base size
                      md:text-xl: if screen > '1279px', then xl size
                      text-xs ??? Is this the standard when pixels > 639 and smaller then 1279????
Yeah, correct!
But text-base is bigger then text-xs???
Yes
oh, the code was wrong.
Somewhere, there is a documentation about this resonsive system. Oh, you can know about this in hfere
Great, I will read it and with this info I can test also!
This helps a lot
Where in this table did you define the standard font family?
So, everywhere in this project the fonts are the same?
Yes
And if we want i a particular cell a different font then we can just do it:

<TableCell className="py-0 px-1 text-center" style={{fontFamily: "arial"}}></TableCell>

Like this?
Yes
Easy
Of course
Haha
I think I understand the basisc for now. Maybe good to give me some time to read into it more and then
maybe we can try to change something when there a live amtches in a hour.
Is that ok?
ok
Thank you very much for this teaching
My pleasure,
Haha
When we do the next session then we can discuss the open points and also the next step. I want to
aply the layout of the live matvhes table also to the other pages.
We will discuss later
Good if I ping you in a hour when we have live matches?
Yes of course
 my friend
 Thx mate!!!
 






                      {(match.Sets1 + match.Sets2 >= 0) ? (
                        <TableCell className="py-0 px-1 text-center" style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 0 && (<><b>{match.Set11}</b> <span className={((match.Set11 > match.Set12 && match.Rating1_1 < match.Rating1_2) || (match.Set11 < match.Set12 && match.Rating1_1 > match.Rating1_2)) ? "bg-green-200" : ""}>({match.Rating1_1})</span><br /><b>{match.Set12}</b> <span className={((match.Set11 > match.Set12 && match.Rating1_1 < match.Rating1_2) || (match.Set11 < match.Set12 && match.Rating1_1 > match.Rating1_2)) ? "bg-green-200" : ""}>({match.Rating1_2})</span></>)}</TableCell>
                      ) : (<TableCell></TableCell>)}
                      {(match.Sets1 + match.Sets2 >= 1) ? (
                        <TableCell className="py-0 px-1 text-center" style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 1 && (<><b>{match.Set21}</b> <span className={((match.Set21 > match.Set22 && match.Rating2_1 < match.Rating2_2) || (match.Set21 < match.Set22 && match.Rating2_1 > match.Rating2_2)) ? "bg-green-200" : ""}>({match.Rating2_1})</span><br /><b>{match.Set22}</b> <span className={((match.Set21 > match.Set22 && match.Rating2_1 < match.Rating2_2) || (match.Set21 < match.Set22 && match.Rating2_1 > match.Rating2_2)) ? "bg-green-200" : ""}>({match.Rating2_2})</span></>)}</TableCell>
                      ) : (<TableCell></TableCell>)}
                      {(match.Sets1 + match.Sets2 >= 2) ? (
                        <TableCell className="py-0 px-1 text-center" style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 2 && (<><b>{match.Set31}</b> <span className={((match.Set31 > match.Set32 && match.Rating3_1 < match.Rating3_2) || (match.Set31 < match.Set32 && match.Rating3_1 > match.Rating3_2)) ? "bg-green-200" : ""}>({match.Rating3_1})</span><br /><b>{match.Set32}</b> <span className={((match.Set31 > match.Set32 && match.Rating3_1 < match.Rating3_2) || (match.Set31 < match.Set32 && match.Rating3_1 > match.Rating3_2)) ? "bg-green-200" : ""}>({match.Rating3_2})</span></>)}</TableCell>
                      ) : (<TableCell></TableCell>)}
                      {(match.Sets1 + match.Sets2 >= 3) ? (
                        <TableCell className="py-0 px-1 text-center" style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 3 && (<><b>{match.Set41}</b> <span className={((match.Set41 > match.Set42 && match.Rating4_1 < match.Rating4_2) || (match.Set41 < match.Set42 && match.Rating4_1 > match.Rating4_2)) ? "bg-green-200" : ""}>({match.Rating4_1})</span><br /><b>{match.Set42}</b> <span className={((match.Set41 > match.Set42 && match.Rating4_1 < match.Rating4_2) || (match.Set41 < match.Set42 && match.Rating4_1 > match.Rating4_2)) ? "bg-green-200" : ""}>({match.Rating4_2})</span></>)}</TableCell>
                      ) : (<TableCell></TableCell>)}
                      {(match.Sets1 + match.Sets2 >= 4) ? (
                        <TableCell className="py-0 px-1 text-center" style={{ whiteSpace: "nowrap" }}>{match.Sets1 + match.Sets2 >= 4 && (<><b>{match.Set51}</b> <span className={((match.Set51 > match.Set52 && match.Rating5_1 < match.Rating5_2) || (match.Set51 < match.Set52 && match.Rating5_1 > match.Rating5_2)) ? "bg-green-200" : ""}>({match.Rating5_1})</span><br /><b>{match.Set52}</b> <span className={((match.Set51 > match.Set52 && match.Rating5_1 < match.Rating5_2) || (match.Set51 < match.Set52 && match.Rating5_1 > match.Rating5_2)) ? "bg-green-200" : ""}>({match.Rating5_2})</span></>)}</TableCell>
                      ) : (<TableCell></TableCell>)}
                      {/* <TableCell className={classes.root} style={{whiteSpace: "nowrap"}}>{match.Sets1 + match.Sets2 >= 0 && (<><b>{match.Set11}</b> <span className={(match.Set11 > match.Set12 && match.Rating1_1 < match.Rating1_2) ? "bg-green-200" : ""}>({match.Rating1_1})</span><br /><b>{match.Set12}</b> <span className={(match.Set11 > match.Set12 && match.Rating1_1 < match.Rating1_2) ? "bg-green-200" : ""}>({match.Rating1_2})</span></>)}</TableCell>
                      <TableCell className={classes.root} style={{whiteSpace: "nowrap"}}>{match.Sets1 + match.Sets2 >= 1 && (<><b>{match.Set21}</b> <span className={(match.Set21 > match.Set22 && match.Rating2_1 < match.Rating2_2) ? "bg-green-200" : ""}>({match.Rating2_1})</span><br /><b>{match.Set22}</b> <span className={(match.Set21 > match.Set22 && match.Rating2_1 < match.Rating2_2) ? "bg-green-200" : ""}>({match.Rating2_2})</span></>)}</TableCell>
                      <TableCell className={classes.root} style={{whiteSpace: "nowrap"}}>{match.Sets1 + match.Sets2 >= 2 && (<><b>{match.Set31}</b> <span className={(match.Set31 > match.Set32 && match.Rating3_1 < match.Rating3_2) ? "bg-green-200" : ""}>({match.Rating3_1})</span><br /><b>{match.Set32}</b> <span className={(match.Set31 > match.Set32 && match.Rating3_1 < match.Rating3_2) ? "bg-green-200" : ""}>({match.Rating3_2})</span></>)}</TableCell>
                      <TableCell className={classes.root} style={{whiteSpace: "nowrap"}}>{match.Sets1 + match.Sets2 >= 3 && (<><b>{match.Set41}</b> <span className={(match.Set41 > match.Set42 && match.Rating4_1 < match.Rating4_2) ? "bg-green-200" : ""}>({match.Rating4_1})</span><br /><b>{match.Set42}</b> <span className={(match.Set41 > match.Set42 && match.Rating4_1 < match.Rating4_2) ? "bg-green-200" : ""}>({match.Rating4_2})</span></>)}</TableCell>
                      <TableCell className={classes.root} style={{whiteSpace: "nowrap"}}>{match.Sets1 + match.Sets2 >= 4 && (<><b>{match.Set51}</b> <span className={(match.Set51 > match.Set52 && match.Rating5_1 < match.Rating5_2) ? "bg-green-200" : ""}>({match.Rating5_1})</span><br /><b>{match.Set52}</b> <span className={(match.Set51 > match.Set52 && match.Rating5_1 < match.Rating5_2) ? "bg-green-200" : ""}>({match.Rating5_2})</span></>)}</TableCell> */}
                      {/* <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 0  && ( <><b>{match.Set11}</b><br /><b>{match.Set12}</b></> )}</TableCell>
                      <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 0 && ( <>({match.Rating1_1})<br />({match.Rating1_2})</> )}</TableCell>
                      <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 1  && ( <><b>{match.Set21}</b><br /><b>{match.Set22}</b></> )}</TableCell>
                      <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 1 && ( <>({match.Rating2_1})<br />({match.Rating2_2})</> )}</TableCell>
                      <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 2  && ( <><b>{match.Set31}</b><br /><b>{match.Set32}</b></> )}</TableCell>
                      <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 2 && ( <>({match.Rating3_1})<br />({match.Rating3_2})</> )}</TableCell>
                      <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 3  && ( <><b>{match.Set41}</b><br /><b>{match.Set42}</b></> )}</TableCell>
                      <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 3 && ( <>({match.Rating4_1})<br />({match.Rating4_2})</> )}</TableCell>
                      <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 4  && ( <><b>{match.Set51}</b><br /><b>{match.Set52}</b></> )}</TableCell>
                      <TableCell className={classes.root}>{match.Sets1 + match.Sets2 >= 4 && ( <>({match.Rating5_1})<br />({match.Rating5_2})</> )}</TableCell> */}
                    </TableRow>
                  ))}
              </>
            ))}

          </TableBody>
        </Table>
      </TableContainer>


    </>
  );
}

export default LiveMatchesTable;
