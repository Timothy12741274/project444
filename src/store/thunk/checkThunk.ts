import {DispatchType} from "../store";
import UserApi from "../../api/UserApi";
import {UserReducer} from "../UserReducer";
import {useNavigate} from "react-router-dom";

export const checkThunk = () => async (dispatch: DispatchType) => {
    try {
        UserApi.checkUser().then((res)=>{
            if(!res.error) {
                dispatch(UserReducer.actions.setUser(res))
            }
        })
    } catch (e){
        console.log(e)
    }
}