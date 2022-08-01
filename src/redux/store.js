import {legacy_createStore as createStore} from 'redux';
import rootReducers from './reducer/handleCart';


const store = createStore(
    rootReducers,
   
);

export default store;