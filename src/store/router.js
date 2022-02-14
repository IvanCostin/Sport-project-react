import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Header from "../components/Header"
import Home from "../pages/Home"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"
import Admin from "../components/Admin"
import MatchCenter from "../pages/MatchCenter";
import Matchesh2h from "../pages/Matchesh2h";
import Player from "../pages/Player";
import Tournament from "../pages/Tournament";

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: `${process.env.PUBLIC_URL}/signin`,
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);

const PublicRoutes = ({ history, isLoggedIn }) => (
  <ConnectedRouter history={history}>
    <div>
      <Header />
      <Route
        exact
        path='/'
        component={Home}
      />
      <Route
        exact
        path='/login'
        component={Login}
      />
      <Route
        exact
        path='/register'
        component={Register}
      />
      <Route
        exact
        path='/matchcenter'
        component={MatchCenter}
      />
      <Route
        exact
        path='/player/:name'
        component={Player}
      />
      <Route
        exact
        path='/tournament/:location'
        component={Tournament}
      />
      <Route
        exact
        path='/matchesh2h/:player1/:player2/:matchKey'
        component={Matchesh2h}
      />
      {/* <Route
        exact
        path={`${process.env.PUBLIC_URL}/signin`}
        component={asyncComponent(() => import('./containers/Page/signin'))}
      /> */}
      {/* <RestrictedRoute
        path={`${process.env.PUBLIC_URL}/dashboard`}
        component={App}
        isLoggedIn={isLoggedIn}
      /> */}
      <Route
        path='/admin'
        component={Admin}
      />
    </div>
  </ConnectedRouter>
);

// export default connect(state => ({
//   isLoggedIn: state.auth.idToken !== null,
// }))(PublicRoutes);
export default PublicRoutes