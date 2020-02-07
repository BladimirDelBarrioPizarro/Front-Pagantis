import {
    GET_USERS_SUCCESS
}from '../types/user.types';


const initialState = {
    data : []
}

export default function form(state = initialState,action){
    switch(action.type){
        case GET_USERS_SUCCESS:
            return {
                ...state,
                data:action.payload
            }
        default:
            return state;
    }
} 