import httpClient from '../../http/httpClient';
import{
    GET_USERS
} from '../../constants/constants';
import{
    GET_USERS_SUCCESS
}from '../types/user.types';


export const getUsersType = (users) => ({
    type:GET_USERS_SUCCESS,
    payload:users
})

export function getUsersAction(){
    return (dispatch) => {
          httpClient.get(GET_USERS)
            .then(res =>
                dispatch(getUsersType(res.data))
            )
            .catch(error => {
                console.log(error)
            })    
    }
}