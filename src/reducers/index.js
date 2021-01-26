import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ageReducer from './age';
import authReducer from './auth';
import userReducer from './user';
import fruitReducer from './fruit';
import memoReducer from './memo';

const persistConfig = {
  key: 'YOU',
  storage: storage,
};

const allReducers = combineReducers({
  age: ageReducer,
  auth: authReducer,
  user: userReducer,
  fruit: fruitReducer,
  memo: memoReducer,
})

export default persistReducer(persistConfig, allReducers);