import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import PublicRoutes from './store/router';
import { store, history } from './store/store';

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import jwt_decode from "jwt-decode";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded = jwt_decode(localStorage.token);
  store.dispatch(setCurrentUser(decoded));
}

function App() {
  return (
    <Provider store={store}>
      <PublicRoutes history={history} />
    </Provider>
  );
}

export default App;
