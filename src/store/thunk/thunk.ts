import {DispatchType} from "../store";
import UserApi from "../../api/UserApi";
import {UserReducer} from "../UserReducer";
import {useNavigate} from "react-router-dom";

export const registrationThunk = (email: string, password: string) => async (dispatch: DispatchType) => {
    try {
        await UserApi.register(email, password).then((res)=>{
            console.log(res)
            if(res.error) throw new Error('Error')
            console.log('1')
                dispatch(UserReducer.actions.setEmail(res.addedUser.email))
        })
    } catch (e){
        console.log(e)
    }
}