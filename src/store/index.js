import { createStore } from 'redux';
import allReds from './reducers/AllReducer';

const store = createStore(allReds, {});

export default store;