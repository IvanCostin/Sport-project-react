import {history} from "../store";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import tennisReducer from "../../reducers";

const createReducer = asyncReducers => 
  combineReducers({
    tennisReducer,
    ...asyncReducers,
    router: connectRouter(history),
  });

export default createReducer;
