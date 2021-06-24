import { combineReducers, createStore } from 'redux';
import ThemeReducer from './theme-reducer';
import createObject from './createObjects-reducer';

const reducer = combineReducers({
	theme: ThemeReducer,
	create: createObject,
});

const store = createStore(reducer);

export default store;
