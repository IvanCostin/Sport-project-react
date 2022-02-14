import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { register } from '../../actions/authActions';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#f50057',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  }));


const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isDisable, setIsDisable] = useState(false);


  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }


  useEffect(() => {
    if (email.trim() && password.trim()) {
     setIsDisable(false)
    } else {
     setIsDisable(true)
    }
  }, [email, password]);

  const handleRegister = () => {
    // if (state.email === 'abc@email.com' && state.password === 'password') {
    //   dispatch({
    //     type: 'loginSuccess',
    //     payload: 'Login Successfully'
    //   });
    // } else {
    //   dispatch({
    //     type: 'loginFailed',
    //     payload: 'Incorrect email or password'
    //   });
    // }
    dispatch(register(name, email, password))
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      isDisable || handleRegister();
    }
  };


  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Sign Up" />
        <CardContent>
          <div>
            <TextField
              // error={state.isError}
              fullWidth
              id="name"
              type="name"
              label="Name"
              margin="normal"
              onChange={handleNameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              // error={state.isError}
              fullWidth
              id="email"
              type="email"
              label="Email"
              margin="normal"
              onChange={handleEmailChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              // error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              margin="normal"
              // helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleRegister}
            disabled={isDisable}>
            Register
          </Button>

          <Link to="/login" className="mt-5">Go to Login</Link>
        </CardActions>
      </Card>
    </form>
  );
}

export default Register;