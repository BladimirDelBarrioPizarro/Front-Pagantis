import httpClient from '../../http/httpClient';
import{
    GET_WALLETS_NAME
} from '../../constants/constants';
import{
    GET_WALLETS_BY_NAME
}from '../types/panel.types';


export const getPanelWalletsType = (wallets) => ({
    type:GET_WALLETS_BY_NAME,
    payload:wallets
})

export function getWalletsByNameAction(name){
    return (dispatch) => {
          httpClient.get(GET_WALLETS_NAME+name)
            .then(res =>
                dispatch(getPanelWalletsType(res.data))
            )
            .catch(error => {
                console.log(error)
            })    
    }
}