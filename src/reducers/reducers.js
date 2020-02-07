import {combineReducers} from 'redux';
import getUsers from '../modules/home/reducer/user.reducer';
import getWallets from '../modules/wallets/reducer/wallet.reducer';

export default combineReducers({
    users:getUsers,
    wallets:getWallets
})