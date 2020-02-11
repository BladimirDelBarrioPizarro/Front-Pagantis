import {
    GET_WALLETS_BY_NAME,
    SET_TRANSACTION
}from '../types/panel.types';


const initialState = {
    data : []
}

export default function reducer(state = initialState,action){
    switch(action.type){
        case GET_WALLETS_BY_NAME:
            return {
                data:action.payload
            }
        case SET_TRANSACTION:
            return{
                transaction:action.payload
            }    
        default:
            return state;
    }
} 