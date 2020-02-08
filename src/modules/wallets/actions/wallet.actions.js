import httpClient from '../../http/httpClient';
import {
    GET_WALLETS_SUCCESS
}from '../types/wallet.types';
import {
    GET_WALLETS
}from '../../constants/constants';

export const getWalletByUserIdType = (wallets) => ({
    type:GET_WALLETS_SUCCESS,
    payload:wallets
})

export function getWalletsByUserIdAction(id){
    return (dispatch) => {
          httpClient.get(GET_WALLETS+`${id}`)
            .then(res =>
                dispatch(getWalletByUserIdType(res.data))
            )
            .catch(error => {
                console.log(error)
            })    
    }
}