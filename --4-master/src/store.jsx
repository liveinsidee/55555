import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer
});

const store = createStore(rootReducer);

export default store;
