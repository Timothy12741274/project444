import {DispatchType} from "../store";
import UserApi from "../../api/UserApi";
import {UserReducer} from "../UserReducer";
import {useNavigate} from "react-router-dom";

export const loginThunk = (email: string, password: string, rememberMe: boolean) => async (dispatch: DispatchType) => {

    try {
        UserApi.login(email, password, rememberMe).then((res)=>{
            console.log(res)
            if(res.error) throw new Error('Error')
                dispatch(UserReducer.actions.setUser(res))
        })
    } catch (e){
        console.log(e)
    }
}