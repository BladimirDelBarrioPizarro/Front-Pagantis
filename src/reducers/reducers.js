import {combineReducers} from 'redux';
import getUsers from '../modules/home/reducer/user.reducer';

export default combineReducers({
    users:getUsers
})