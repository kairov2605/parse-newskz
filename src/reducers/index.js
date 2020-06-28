import {combineReducers} from 'redux';

import post from "./post";
import sourceNews from "./sourceNews";

const rootReducers = combineReducers({
  post,
  sourceNews,
});

export default rootReducers;