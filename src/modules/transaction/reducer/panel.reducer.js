import {
    GET_WALLETS_BY_NAME
}from '../types/panel.types';


const initialState = {
    data : []
}

export default function reducer(state = initialState,action){
    switch(action.type){
        case GET_WALLETS_BY_NAME:
            console.log(action.payload)
            return {
                data:action.payload
            }
        default:
            return state;
    }
} 