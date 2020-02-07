import {
    GET_WALLETS_SUCCESS
}from '../types/wallet.types';


const initialState = {
    data : []
}

export default function reducer(state = initialState,action){
    switch(action.type){
        case GET_WALLETS_SUCCESS:
            return {
                ...state,
                data:action.payload
            }
        default:
            return state;
    }
} 