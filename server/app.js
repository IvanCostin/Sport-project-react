const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connection } = require('./connection');
// const morgan = require('morgan');
// const cors = require('cors');
const Routes = require('./routes/match');
const match = require('./routes/match_new');
const auth = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// app.use(cookieParser())
app.use(express.static('public'))
// app.use(express.static(__dirname + '/public/build'));

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/build/index.html');
// });

connection.connect();

// Users
app.get('/getMatchData', Routes.getMatchData);
app.post('/getTournamentData', Routes.getTournamentData);
app.post('/betAction', Routes.betAction);

app.use("/api/auth", auth);
app.use("/api/match", match);

// ******************* end routings *********************************

app.listen(5000, function () {
  console.log('Server started on port 5000')
})
