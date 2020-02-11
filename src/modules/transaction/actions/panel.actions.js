import httpClient from '../../http/httpClient';
import{
    GET_WALLETS_NAME,
    POST_SET_TRANSACTION
} from '../../constants/constants';
import{
    GET_WALLETS_BY_NAME,
    SET_TRANSACTION
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


export const postPanelTransType = (resp) => ({
    type:SET_TRANSACTION,
    payload:resp
})

export function postTransactionAction(transaction){

    return (dispatch) => {
        httpClient.post(POST_SET_TRANSACTION,transaction)
        .then(res =>
            dispatch(postPanelTransType(res.data))
        )
        .catch(error => {
            console.log(error)
        })    
    }
}